const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { GRID_API_KEY } = process.env;

sgMail.setApiKey(GRID_API_KEY);

const sendEmail = async (data) => {
    const mail = { ...data, from: "varchuk.anna.94@gmail.com" };
    await sgMail.send(mail);
    return true;
}

module.exports = sendEmail;