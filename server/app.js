var bodyParser = require('body-parser');
var express = require('express');
var app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

var nodemailer = require ('nodemailer');
var transporter = nodemailer.createTransport ({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_USERNAME
  }
});

app.post('/request',  function (req, res) {
  if (!req.body || req.body.length > 0) return res.sendStatus(400);

  console.log('REQUEST', req.body);
  var fullname = req.body.fullname;
  var email = req.body.email;
  var company = req.body.company;
  var tel = req.body.tel;


  console.log('Email:' + email);
  console.log('Full name:' + fullname);
  console.log('Company :' + company);
  console.log('Tele :' + tel);


  const mailOptions = {
    from: process.env.MAIL_USERNAME, // адрес отправителя
    to: process.env.MAIL_TO_NEW_CLIENT, // список объектов получателей
    subject: 'Горячий клиент!!!!', // Тема строки
    html: 'Full name:'+'  ' + fullname + ' '+'Email:' + '  ' + email+ '  ' +'Company:'+'  '+ company + '  ' + 'Tel:' + '  ' + tel + '  '// тело обычного текста
  };

    transporter.sendMail (mailOptions, function (err, info) {
      if (err)
        console.log (err);
      else
        console.log (info);
    });

    res.json({"responseSuccess" : "Success"});

});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('App on port ' + port);
});
