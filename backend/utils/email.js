const nodeMailer = require('nodemailer');
require('dotenv').config();

const transporter = nodeMailer.createTransport({
    service : 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
const sendConfirmationEmail = (email , booking) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Booking Confirmation',
        text: `Your booking for ${booking.date} has been confirmed.`
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    });
}
module.exports = {sendConfirmationEmail};