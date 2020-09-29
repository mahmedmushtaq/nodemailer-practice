const nodemailer = require('nodemailer');
const keys = require('./keys');

let transport = nodemailer.createTransport({
  host: keys.host,
  port: keys.port,
  auth: {
    user: keys.username,
    pass: keys.password,
  },
});

const message = {
  from: 'online-game@martsnp.com', // Sender address
  to: 'nhpata529@gmail.com', // List of recipients
  subject: 'Game invitation', // Subject line
  text: 'Thank you for joining our application', // Plain text body
};

transport
  .sendMail(message)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
