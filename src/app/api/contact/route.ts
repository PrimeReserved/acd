import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, company, email, phone, service, message } = await req.json();

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  const from = process.env.RESEND_FROM!;
  const to = process.env.RESEND_TO!;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Enquiry${service ? ` — ${service}` : ''} from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
          <div style="background:linear-gradient(135deg,#0f3460,#8b1515);padding:28px 32px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;color:#fff;font-size:20px;font-weight:800;letter-spacing:-0.3px">
              New Website Enquiry
            </h1>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:13px">
              Alpha Capital D Integrated Services
            </p>
          </div>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-top:none;padding:28px 32px;border-radius:0 0 12px 12px">

            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;width:130px">Full Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600">${escHtml(name)}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">Company</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px">${escHtml(company)}</td>
              </tr>` : ''}
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px"><a href="mailto:${escHtml(email)}" style="color:#0f3460">${escHtml(email)}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px">${escHtml(phone)}</td>
              </tr>` : ''}
              ${service ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">Service</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#f2be18;font-weight:700">${escHtml(service)}</td>
              </tr>` : ''}
            </table>

            <div>
              <div style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px">Project Details</div>
              <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;font-size:14px;line-height:1.7;white-space:pre-wrap">${escHtml(message)}</div>
            </div>

            <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;text-align:center">
              Reply directly to this email to respond to ${escHtml(name)}.
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('[contact] Resend error:', err);
    return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
