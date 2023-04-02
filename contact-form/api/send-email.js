// api/send-email.js
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  const { name, subject, message } = req.body;

  // Create a Nodemailer transporter using your Gmail credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "asharibarain4@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Define email options
  const mailOptions = {
    from: "asharibarain4@gmail.com",
    to: "asharibarain4@gmail.com",
    subject: `New message from ${name} - ${subject}`,
    text: message,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
};
