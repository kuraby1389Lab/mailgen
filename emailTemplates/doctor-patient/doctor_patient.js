var Mailgen = require('../../');



// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: 'stethee_white',
    product: {
        // Appears in header & footer of e-mails
        name: 'Stethee',
        link: 'https://www.stethee.com/',
        logo: 'https://image.ibb.co/fTvt17/dark_3x.png'
    }
});

var email = {
    body: {
      name: 'Khoa Tran',
      intro: [
        '{user name} has requested permission to manage your M3DICINE Stethee Pro health data.',
        'This is only temporary acccess that will expire in 5 days.',
        'If you wish to extend {user name}  permanent access to your account, please approve the connection.',
        'If you would not like to extend access, you should reject this request.'
      ],
      action:[ {
        button: {
          color: '#28AAEE',
          text: 'Approve',
          link: '#'
        }
      },{
        button: {
          color: '#E00707',
          text: 'Reject',
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
