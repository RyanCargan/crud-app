import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import passport from "passport"
import { Strategy as passportLocal } from "passport-local" // Other options include OAuth 2.0 strategies with some reliance on 3rd party providers
import cookieParser from "cookie-parser"
import bcrypt from "bcryptjs" // Replace with argon2 for better security in production at the cost of more resource usage and slightly more compicated code if sticking with the local hashed password strategy instead of OAuth 2.0
import session from "express-session"
import bodyParser from "body-parser"

import User from "./models/user.mjs"
import Recipe from "./models/recipe.mjs"
import passportConfig from "./auth/passportConfig.mjs"

const app = express()
const PORT = 4000

// Replace these with environment variables hidden from source control (e.g. .env files + dotenv) when in production enivronments
const SECRET = "secretstring"
const DBPASS = "zikapika12345"

// Set up MongoDB connection
mongoose.connect(`mongodb+srv://ryancargan:${DBPASS}@cluster0.52vyl8r.mongodb.net/?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log("Database connection established"))
.catch(err => console.log(err))

// const ObjectId = mongoose.Types.ObjectId

// Get the default connection
const db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Custom middleware
function loggedIn(req, res, next) {
    if (req.user) {
        next()
    } else {
        res.status(401).send('User has failed to login...')
    }
}

function isValidObjectID(parameter, name) {
	let checkForValidMongoDbID = new RegExp("^[0-9a-fA-F]{24}$");
	return checkForValidMongoDbID.test(parameter)
}

// Middleware configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
	origin: true, // Normally a string with the URL & port of the client site
	credentials: true,
}))

app.use(session({
	secret: `${SECRET}`,
	resave: false,
	saveUninitialized: true,
}))

app.use(cookieParser(`${SECRET}`))

app.use(passport.initialize())
app.use(passport.session())
passportConfig(passport) // Alternative to CJS one-liner: require("./auth/passportConfig.mjs")(passport)

/*	Route list
	REST API methods:
		GET: Download resource from server
		POST: Create new resource without considering/replacing existing duplicates
		DELETE: Remove resource from server
		PUT: Create new resource or replace existing one
			 (higher risk of accidental data loss here if partial info is sent by mistake)
		PATCH: Update existing resource without creating new ones
*/

//// RESTful user management routes
app.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err
		if (!user) res.send("No such user exists")
		else {
			req.logIn(user, (err) => {
				if (err) throw err
				res.send("User successfully authenticated & logged in")
				console.log(req.user)
			})
		}
	})(req, res, next)
})

app.post("/register", (req, res) => {
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) throw err
		if (doc) res.send("User already exists")
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10)

			const newUser = new User({
				username: req.body.username,
				password: hashedPassword,
			})
			await newUser.save()
			res.send("User created")
		}
	})
})

app.get("/user", loggedIn, (req, res) => {
    // req.user object can be assumed to exist here
	return res.status(200).send(req.user)
})

app.patch("/user", loggedIn, (req, res) => {
    // req.user object can be assumed to exist here
	return res.status(200).send(req.user)
})

app.delete("/user", loggedIn, (req, res) => {
    // req.user object can be assumed to exist here
	return res.status(200).send(req.user)
})

app.get("/user/_id/:_id", loggedIn, (req, res, next) => {
	if (isValidObjectID(req.params._id) === true){
		User.findById({ _id: req.params._id }, async (err, doc) => { // return User.findById... optional
			if (err) throw err
			if (doc) {
				res.status(200).send({username: doc.username, id: doc.id})
				next()
			} else {
				res.send("No such user")
			}
	})} else {
		res.send("No such user") // Send any res back to ensure client won't hang indefinitely
	}
	// Person.findOne({ 'name.last': 'Ghost' }, ***'name occupation'***, function (err, person) {
	// 	if (err) return handleError(err);
	// 	console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
	//   })
})

//// RESTful recipe management routes

app.post("/recipe", (req, res) => {
	return res.status(200)
})

app.get("/recipe", (req, res) => {
	return res.status(200)
})

app.delete("/recipe", (req, res) => {
	return res.status(200)
})

app.patch("/recipe", (req, res) => {
	return res.status(200)
})

// Server startup point
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
