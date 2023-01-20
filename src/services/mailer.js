let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");

const ses = new aws.SES({
    apiVersion: "2010-12-01",
    region: "ap-south-1",
    defaultProvider
});

function sendEmail(ToEmail, text) {
    // create Nodemailer SES transporter
    let transporter = nodemailer.createTransport({
        SES: { ses, aws },
    });

    // send some mail
    // transporter.sendMail(
    //     {
    //         from: "akshaydhawle531@gmail.com",
    //         to: ToEmail,
    //         subject: "Message",
    //         text: text,
    //     },
    //     (err, info) => {
    //         console.log(info.envelope);
    //         console.log(info.messageId);
    //     }
    // );
}

module.exports = {
    sendEmail
}