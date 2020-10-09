const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.route("/")
.get(function (req,res){

  res.render("home", {body:new Body()});
})
.post(function(req,res){
  let number = Number (req.body.number);

  if(number && number > 0){
    let factors = [];
    let divisor = 1;
    while (divisor <= number){
        if(number%divisor == 0){
          factors.push(divisor);
        }
        divisor++;
    }
    if(factors.length > 0){
      let body = new Body(factors, "Succcess!");
      res.render("home", {body:body})
    }else{
      let body = new Body(factors, "Could not Find Factors!");
      res.render("home", {body:body})
    }
  }else{
    res.redirect("/");
  }

})

app.listen(3000, function(){console.log("Factor Finder running");});



function Body(){
  this.factors = [];
  this.message = "";
}
function Body(factors){
  this.factors = factors;
  this.message = "";
}
function Body(factors, message){
  this.factors = factors;
  this.message = message;
}
