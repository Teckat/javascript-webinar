'use strict';
// const { createServer } = require('http');

// const PORT = process.env.PORT || 8080;

// const server = createServer((request, response) => {
//   console.log('user agent :>> ', request.headers[`user-agent`]);
//   response.write('hello World');
//   response.end();
// });

// server.listen(PORT, () => {
//   console.log(`Server Listening on Port: ${PORT}`);
// });

const Express = require('express');
// const nodemailer = require('nodemailer');
const { join } = require('path');

const PORT = process.env.PORT || 8080;

const app = Express();

app.disable('etag');
app.disable('x-powered-by');
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(Express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.all('/ping', (req, res) => {
  res.send({
    status: true,
    data: 'pong',
  });
});

app.post('/contact', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (name && email && message) {
    // sendMail(email, message, message)
    //   .then(($) => {
    //     console.log('$ :>> ', $);
    //   })
    //   .catch(($) => {
    //     console.error('$ :>> ', $);
    //   });
    res.send({ status: true, data: { name, email, message } });
  } else {
    res.status(400).send({ status: false, data: 'data is missing' });
  }
});

app.all('*', (req, res) => {
  res.status(404).send({ status: false, error: 'not found', path: req.path });
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});

/** helper function */

// async..await is not allowed in global scope, must use a wrapper
// async function sendMail(email, message, mobile) {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <noreply@teckat.com>', // sender address
//     to: 'sam0smith1dev@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: JSON.stringify({ email, mobile, message }), // plain text body
//     // html: '<b>Hello world?</b>', // html body
//   });

//   console.log('Message sent: %s', info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }
