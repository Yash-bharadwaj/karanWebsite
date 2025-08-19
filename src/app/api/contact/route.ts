export const runtime = "nodejs";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, whatsapp, details } = await req.json();
    if (!name || !whatsapp || !details) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const service = process.env.SMTP_SERVICE; // e.g. "gmail"
    const secureEnv = process.env.SMTP_SECURE; // "true" | "false"
    const fromEnv = process.env.SMTP_FROM; // e.g. "Website Lead <noreply@domain.com>"

    if ((!service && (!host || !port)) || !user || !pass) {
      return new Response(JSON.stringify({ error: "Email is not configured" }), { status: 500 });
    }

    const transporter = service
      ? nodemailer.createTransport({
          service,
          auth: { user, pass },
        })
      : nodemailer.createTransport({
          host: host as string,
          port: port as number,
          secure: secureEnv ? secureEnv === "true" : (port as number) === 465,
          requireTLS: (port as number) === 587,
          auth: { user, pass },
        });

    // Verify connection early to surface credential errors clearly
    await transporter.verify();

    const info = await transporter.sendMail({
      from: fromEnv || `Website Lead <${user}>`,
      to: "karanhbh@gmail.com",
      subject: "New event enquiry from website",
      text: `Name: ${name}\nWhatsApp: ${whatsapp}\n\nDetails:\n${details}`,
      html: `
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
          <h2>New event enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Details:</strong></p>
          <pre style="white-space:pre-wrap;background:#f7f7f8;padding:12px;border-radius:8px">${details}</pre>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true, id: info.messageId }), { status: 200 });
  } catch (err: unknown) {
    const anyErr = err as any;
    const message = anyErr?.message || "Unexpected error";
    const code = anyErr?.responseCode;
    const smtpResponse = anyErr?.response;
    return new Response(
      JSON.stringify({ error: message, code, smtpResponse }),
      { status: 500 }
    );
  }
}

