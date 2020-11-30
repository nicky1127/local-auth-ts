import mongoose, { Error } from "mongoose";
import express from "express";
import cors from "cors";
import passport from "passport";
import passportLocal from "passport-local";
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

mongoose.connect("mongodb+srv://admin-user:Nnwakefield@cluster0.v57xd.mongodb.net/<dbname>?retryWrites=true&w=majority", {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err: Error) => {
	if (err) throw err;
	console.log('Connected to Mongo',)
})


