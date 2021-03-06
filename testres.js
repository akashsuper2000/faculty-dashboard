const nodemailer = require('nodemailer');
const { exec } = require('child_process');
var request = require('request');

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

  request.post("https://server-for-faculty-dashboard.herokuapp.com/testres", {json: {results: results}},
    function (error, response, data){
      console.log('Sending');
  });

});