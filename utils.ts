import nodemailer from 'nodemailer';

/**
 * Sends an email to the specified user every hour with a random number between 1 and 10
 */
export function sendHourlyEmail() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  
  const message = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: 'Hourly random number',
    text: `Here's your hourly random number: ${Math.floor(Math.random() * 10) + 1}`
  };
  
  transporter.sendMail(message, (error) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully!');
    }
  });
}
