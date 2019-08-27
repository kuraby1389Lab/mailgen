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
      intro: ['{user name} now has access to your M3DICINE Stethee Pro health data.',
              'You can revoke {user name} access at anytime by clicking the “Revoke Access” button.',
              'If you did not approve this connection, or you have approved this by mistake. Please revoke the connection immediately.'],
      action:[ {
        button: {
          color: '#F5A623',
          text: 'Revoke Access',
          link: '#'
        }
      }
    ],
    signature:"Best Wishes,<br>M3DICINE Support Team"
  }
};

var emailBody = mailGenerator.generate(email);

var emailText = mailGenerator.generatePlaintext(email);

require('fs').writeFileSync('index.html', emailBody, 'utf8');
require('fs').writeFileSync('index.txt', emailText, 'utf8');
