const express = require('express')
const router = express.Router()
const { use } = require('../../utils/errorhandler')
const { getProduct,
        addproduct,
        deleteProduct } = require('../../controller/product')
//for all products
router.get('/', use(async (req, res) => {
        const result = await getProduct()
                .catch(err => {
                        throw new Error(err)
                })
        res.json(result)
}))
//for add products
router.post('/',use(async (req, res) => {
        const data = req.body
        const result = await addproduct(data)
                .catch(err => {
                        throw new Error(err)
                })
        res.json(result)
}))
//for delete products
router.delete('/:id', use(async (req, res) => {
        const { id } = req.params
        const result = await deleteProduct(id)
                .catch(err => {
                        throw new Error(err)
                })
        res.json(result)
}))
module.exports = router