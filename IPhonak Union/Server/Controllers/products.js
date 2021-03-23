const express = require('express');
const router = express.Router();
const Product = require('../models/products');

//-------Create "post" New product
router.post('/create',(req,resp)=> {
    var newProduct = req.body
    Product.create(newProduct,(err,data)=>{
      if(!err){
        console.log(data);
        resp.status(201).send(data)
      }else{
        resp.status(400).send(err)
      }
    })
})

///////////// Get "get" all Products
router.get('/getAll',(req,resp)=>{
    Product.find({},(err,data)=>{
      if(!err){
         resp.status(200).send(data)
      }else resp.status(400).send(err)
    })
})

///////////// Delete "delete" Product by Product Name
router.delete('/delete/:productName',(req,resp)=>{
    Product.deleteOne({productName:req.params.productName},(err,data)=>{
      if(!err){
        if(data.deletedCount == 0 )  resp.status(200).send("Product Name is not correct!!")
        else resp.status(200).send(data)
      }else resp.status(400).send(err)
    })
})

/////////// Update "put" Product by Name
router.put('/update/:productName',(req,resp) => {
    var products = req.body
    Product.updateOne({productName:req.params.productName},products,(err,data) => {
       if(!err){
         if(data.nModified == 0) resp.status(200).send("Product Name is not correct!!")
         else resp.status(200).send(data)
       }else resp.status(400).send(err)
    })
})

////////////// Find "get" Product by Product Name
router.get('/find/:productName',(req,resp)=>{
    Product.find({productName:req.params.productName},(err,data)=>{
      if(!err){
        if(data.length == 0) resp.status(200).send("Product Name is not correct!!")
        else resp.status(200).send(data)
      }else resp.status(400).send(err)
    })
})

////////////// Find "get" last 5 products added to the collection
router.get('/newReleases',(req,resp)=>{
    Product.find({},(err,data)=>{
      if(!err){
         resp.status(200).send(data)
      }else resp.status(400).send(err)
    }).sort({_id:-1}).limit(5);
})

////////////// Find "get" last 5 products with price less than 1000$
router.get('/bestSellers',(req,resp)=>{
  Product.find({$or:[{price:{$lt:1000}}]},(err,data)=>{
    if(!err){
       resp.status(200).send(data)
    }else resp.status(400).send(err)
  }).sort({_id:1}).limit(5);
})

////////////// Find "get" last 5 products with price less than 1000$
router.get('/lastchance',(req,resp)=>{
  Product.find({"quantity.quantity":{ $lt: 10 }},(err,data)=>{
    if(!err){
       resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})


///////////// Get "get" all Products with Bundle
router.get('/getBundle',(req,resp)=>{
  Product.find({"bundle":{$exists: true}},(err,data)=>{
    if(!err){
       resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})

///////////// Get "get" Products by type
router.get('/:productType',(req,resp)=>{
  Product.find({"type.type":req.params.productType},(err,data) =>{
    if(!err){
      resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})

module.exports=router