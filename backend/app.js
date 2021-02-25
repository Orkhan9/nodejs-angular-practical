const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const Post=require('./models/post');

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
        'GET,POST,PATCH,DELETE,OPTIONS');
    next();
})

app.post('/api/posts',(req,res,next)=>{
    const post=new Post({
        title:req.body.title,
        content:req.body.content
    })
    post.save();
    res.status(201).json({
        message:'Post added successfully'
    })
})

app.get('/api/posts',(req,res,next)=>{
    const posts=[
        {id:'1',title:'1st title from server',content:'1st content from server'},
        {id:'2',title:'2nd title from server',content:'2nd content from server'},
        {id:'3',title:'3rd title from server',content:'3rd content from server'},
        {id:'4',title:'4th title from server',content:'4th content from server'},
    ]
    res.status(200).json({
        message:'Posts fetched successfully',
        posts:posts
    });
})

module.exports=app;
