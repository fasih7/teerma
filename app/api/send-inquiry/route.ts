import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, contact, city, qualification, course, country } = body;

    // Validate required fields
    if (!name || !email || !contact) {
      return NextResponse.json(
        { error: "Name, email, and contact are required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Format email body
    const emailBody = `
New Inquiry Received

Contact Details:
- Name: ${name}
- Email: ${email}
- Contact Number: ${contact}
${city ? `- City: ${city}` : ""}

Education Details:
${qualification ? `- Qualification: ${qualification}` : ""}
${course ? `- Course of Interest: ${course}` : ""}
${country ? `- Country: ${country}` : ""}

---
This inquiry was submitted through the Teerma Consultancy website contact form.
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Teerma Consultancy <onboarding@resend.dev>", // You'll need to verify your domain with Resend
      to: "teermaconsultancy@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Inquiry sent successfully!", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

