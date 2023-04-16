import nodemailer from 'nodemailer';

/**
  * Sends an hourly email with a random number to a user
  * @param {string} smtpHost - Hostname or IP address of the SMTP server
  * @param {number} smtpPort - Port number of the SMTP server
  * @param {boolean} smtpSecure - Whether to use a secure connection to the SMTP server
  * @param {string} smtpUser - Username to use for authentication with the SMTP server
  * @param {string} smtpPass - Password to use for authentication with the SMTP server
  * @param {string} fromEmail - Email address to use as the sender for the email
  * @param {string} toEmail - Email address to send the email to
  */
export function sendHourlyEmail(smtpHost: string, smtpPort: number, smtpSecure: boolean, smtpUser: string, smtpPass: string, fromEmail: string, toEmail: string): void {
  const transportOptions = {
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  };
  const transporter = nodemailer.createTransport(transportOptions);

  // Generate random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Set up the email parameters
  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: 'Hourly Random Number',
    text: `Here is your hourly random number: ${randomNumber}`
  };

  // Send the email
  transporter.sendMail(mailOptions);
}