// const nodemailer = require("nodemailer");

// const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_EMAIL,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   const message = {
//     from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   const info = await transporter.sendMail(message);

//   console.log("Message sent: %s", info.messageId);
// };

const Sib = require("sib-api-v3-sdk");
const client = Sib.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
const tranEmailApi = new Sib.TransactionalEmailsApi();
const sender = {
  email: "touhidulislam066@gmail.com",
  name: "MD Touhidul Islam",
};

const sendEmail = (data) => {
  const receivers = [
    {
      email: data.email,
    },
  ];

  tranEmailApi
    .sendTransacEmail({
      sender,
      to: receivers,
      subject: data.subject,
      // textContent: "Hello also",
      htmlContent: data.message,
    })
    .then((data) => {
      console.log("successfully sent email");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = sendEmail;
