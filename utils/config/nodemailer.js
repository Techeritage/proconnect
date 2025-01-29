import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const email = process.env.EMAIL;
const pass = process.env.EMAILPASS;


export async function sendEmail(options) {
  try {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user: email,
          pass: pass,
        },
        tls: {
          rejectUnauthorized: false, // Add this to ignore self-signed certificate errors
        },
    });

    const mailOptions = {
      from: '"Pro Connect" <officialproconnect96@gmail.com>',
      to: options.email,
      subject: options.subject,
      html: options.message,
      // You can also add HTML version
    //   html: options.message.replace(/\n/g, '<br>'),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
        message: 'Email sent successfully',
        status: 200 });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json({
      message: 'Failed to send email',
      errorDetail: error?.message,
      status: 500 });
  }
}