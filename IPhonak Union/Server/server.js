const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors=require('cors');

const usersRoutes=require('./controllers/users');
const productsRoutes=require('./controllers/products');

const app = express();
const PORT = 4750;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors("*"));

mongoose.connect('mongodb+srv://Islam:DvKkhRzqlHRiHVR3@iphonakcluster.zyldk.mongodb.net/iphonakUnion?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to mongodb!'))
.catch(()=> console.log('Could not connect to mongodb!'));


app.get('/',function(req,res){
    res.send('Hello World')
})
app.use('/account/users', usersRoutes)
app.use('/collection/products', productsRoutes)

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));