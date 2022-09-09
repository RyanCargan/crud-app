import mongoose, { Schema } from "mongoose"

const user = new Schema({
	username: String,
	password: String,
})

const model = mongoose.model("User", user)

export const schema = model.schema
export default model
