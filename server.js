const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const nodemailer = require('nodemailer');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'akashsuper2000@gmail.com',
    pass: 'akash@1729'
  }
});

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

  var mailOptions = {
    from: 'akashsuper2000@gmail.com',
    to: 'himanshu6k@gmail.com',
    subject: 'Password Reset',
    html: 'Your password is : <b>' + 'The actual password!' + ' </b>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});

app.listen(5000,()=>{
  console.log("Port 5000");
})