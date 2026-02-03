import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface LeadNotificationData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  eventType?: string;
  attendeeCount?: string;
  timeline?: string;
  message: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  page_url?: string;
}

export async function sendLeadNotification(
  data: LeadNotificationData
): Promise<void> {
  if (!resend) {
    console.warn("Resend not configured - skipping email notification");
    return;
  }

  const notificationEmail =
    process.env.NOTIFICATION_EMAIL || "info@vm-events.com";

  const utmSection =
    data.utm_source || data.utm_medium || data.utm_campaign
      ? `
        <tr><td colspan="2" style="padding: 16px 0 8px; border-top: 1px solid #333; font-weight: bold; color: #00d4ff;">Tracking</td></tr>
        ${data.utm_source ? `<tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Source</td><td style="color: #fff;">${data.utm_source}</td></tr>` : ""}
        ${data.utm_medium ? `<tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Medium</td><td style="color: #fff;">${data.utm_medium}</td></tr>` : ""}
        ${data.utm_campaign ? `<tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Campaign</td><td style="color: #fff;">${data.utm_campaign}</td></tr>` : ""}
        ${data.utm_content ? `<tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Content</td><td style="color: #fff;">${data.utm_content}</td></tr>` : ""}
      `
      : "";

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #fff; padding: 32px; border-radius: 8px;">
      <h1 style="color: #00d4ff; font-size: 20px; margin: 0 0 24px;">New Website Lead</h1>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Name</td><td style="color: #fff;">${data.name}</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Email</td><td style="color: #fff;"><a href="mailto:${data.email}" style="color: #00d4ff;">${data.email}</a></td></tr>
        ${data.phone ? `<tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Phone</td><td style="color: #fff;">${data.phone}</td></tr>` : ""}
        <tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Company</td><td style="color: #fff;">${data.company}</td></tr>
        ${data.eventType ? `<tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Event Type</td><td style="color: #fff;">${data.eventType}</td></tr>` : ""}
        ${data.attendeeCount ? `<tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Attendees</td><td style="color: #fff;">${data.attendeeCount}</td></tr>` : ""}
        ${data.timeline ? `<tr><td style="padding: 4px 16px 4px 0; color: #a0a8b8;">Timeline</td><td style="color: #fff;">${data.timeline}</td></tr>` : ""}
        <tr><td colspan="2" style="padding: 16px 0 8px; border-top: 1px solid #333; font-weight: bold; color: #00d4ff;">Message</td></tr>
        <tr><td colspan="2" style="padding: 4px 0; color: #fff; line-height: 1.6;">${data.message}</td></tr>
        ${utmSection}
      </table>
      <p style="margin: 24px 0 0; padding-top: 16px; border-top: 1px solid #333; color: #a0a8b8; font-size: 12px;">
        ${data.page_url ? `Submitted from: ${data.page_url}<br>` : ""}
        ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT
      </p>
    </div>
  `;

  await resend.emails.send({
    from: "Vision Matrix <noreply@vm-events.com>",
    to: [notificationEmail],
    subject: `New Lead: ${data.name} from ${data.company}`,
    html,
  });
}

export function isEmailConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}
