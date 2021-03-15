const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors=require('cors');

const usersRoutes=require('./controllers/users');

const app = express();
const PORT = 4750;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



mongoose.connect('mongodb+srv://Islam:DvKkhRzqlHRiHVR3@iphonakcluster.zyldk.mongodb.net/iphonakUnion?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to mongodb!'))
.catch(()=> console.log('Could\'nt connect ro mongodb!'));

app.get('/',function(req,res){
    res.send('Hello Why')
})

app.use('/api/users', usersRoutes)

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));