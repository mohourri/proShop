const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const Product = require('../models/productModel')


router.get('/', asyncHandler( async (req , res) =>{
    const products = await Product.find({})
    res.json(products)

}))

router.get('/:id', asyncHandler( async (req , res) =>{
    const prod = await Product.findById(req.params.id)
    if(prod){
    res.json(prod)

    }else{
        res.status(404).json({ message:'product not found'})
    }
}))

module.exports = router