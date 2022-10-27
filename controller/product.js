const Products = require('../models/productSchema')

const getProduct = async () => {
    return await Products.find({})
}
const addproduct = async (data) => {
    const { name, description, price } = data
    return await Products.create({ name, description, price,})
}

const deleteProduct = async(id)=>{
return await Products.findByIdAndDelete(id)
}

module.exports.getProduct = getProduct
module.exports.addproduct = addproduct
module.exports.deleteProduct = deleteProduct