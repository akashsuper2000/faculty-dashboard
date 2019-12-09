const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

app.post('/login',(req,res)=>{
  var {user, pass} = req.body;
  console.log(user);
  console.log(pass);
});

app.post('/register',(req,res)=>{
  var {user, email, pass} = req.body;
  console.log(user);
  console.log(email);
  console.log(pass);
});

app.post('/fp',(req,res)=>{
  var {send} = req.body;
  console.log(send);
});

app.listen(5000,()=>{
  console.log("Port 5000");
})