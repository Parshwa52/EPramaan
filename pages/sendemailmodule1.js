const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dpsshah41@gmail.com',
        pass: 'dpsproject',
    },
});
module.exports = function sendEmail(to, subject, message) {
    const mailOptions = {
        from: 'dpsshah41@gmail.com',
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};
