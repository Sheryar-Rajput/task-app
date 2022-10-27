const express = require('express')
 const router = express.Router()

 router.use('/product',require('./products'))
 router.use('/order',require('./order'))

 module.exports = router