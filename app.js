const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

/* LANDING ROUTE */
app.get("/", function(req,res){
    res.send("HomePage");

    //res.render("home");
});

app.listen(8000,function(){
    console.log("Server started on Port 8000");
});