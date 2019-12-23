const nodemailer = require('nodemailer');
require('../global');
console.log(globalString);
const reacth=globalString;
//const reacth='38e529c1cdefd64880a273772270833ebc177fecfa6891c836ec4cd6b2f4fa0f';
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dpsshah41@gmail.com',
        pass: 'dpsproject',
    },
});
const mailOptions = {
    from: 'dpsshah41@gmail.com',
    to: 'parshwashah2510@gmail.com',
    subject: 'React Hash Testing',
    html: reacth,
};
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log(`Message sent: ${info.response}`);
});
