// returns a random number between 1 and 10 inclusive
export function getRandomNumber(): number {
  return Math.floor(Math.random() * 10) + 1;
}

/**
 * Sends an email every hour to the specified email address with a random number between 1 and 10.
 */
export async function sendHourlyEmail(): Promise<void> {
  const nodemailer = require('nodemailer');
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM;
  const smtpTo = process.env.SMTP_TO;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: smtpSecure, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: smtpFrom, // sender address
    to: smtpTo, // list of receivers
    subject: 'Hourly Number', // Subject line
    text: `Your random number is ${getRandomNumber()}.`, // plain text body
  });

  console.log(`Message sent: ${info.messageId}`);
}
