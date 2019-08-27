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
      intro: ['Welcome to Stethee Pro,',
              'Before you can access and activate your Stethee Pro account please verify your email address.'
            ],
      action:[
        {
        button: {
          color: '#28AAEE',
          text: 'Verify my email address',
          link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
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
