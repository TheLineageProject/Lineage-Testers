import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize firebase-admin only once
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const adminDb = getFirestore();

export async function POST(req: Request) {
  console.log('Received POST request.');
  const { to, subject } = await req.json();
  console.log(`Payload received: to="${to}", subject="${subject}"`);

  try {
    // Save email to Firestore
    console.log('Saving email to Firestore...');
    await adminDb.collection('testers').add({
      email: to,
      createdAt: new Date(),
      status: 'pending',
    });
    console.log('Email saved to Firestore.');
    // Send confirmation email with logo
    console.log('Setting up email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });
    console.log('Transporter configured.');

    console.log('Sending confirmation email...');
    await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to,
      subject,
      html: `
        <div style="font-family: Montserrat, Arial, sans-serif; text-align: center;">
          <h2 style="color: #ff5e62; margin-bottom: 8px;">Thank you for joining MyLINEAGE Closed Test!</h2>
          <p style="font-size: 16px; color: #222;">We have received your request and are processing it. You will receive another email soon to confirm your access.<br/><br/>We appreciate your interest and support!</p>
        </div>
      `
    });
    console.log('Email sent successfully.');

    return NextResponse.json({ 
      message: 'Email saved and sent successfully',
      details: {
        email: to,
        timestamp: new Date().toISOString(),
        status: 'success'
      }
    });
  } catch (error) {
    console.error('Error during POST processing:', error);
    return NextResponse.json({ message: 'Failed to save or send email' }, { status: 500 });
  }
}
