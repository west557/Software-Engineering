var express = require('express')
var app=express()
//let app2=express()

app.use(express.static(__dirname + '/public'));

    var add = function(num1,num2) {
        var result =num1+num2;
        return result
    }

let accounts = [
    {id:1,name:'alex',deposit:5},
    {id:2,name:'sarah',deposit:5},
    {id:3,name:'jim',deposit:15}
]

app.get('/accounts',function(req,res) {
   let findAccount = parseInt(req.query.id)-1;
   res.send("Thank-you for your account enquiry! \n User ID: "+accounts[findAccount].id+ ", User Name: "+accounts[findAccount].name+ ", Deposit: "+accounts[findAccount].deposit)
})

app.get('/test',function(req,res){
    var username=req.query.username;
    res.send("This is great " + username + ". " +username+" is the best username ever. I am so proud of you.");
    res.send("Scott is the best person ever! "+username);
})
// Respond with Hello World when Get request is made to the homepage. 

app.get('/add',function(req,res) {
    var num1=parseInt(req.query.num1);
    var num2=parseInt(req.query.num2);
    var result=add(num1,num2)
    res.send('The result is '+ result)
})

app.get('/', function(req,res) {
    res.send('Hello World!')
})

// List to a particular port 
app.listen(3000)
