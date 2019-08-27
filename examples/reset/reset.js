var Mailgen = require('../../');

// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: 'stethee_white',
    product: {
        // Appears in header & footer of e-mails
        name: 'Stethee',
        link: 'https://stethee.com/',
        logo: 'https://00e9e64baca3a953da4146b4369d58bffe0a0b94a355653513-apidata.googleusercontent.com/download/storage/v1/b/version-test222/o/stethee_logo.png?qk=AD5uMEuyMcGjsikT0MJTL0z5msSV0mTfHIi-sDbnxcJOKY8IaRhFgwVrdh2FrhD1aAif41OXZIaD4OLGbikz1YTlGI-TOW6GIEgKrLi6j1W05d9swG3lUt5xTSPhnEx0IqCBQ5vNIeT6mkITVf6owkyopMbN4UUI639PKF9Lo-vVvZJmw9MeOzHheizyo0RdmInuVQXR0B-c1LHjt1setweHhi6GzCa7vuv7s2F6PxMfAaCpni_kN6rehYlSbtOYUG-k3a3IbzUmOxC72R9Xc8DE8o12_O1qu1K-wUU0O2h4uqHlKwUfg8JRKsYB_JOMoe_mvvy7G4Wbrw8b5vAWrRmQ1817-WGpFuQDUHb2zEj2XgjnqJRY32ymRdDjbtISDim31Ovh8U-eQ63Seke088gxUjHkkf_qVDAxUf3qvNxkjWLAluss7odvmbnPXfILvNfkAb7PZ2XCCKlza6AA5qug2TkTs5T4A2JiKQxDy-NWjMPZGtlxGo6WwwUX2Tv2zRXOZJs_hO50ryKQ2538t2-QSJam9526BVLX1fs1FbS_9JXxQmk7zEMHjPGtHaKwVzgIW5yS6jDtBcXV6hWxCwPeHJxdNoOUJCae-w4VfT3G5i1cLaxt3EZ-GaE3wYDtJUeznFPwFg8EYiIQ2CAqwD-_CZw--tgjRPv-cyUJ9CzNEaPKsZ_uYNtXqaciK7DV843_NiMEvzjAD7MCxLj9ABUmUgZPdWsERFDhMnzKe9ySq0dFJdwP5Jt8354bGHbsa533uzV_oAu96kPOl2VUjz3kCk4JbGr_WQ'
    }
});

// Prepare email contents
var email = {
    body: {
        name: 'Khoa Tran',
        intro: 'You have received this email because a password reset request for your account was received.',
        action: {
            instructions: 'Click the button below to reset your password:',
            button: {
                color: '#DC4D2F',
                text: 'Reset your password',
                link: 'https://mailgen.js/reset?s=b350163a1a010d9729feb74992c1a010'
            }
        },
        outro: 'If you did not request a password reset, no further action is required on your part.'
    }
};

// Generate an HTML email with the provided contents
var emailBody = mailGenerator.generate(email);

// Generate the plaintext version of the e-mail (for clients that do not support HTML)
var emailText = mailGenerator.generatePlaintext(email);

// Optionally, preview the generated HTML e-mail by writing it to a local file
require('fs').writeFileSync('reset.html', emailBody, 'utf8');
require('fs').writeFileSync('reset.txt', emailText, 'utf8');

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
