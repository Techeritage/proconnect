import connectDb from '@/utils/config/db';
import { NextResponse } from 'next/server';
import hireTalent from '@/utils/models/hireTalent';
import handleEmail from '@/utils/config/sendEmail';


export async function POST(req) {
    try {

        const { 
            fullName, 
            email, 
            phone, 
            jobTitle, 
            jobDescription
          } = await req.json()

            if( !fullName ||
                !email ||
                !phone ||
                !jobTitle ||
                !jobDescription 
            ) {
                return NextResponse.json({
                    message: 'fill all available fields',
                    status: 400
                })
            }

            await connectDb();

            const hireData = new hireTalent({ 
            fullName, 
            email, 
            phone, 
            jobTitle, 
            jobDescription, 
            createdAt: new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })
            })

            await hireData.save()

            const subject = '✨ Received! ✨';
            const message = `
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  color: #333;
                  margin: 0;
                  padding: 0;
                }
                .container {
                  max-width: 600px;
                  margin: 30px auto;
                  background-color: #ffffff;
                  border-radius: 8px;
                  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
                }
                .header {
                  background-color: #007bff; /* Blue */
                  color: #ffffff;
                  text-align: center;
                  padding: 20px;
                }
                .header h1 {
                  margin: 0;
                }
                .content {
                  padding: 20px;
                  background-color: #e7f3ff; /* Light blue */
                  text-align: center;
                }
                .content p {
                  font-size: 16px;
                  line-height: 1.5;
                  color: #333;
                }
                .content a {
                  color: #007bff; /* Blue */
                  text-decoration: none;
                  font-weight: bold;
                }
                .footer {
                  background-color: #333; /* Black */
                  color: #ffffff;
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                }
                .footer a {
                  color: #ffffff;
                  text-decoration: none;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Welcome to PRO CONNECT!</h1>
                </div>
                <div class="content">
                  <p>Thank you for choosing us!</p>
                  <p>We received your requirement details, and will communicate a feedback soonest.</p>
                  <p>If you have any questions, feel free to <a href="mailto:officialproconnect96@gmail.com">contact us</a>.</p>
                </div>
                <div class="footer">
                  <p>&copy; 2025 PRO CONNECT. All rights reserved.</p>
                  <p><a href="mailto:officialproconnect96@gmail.com">officialproconnect96@gmail.com</a></p>
                </div>
              </div>
            </body>
          </html>
        `;
        
            await handleEmail({
            recipientEmail: email,
            subject,
            message,
          });

            return NextResponse.json({
                message: `We received your requirement posting, check your mail for feedback`,
                data: hireData,
                status: 201
            })
        
    } catch (error) {
        console.error('internal error', error.message);
        return NextResponse.json({
            error: error.message,
            message: 'server error',
            status: 500
        })
    }
}