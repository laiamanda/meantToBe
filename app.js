const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

/* LANDING ROUTE */
app.get("/", function(req,res){
    res.render("home");
});

/* SIGN UP ROUTE */
app.get("/signup", function(req,res){
    res.render("signup");
});

/* LOGIN ROUTE */
app.get("/login", function(req,res){
    res.render("login");
});

/* MENTOR ROUTE */
app.get("/mentor", function(req,res){
    res.send("This will be the mentor profile page");
});

/* MENTEE ROUTE */
app.get("/member", function(req,res){
    res.send("This will be the mentee profile page");
});

/* CONNECTION/MATCH ROUTE */

app.listen(8000,function(){
    console.log("Server started on Port 8000");
});