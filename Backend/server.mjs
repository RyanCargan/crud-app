import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import passport from "passport"
import { Strategy as passportLocal } from "passport-local"
import cookieParser from "cookie-parser"
import bcryptjs from "bcryptjs"
import expressSession from "express-session"
import bodyParser from "body-parser"

const app = express()

// Middleware configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
