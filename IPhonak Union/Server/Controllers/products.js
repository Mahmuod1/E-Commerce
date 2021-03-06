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
router.get('/all-products',(req,resp)=>{
    Product.find({},(err,data)=>{
      if(!err){
         resp.status(200).send(data)
      }else resp.status(400).send(err)
    })
})

///////////// Delete "delete" Product by Product id
router.delete('/delete/:id',(req,resp)=>{
    Product.deleteOne({_id:req.params.id},(err,data)=>{
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
router.get('/new-releases',(req,resp)=>{
    Product.find({},(err,data)=>{
      if(!err){
         resp.status(200).send(data)
      }else resp.status(400).send(err)
    }).sort({_id:-1}).limit(5);
})

////////////// Find "get" last 5 products with price less than 1000$
router.get('/best-sellers',(req,resp)=>{
  Product.find({$or:[{price:{$lt:1000}}]},(err,data)=>{
    if(!err){
       resp.status(200).send(data)
    }else resp.status(400).send(err)
  }).sort({_id:1}).limit(5);
})

////////////// Find "get" last 5 products with price less than 1000$
router.get('/last-chance-to-buy',(req,resp)=>{
  Product.find({"quantity.quantity":{ $lt: 10 }},(err,data)=>{
    if(!err){
       resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})


///////////// Get "get" all Products with Bundle
router.get('/bundles',(req,resp)=>{
  Product.find({"bundle":{$exists: true}},(err,data)=>{
    if(!err){
       resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})
///////////// Get "get" Products by type.kind Only
router.get('/kind/:productKind',(req,resp)=>{
  Product.find({"type.kind":req.params.productKind},(err,data) =>{
    if(!err){
      resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})

///////////// Get "get" Products by typeModel and typeType 
router.get('/full-type/:productName/:productType',(req,resp)=>{
  Product.find({"type.model":req.params.productName,"type.type":req.params.productType},(err,data) =>{
    if(!err){
      resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})

router.get('/model/:modelName',(req,resp)=>{
  Product.find({"type.model":req.params.modelName},(err,data)=>{
    if(!err){
      resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})

///////////// Get "get" Products by type.Type Only
router.get('/type/:productType',(req,resp)=>{
  Product.find({"type.type":req.params.productType},(err,data) =>{
    if(!err){
      resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})

///////////// Get "get" Products by category type.Type
router.get('/category-type/:category/:productType',(req,resp)=>{
  Product.find({category:req.params.category,"type.type":req.params.productType},(err,data) =>{
    if(!err){
      console.log('don')
      resp.status(200).send(data)
    }else resp.status(400).send(err)
  })
})



module.exports=router