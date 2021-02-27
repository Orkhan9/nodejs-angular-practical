const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const postsRoutes=require('./routes/posts');

const app=express();

mongoose.connect('mongodb+srv://orkhan9:EX3IDR7IbNv0RGhI@orkhan9.ml6my.mongodb.net/nodejs-angular-practical?retryWrites=true&w=majority')
    .then(()=>{
        console.log('connected to database')
    })
    .catch(()=>{
        console.log('connection failed')
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods',
        'GET,POST,PATCH,PUT,DELETE,OPTIONS');
    next();
});

app.use('/api/posts',postsRoutes);

module.exports=app;
