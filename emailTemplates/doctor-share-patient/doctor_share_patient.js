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
              '{user name A} has requested to share your M3DICINE Stethee Pro account with their colleague : {user nameB}.',
              '{user name B} will not be able to access your account until you approve this request.'
            ],
      action:[
        {
        button: {
          color: '#28AAEE',
          text: 'Approve Request',
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
