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
import passportConfig from "./auth/passportConfig.mjs"

const app = express()
const PORT = 4000

// Replace these with environment variables hidden from source control when in production enivronments
const SECRET = "secretstring"
const DBPASS = "zikapika12345"

mongoose.connect(`mongodb+srv://ryancargan:${DBPASS}@cluster0.52vyl8r.mongodb.net/?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
},
() => {
	console.log("Database connection established")
})

// Middleware configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
	origin: "http://localhost:3000", // URL & port of client app
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

// Route list
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

app.get("/user", (req, res) => {
	res.send(req.user)
})

// Server startup point
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
