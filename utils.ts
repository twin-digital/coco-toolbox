import nodemailer from 'nodemailer';

/**
 * This function sends an email every hour with a random number between 1 and 10, using the nodemailer package.
 */
export function sendHourlyEmail(): void {
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = parseInt(process.env.SMTP_PORT as string);
    const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_FROM = process.env.SMTP_FROM;
    const SMTP_TO = process.env.SMTP_TO;
    
    const transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        }
    });
    
    const randomNum = Math.floor(Math.random() * 10) + 1;
    
    const mailOptions = {
        from: SMTP_FROM,
        to: SMTP_TO,
        subject: 'Random Number Hourly Update',
        text: `Your random number this hour is: ${randomNum}`
    }
    
    transport.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}