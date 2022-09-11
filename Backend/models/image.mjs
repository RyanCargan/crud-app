import mongoose, { Schema } from "mongoose"

const image = new Schema({
	username: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    },
})

const model = mongoose.model("Image", image)

export const schema = model.schema
export default model
