
const express = require("express");
const ejs= require("ejs");
const bodyParser= require("body-parser");
const app = express();

const homeContent="Hello!! I am Jenny.I am a student and love to do coding and development.";

const blogs=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home",{variable:homeContent});
});

app.get("/compose",function(req,res){
    res.render("compose");
});

app.get("/blogs",function(req,res){
    res.render("blogs" ,{blogs:blogs});
});


app.post("/compose",function(req,res){
    const blog={
      title: req.body.blogTitle,
      content: req.body.blogBody
    }

    blogs.push(blog);

    res.redirect("/blogs");
});

app.listen(3000,function(){
  console.log("Server is running in port 3000");
});
