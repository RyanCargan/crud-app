import User from "../models/user.mjs"
import bcrypt from "bcryptjs"
import { Strategy as localStrategy } from "passport-local"
import passport from "passport"

export default ( passport ) => {
	passport.use(
		new localStrategy((username, password, done) => {
			User.findOne({username: username}, (err, user) => {
				if (err) throw err
				if (!user) return done(null, false)
				bcrypt.compare(password, user.password, (err, result) => {
					if (err) throw err
					if (result === true) {
						return done(null, user)
					} else {
						return done(null, false)
					}
				})
			})
		})
	)

	passport.serializeUser((user, cb) => {
		cb(null, user.id)
	})

	passport.deserializeUser((id, cb) => {
		User.findOne({_id: id}, (err, user) => {
			// cb(err, user) // Get all info
			const userInformation = {
				id: user.id,
				username: user.username,
			}
			cb(err, userInformation)
		})
	})
}
