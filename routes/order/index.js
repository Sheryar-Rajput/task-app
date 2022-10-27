const express = require('express')
const router = express.Router()
const { use } = require('../../utils/errorhandler')

const { getOrder, addOrder, deleteOrder} = require('../../controller/order')

router.get('/', use(async (req, res) => {
    const result = await getOrder()
        .catch(err => {
            throw new Error(err)
        })
    res.json(result)
}))
router.post('/', use(async (req, res) => {
    const products = req.body
    const result = await addOrder(products)
        .catch(err => {
            throw new Error(err)
        })
    res.json(result)
}))
router.delete('/:id', use(async (req, res) => {
    const { id } = req.params
    const result = await deleteOrder(id)
        .catch(err => {
            throw new Error(err)
        })
    res.json(result)
}))


module.exports = router