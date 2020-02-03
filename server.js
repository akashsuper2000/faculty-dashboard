const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

var con = mysql.createConnection({
  host: "database-1.czuepjtqzk8i.us-east-1.rds.amazonaws.com",
  user:"admin",
  password:"hitman2606",
  database: "users"
});

con.connect((err) => {
  if(!err)
  console.log('Connection succeeded');
  else
  console.log('Unsuccessful \n Error : '+JSON.stringify(err,undefined,2));
});

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sefacultydashboard@gmail.com',
    pass: 'faculty@dashboard'
  }
});

app.post('/login',(req,res)=>{
  var {user, pass} = req.body;
  console.log(user);
  console.log(pass);
  con.query("select * from users where username = '"+user+"' and password = '"+pass+"';", function (err, result, fields) {
    if (err) console.log(err.sqlMessage);
    const abc={
      res:result,
      error:err
    }
    res.json(JSON.stringify(abc));
  });
});

app.post('/register',(req,res)=>{
  var {user, email, pass} = req.body;
  console.log(user);
  console.log(email);
  console.log(pass);
  con.query("select * from users where username = '"+user+"';", function (err, result, fields) {
    if(err) console.log(err.sqlMessage);
    if(result.length>0){
      const abc={
        res:result,
        error: err
      }
      res.json(JSON.stringify(abc));
      console.log(JSON.stringify(abc));
    }
    else{

      con.query("insert into users values ('"+user+"','"+pass+"','"+email+"');", function (err, result, fields) {
        if (err) console.log(err.sqlMessage);
        const abc={
          res:result,
          error:err
        }
        res.json(JSON.stringify(abc));
        console.log(JSON.stringify(abc));
      });

    }
  });

});

app.post('/fp',(req,res)=>{
  var {user} = req.body;
  console.log(user);

  con.query("select password,email from users where username = '"+user+"';", function (err, result, fields) {
    console.log(result);
    if (err) console.log(err.sqlMessage);
    else if(result.length == 0){
      console.log('Account does not exist!');
      res.json(JSON.stringify({res: 0}));
    }
    else{
      var results = result[0].password;
      var mailid = result[0].email;

      var mailOptions = {
      from: 'sefacultydashboard@gmail.com',
      to: mailid,
      subject: 'Password Reset',
      html: 'Your password is : <b>' + results + ' </b>'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

      const abc={
        res:result,
        error:err
      }
      
      res.json(JSON.stringify({res: 1}));
    }
    });
});




app.listen(process.env.PORT || 5000,()=>{
  console.log("Port 5000");
})