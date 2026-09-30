// when you want to send use the powershell prompt node send-emails.js
import { Resend } from 'resend';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendBulkEmails() {
  try {
    // Read recipients from JSON file 
    const rawData = fs.readFileSync('recipients.json');
    const recipients = JSON.parse(rawData);

    for (const recipient of recipients) {
      console.log(`Sending approval email to ${recipient.name} (${recipient.email})...`);

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background-color: #0f0f0f; color: #f5f5f5; margin: 0; padding: 20px 0; }
            .outer-container { max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border: 1px solid #333333; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
            .header { background-color: #121212; padding: 35px 25px 25px 25px; text-align: center; border-bottom: 2px solid #D4AF37; }
            .header h1 { color: #FFD700; margin: 0 0 8px 0; font-size: 24px; letter-spacing: 0.5px; line-height: 1.3; }
            .header p { color: #aaaaaa; margin: 0; font-size: 14px; letter-spacing: 0.5px; text-transform: uppercase; }
            .content-card { background-color: #161616; border: 1px solid #2a2a2a; border-radius: 8px; padding: 25px; margin: 25px; color: #d0d0d0; line-height: 1.6; }
            .content-card p { margin-top: 0; margin-bottom: 20px; }
            .highlight { color: #FFD700; font-weight: bold; }
            .button-container { text-align: center; margin: 25px 0; }
            .button { display: inline-block; background-color: #D4AF37; color: #0f0f0f; padding: 12px 28px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 15px; text-align: center; transition: background-color 0.2s; }
            .button:hover { background-color: #FFD700; }
            .footer { padding: 0 25px 30px 25px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #2a2a2a; }
            .footer p { margin-top: 20px; margin-bottom: 0; line-height: 1.5; }
          </style>
        </head>
        <body>
          <div class="outer-container">
            <div class="header">
              <h1>Nomination Registration Approved!</h1>
              <p>Merit & Value Awards (MVA) 2026</p>
            </div>
            
            <div class="content-card">
              <p>Dear <span class="highlight">${recipient.name}</span>,</p>
              
              <p>We are delighted to inform you that your registration and payment for the <span class="highlight">${recipient.category} CATEGORY</span> at the Merit & Value Awards (MVA) 2026 have been <span class="highlight">successfully approved!</span></p>
              
              <p>Your journey toward celebrating excellence begins here. To kickstart your campaign and rally support from your fans, friends, and followers, please make sure to follow the link below to set up your official campaign flyer on Canva:</p>
              
              <div class="button-container">
                <a href="${recipient.canvaLink || '#'}" class="button" target="_blank">Customize Your Campaign Flyer</a>
              </div>
              
              <p>Once tailored, download your flyer and share it proudly on your WhatsApp status and social media platforms to encourage people to nominate you.</p>
              
              <p>For questions, support, or confirmation regarding your nomination, please feel free to reach out to us by replying to this email or on WhatsApp via <a href="https://wa.me/2349071358268" style="color: #FFD700; text-decoration: underline;" target="_blank"><strong>+234 907 135 8268</strong></a>.</p>
              
              <p>Congratulations once again on your successful approval, and best of luck! 💯✅</p>
              
              <p style="margin-bottom: 0; margin-top: 25px;">
                Warm regards,<br>
                <strong>Francis Emmanuel</strong><br>
                Event Manager,<br>
                Merit & Value Awards (MVA).
              </p>
            </div>
            
            <div class="footer">
              <p>Please do not reply directly to this email if automated, or reach out via our official support channels.<br>
              &copy; 2026 Merit & Value Awards (MVA). All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      const response = await resend.emails.send({
        from: 'Merit & Value Awards <contact@mail.meritandvalueawards.com>',
        to: [recipient.email],
        subject: `Nomination Registration Approved! - MVA 2026 🏆`,
        html: htmlContent,
      });

      console.log(`Successfully sent to ${recipient.email}:`, response);
    }
    console.log('All emails processed successfully!');
  } catch (error) {
    console.error('Error sending emails:', error);
  }
}

sendBulkEmails();