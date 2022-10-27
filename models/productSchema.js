const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Products = new Schema(
  {
    name : {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true
    }
  }
)
const UserProducts = mongoose.model('products', Products)
module.exports = UserProducts