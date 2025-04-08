import nodemailer from 'nodemailer';

// Create a transporter using gmail or other SMTP provider
// Note: For production, use a proper SMTP server
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'learnwithanukalp@gmail.com',
    // For security, we'll use an app password (to be set via environment variable)
    pass: process.env.EMAIL_PASSWORD || '',
  },
});

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  try {
    // Always send to the admin email address
    const adminEmail = 'learnwithanukalp@gmail.com';
    
    const mailOptions = {
      from: 'Devi Shakuntala Website <learnwithanukalp@gmail.com>',
      to: adminEmail,
      subject: options.subject,
      text: options.text || '',
      html: options.html || '',
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${adminEmail}`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Test the email service
export const testEmailService = async (): Promise<boolean> => {
  return await sendEmail({
    to: 'learnwithanukalp@gmail.com',
    subject: 'Email Service Test',
    text: 'This is a test email from the Devi Shakuntala website.',
    html: '<p>This is a <b>test email</b> from the Devi Shakuntala website.</p>',
  });
};