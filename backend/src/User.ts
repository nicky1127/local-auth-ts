import mongoose from 'mongoose';

const user = new mongoose.Schema({
	username: {
		type: String,
		unique: true
	},
	password: String,
	isAdmin: {
		type: Boolean,
		defaultt: false
	}
})

export default mongoose.model("User", user);