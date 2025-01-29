import { sendEmail } from '@/utils/config/nodemailer';
import { NextResponse } from 'next/server'

async function handleEmail({ recipientEmail, subject, message }) {
  try {
    if (!recipientEmail || !subject || !message) {
      throw new Error('Missing required fields');
    }

    const response = await sendEmail({
      email: recipientEmail,
      subject: subject,
      message: message
    });

    // if (!response.success) {
    //   throw new Error(response.message);
    // }

    return NextResponse.json({
        message: "email sent",
        status: 200
      });
    
  } catch (error) {
    console.error('Email handling error:', error);
    return NextResponse.json({
      success: false,
      message: error.message || 'Failed to send email',
    });
  }
}

export default handleEmail;