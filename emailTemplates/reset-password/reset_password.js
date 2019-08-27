var Mailgen = require('../../');



// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: 'stethee_white',
    product: {
        // Appears in header & footer of e-mails
        name: 'Stethee',
        link: 'https://stethee.com/',
        logo: 'https://image.ibb.co/fTvt17/dark_3x.png'
    }
});

var email = {
    body: {
      name: 'Khoa Tran',
      intro: [
        'We received a request to reset the password to your M3DICINE Stethee account.',
        'If you did not request a password reset, ignore this email and the link will automatically expire.'
      ],
      action:[ {
        instructions: [],
        button: {
          color: '#8BC34A',
          text: 'Reset my password',
          link: '#'
        }
      },
    ],
    signature:"Best Wishes,<br>M3DICINE Support Team"
  }
};

var emailBody = mailGenerator.generate(email);

var emailText = mailGenerator.generatePlaintext(email);

require('fs').writeFileSync('index.html', emailBody, 'utf8');
require('fs').writeFileSync('index.txt', emailText, 'utf8');
