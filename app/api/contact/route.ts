import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    // Configure the mail SMTP transporter
    // Default fallback to Gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "theekshanapabodi2001@gmail.com",
        pass: process.env.EMAIL_PASS, // App Password from Google Account
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <theekshanapabodi2001@gmail.com>`,
      to: "theekshanapabodi2001@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; background-color: #02051A; color: #FFFFFF; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); max-width: 600px;">
          <h2 style="color: #F472B6; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px; margin-top: 0;">New Contact Message</h2>
          <p style="margin: 15px 0;"><strong style="color: #C084FC;">Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong style="color: #C084FC;">Email:</strong> <a href="mailto:${email}" style="color: #38BDF8; text-decoration: none;">${email}</a></p>
          <div style="margin-top: 25px; padding: 15px; background-color: rgba(255,255,255,0.05); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
            <strong style="color: #F472B6; display: block; margin-bottom: 10px;">Message:</strong>
            <p style="margin: 0; line-height: 1.6; color: #E2E8F0; white-space: pre-wrap;">${message}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 11px; color: rgba(255,255,255,0.4); text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
            Sent automatically from your portfolio website contact form.
          </footer>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Nodemailer Error Details:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email. Check SMTP server configuration." },
      { status: 500 }
    );
  }
}
