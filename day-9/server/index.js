'use strict';
const Express = require('express');
const {
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} = require('nodemailer');
const cors = require('cors');
const morgan = require('morgan');
const { join } = require('path');

const PORT = process.env.PORT || 8080;

const app = Express();

app.disable('etag');
app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(Express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Teckat Webinar');
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
    sendMail(email, name, message).catch(($) => {
      console.error('$ :>> ', $);
    });
    res.send({ status: true, data: 'Successfully Submitted your query.' });
  } else {
    res.status(400).send({ status: false, error: 'data is missing' });
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
async function sendMail(email, name, message) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = createTransport({
    // service: 'gmail',
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
      // user: 'your gmail id', // generated ethereal user
      // pass: 'password', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Teckat" <noreply@teckat.com>', // sender address
    to: 'teckat@mailinator.com', // list of receivers
    subject: 'Got Query On Our App', // Subject line
    text: JSON.stringify({ email, name, message }), // plain text body
    // html: '<b>Hello world?</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
