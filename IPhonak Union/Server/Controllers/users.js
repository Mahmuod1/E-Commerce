const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/users');
const jwtHelper=require('../Config/jwtHelper')
const _ = require('lodash');
require("dotenv").config();

//-------Create "post" New User
/* router.post('/create', (req, resp)=>{
    let newUser = req.body;
    User.create(newUser, (err, data)=>{
      err ? resp.status(400).send(err) : resp.status(201).send(data)
    })
}) */

//-------Create "post" New User anotherWay
router.post('/create',(req,resp,next) => {
  let newUser = new User();
  newUser.firstName=req.body.firstName;
  newUser.lastName=req.body.lastName;
  newUser.email=req.body.email;
  newUser.password=req.body.password;

  newUser.save((err,doc) => {
    if(!err)
    resp.send(doc);
  })

})

//-------handling login Authentication
router.post('/login',(req, resp, next) =>{
  //call for passport authentication
  passport.authenticate('local',(err , user, info) => {
    // check if there is an error from passport middleware
    if(err)
      return resp.status(400).json(err);
    // registered user
    else if(user)
      return resp.status(200).json({'token': user.generateJwt() });
    // Unknown user or wrong password
    else
      return resp.status(404).json(info);
  })(req,resp)
})

//-------handling userProfile
router.get('/account',jwtHelper.verifyJwtToken,(req,resp,next) => {
  User.findOne({ _id:req._id },(err,user) => {
    if (!user)
      return resp.status(404).json({ status: false , message : 'User record not found' });
    else{
      return resp.status(200).json({status:true, user : _.pick(user,['firstName','lastName','email'])})
    }
  })
})

//-------Get "get" user by email
router.get('/:email/get',(req,resp)=>{
    User.find({email:req.params.email},(err,data)=>{
      if(!err){
        if(data.length == 0) resp.status(200).send("User E-Mail is not correct!!") 
        else resp.status(200).send(data)
      }else resp.status(400).send(err)
    })
})

//-------Delete "delete" user by email
router.delete('/:email/delete',(req,resp)=>{
    User.deleteOne({email:req.params.email},(err,data)=>{
      if(!err){
        if(data.deletedCount == 0)  resp.status(200).send("No User Register with that mail!")
        else resp.status(200).send(data)
      }else resp.status(400).send(err)
    })
})

//-------Update "put" user by Email
router.put('/update/:id',(req,resp) => {
    var user = req.body
    User.updateOne({_id:req.params.id},user,(err,data) => {
       if(!err){
        if (data.nModified == 0) resp.status(200).send("User id is not correct!!") 
        else resp.status(200).send(data)
       }else resp.status(400).send(err)
    })
})

module.exports = router;