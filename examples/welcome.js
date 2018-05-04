var Mailgen = require('../');

// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
  theme: 'stethee_white',
  product: {
    // Appears in header & footer of e-mails
    name: 'Stethee',
    link: 'https://stethee.com/',
    logo: 'https://image.ibb.co/fTvt17/dark_3x.png'
    // logo: 'https://mailgen.js/img/logo.png'
  }
});

// Prepare email contents
var email = {
    body: {
      name: 'Khoa Tran',
      intro: 'Welcome to Stethee! We\'re very excited to have you on board.',
      action:[ {
        instructions: 'To get started with Stethee, please click here:',
        button: {
          color: '#22BC66',
          text: 'Confirm your account',
          link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
        }
      },
      {
        instructions: 'To use stethe central, please goes here:',
        button: {
          text: 'Take me to Stethee Central',
          link: 'https://centralvet.stethee.com/login'
        }
      }
    ],
    outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
  }
};

// Generate an HTML email with the provided contents
var emailBody = mailGenerator.generate(email);

// Generate the plaintext version of the e-mail (for clients that do not support HTML)
var emailText = mailGenerator.generatePlaintext(email);
var fs = require('fs')
// Optionally, preview the generated HTML e-mail by writing it to a local file
fs.writeFile('preview.html', emailBody, 'utf8',function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
fs.writeFile('preview.txt', emailText, 'utf8',function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

// `emailBody` now contains the HTML body,
// and `emailText` contains the textual version.
//
// It's up to you to send the e-mail.
// Check out nodemailer to accomplish this:
// https://nodemailer.com/

// Send the e-mail with your favorite mailer
// transporter.sendMail({
//     from: 'no-reply@mailgen.js',
//     to: 'target@email.com',
//     subject: 'Mailgen',
//     html: emailBody,
//     text: emailText,
// }, function (err) {
//     if (err) return console.log(err);
//     console.log('Message sent successfully.');
// });
