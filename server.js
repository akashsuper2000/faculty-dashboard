const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const url = require('url');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

const s3 = new aws.S3({
 accessKeyId: 'ASIAV3K2QLFHWQK6GSP3',
 secretAccessKey: '+ATHCe+7lCD+2Y6ZLHiSJ1wvjXBZW/FhkfnIxj3L',
 dir: 'imgs',
 sessionToken:'FwoGZXIvYXdzEEkaDNY7fkf23r5+qkEidiLWAX5m8VsZ6URsuj3Y6dts3+WX3IueOzNjOKnDNHyhYPZ03/BkRJMFrzIGROeRyEqsvWVppVZN4MGVobomy/WDR7z2dzFUsYYFS6v4ePDvNQ4ADL+dvL++n8h75skuS1APDQmtOvfrmu6mXDG8IneMrINUtvZXV/978cdOeTIZFudCRgQZBXz2OWUk7HmAat2HhvFq31jToD6KF71hyRMyqNhyll/g5lcpaublpqk6kIWUWaC945Zq4INzJLBTwW2YwYRr2AKyYwHDTD7zNp8WGAz5HY5RCGQo7KS18gUyLdjy+wnf7sYoUozKJ1QKAMMZk7r+jSBMunIxBA8Usf9veGfFGxVvqP+PSnBIMg==',
 Bucket: 'seschedule'
});

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
  var {id, password} = req.body;
  console.log(id);
  console.log(password);
  con.query("select * from users where id=? and password=?", [id,password], function (err, result, fields) {
    if (err) console.log(err.sqlMessage);
    const abc={
      res:result,
      error:err
    }
    res.json(JSON.stringify(abc));
  });
});

app.post('/register',(req,res)=>{
  var {id, name, dept, email, password} = req.body;
  console.log(id);
  console.log(name);
  console.log(dept);
  console.log(email);
  console.log(password);
  con.query("select * from users where id=?", [id], function (err, result, fields) {
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

      con.query("insert into users values (?,?,?,?,?)", [id,name,dept,email,password], function (err, result, fields) {
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
  var {id} = req.body;
  console.log(id);

  con.query("select password, email from users where id=?", [id], function (err, result, fields) {
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

const profileImgUpload = multer({
 storage: multerS3({
  s3: s3,
  bucket: 'seschedule',
  key: function (req, file, cb) {
   cb(null, path.basename( file.originalname, path.extname( file.originalname ) )  )//+ '-' + Date.now() + path.extname( file.originalname )
  }
 }),
 limits:{ fileSize: 2000000 }
}).single('profileImage');


app.post('/img',(req,res)=>{
profileImgUpload( req, res, ( error ) => {
  if( error ){
   console.log( 'errors', error );
   res.json( { error: error } );
  } else {
   // If File not found
   if( req.file === undefined ){
    console.log( 'Error: No File Selected!' );
    res.json( 'Error: No File Selected' );
   } else {
    // If Success
    const imageName = req.file.key;
    const imageLocation = req.file.location;
// Save the file name into database into profile model
    res.json( {
     image: imageName,
     location: imageLocation
    } );
   }
  }
 });
});




app.listen(process.env.PORT || 5000,()=>{
  console.log("Port 5000");
})