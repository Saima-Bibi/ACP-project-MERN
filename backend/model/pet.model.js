import mongoose from 'mongoose'

const petSchema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String,
})

const Pet = mongoose.model("Pet", petSchema);

export default Pet;