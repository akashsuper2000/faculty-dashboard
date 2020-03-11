const nodemailer = require('nodemailer');
const { exec } = require('child_process');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sefacultydashboard@gmail.com',
    pass: 'faculty@dashboard'
  }
});

var results;

exec('sudo yarn jasmine', (err, stdout, stderr) => {
  if (err) {
    results = '<h1>Error!</h1>' + err;
  } else {
   if(`${stderr}`!=''){
    results = `<h1>Tests Failed!</h1><br/><br/>` + `${stdout}<br/><br/>` + `Error: ${stderr}`;
   }
    else{
      results = `<h1>Tests Passed!</h1><br/><br/>` + `${stdout}`;
    }
  }
  console.log(results);

  var mailOptions = {
        from: 'sefacultydashboard@gmail.com',
        to: 'sefacultydashboard@gmail.com',
        subject: 'Test results',
        html: results
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});