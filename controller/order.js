const Order = require('../models/orderSchema')
const Products = require('../models/productSchema');

const getOrder = async () => {
    return await Order.find({})
}

const addOrder = async (products) => {
    const _sum = await sumProducts(products)
    return await Order.create({ products: products, totalPrice: _sum });
}
// for calculating total price * quantity
const sumProducts = async (products) => {
    const ids = products.map((v) => { return v.productId });  //check valid  products ids
    const _products = await Products.find({ _id: { $in: ids } })
    if(products){
        let sum = 0;
        for (let i = 0; i < _products.length; i++) {
            sum += (products[i].quantity * _products[i].price)
        }
        return sum;
    }
    else{
      return 'not vaild product id'  
    }
    
}
const deleteOrder = async (id) => {
    return await Order.findByIdAndDelete(id)
}

module.exports.getOrder = getOrder
module.exports.addOrder = addOrder
module.exports.deleteOrder = deleteOrder
