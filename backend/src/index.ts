import mongoose, { Error } from "mongoose";
import express, { Request, Response } from "express";
import cors from "cors";
import passport from "passport";
import passportLocal from "passport-local";
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import User from './User'
import { UserInterface } from "./interfaces/UserInterface";

mongoose.connect("mongodb+srv://admin-user:Nnwakefield@cluster0.v57xd.mongodb.net/<dbname>?retryWrites=true&w=majority", {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err: Error) => {
	if (err) throw err;
	console.log('Connected to Mongo',)
})

//Middleware
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(
	session({
		secret: "secretcode",
		resave: true,
		saveUninitialized: true
	})
)
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//Passport
passport.use(new passportLocal.Strategy((username, password, done) => {
	User.findOne({ username: username }, (err, user: any) => {
		if (err) throw err;
		if (!user) return done(null, false);
		bcrypt.compare(password, user.password, (err, result) => {
			if (err) throw err;
			if (result === true) {
				return done(null, user);
			} else {
				return done(null, false)
			}
		})
	})
}))

passport.serializeUser((user: any, cb) => {
	cb(null, user.id)
})
passport.deserializeUser((id: string, cb) => {
	User.findOne({ _id: id }, (err, user: any) => {
		const userInformation = {
			username: user.username,
			isAdmin: user.isAdmin

		};
		cb(err, userInformation)
	})
})

//Route
app.post('/register', async (req: Request, res: Response) => {
	const { username, password } = req?.body

	if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
		res.send("Improper values");
		return;
	}

	User.findOne({ username }, async (err: Error, doc: UserInterface) => {
		if (err) throw err;
		if (doc) res.send('User Already Exists')
		if (!doc) {

			const hashedPassword = await bcrypt.hash(password, 10)
			const newUser = new User({
				username,
				password: hashedPassword
			})

			await newUser.save()
			res.send("Success")
		}
	})

})

app.listen(4000, () => {
	console.log('Server started')
})