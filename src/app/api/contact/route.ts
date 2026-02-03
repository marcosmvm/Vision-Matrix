import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import {
  isPipedriveConfigured,
  searchOrCreateOrganization,
  searchOrCreatePerson,
  createDeal,
  addNote,
  buildNoteContent,
} from "@/lib/pipedrive";
import { sendLeadNotification, isEmailConfigured } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.website) {
      // Silently reject bot submissions with a fake success
      return NextResponse.json({ success: true });
    }

    // Validate form data
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const data = result.data;
    let dealId: number | null = null;

    // Pipedrive CRM integration
    if (isPipedriveConfigured()) {
      try {
        const orgId = await searchOrCreateOrganization(data.company);
        const personId = await searchOrCreatePerson(
          data.name,
          data.email,
          data.phone || "",
          orgId
        );

        const dealTitle = `Website Lead - ${data.company}${data.eventType ? ` - ${data.eventType}` : ""}`;
        dealId = await createDeal(dealTitle, personId, orgId);

        const noteContent = buildNoteContent({
          message: data.message,
          eventType: data.eventType,
          attendeeCount: data.attendeeCount,
          timeline: data.timeline,
          utm_source: data.utm_source,
          utm_medium: data.utm_medium,
          utm_campaign: data.utm_campaign,
          utm_content: data.utm_content,
          page_url: data.page_url,
        });

        await addNote(dealId, noteContent);
      } catch (error) {
        // Log but don't fail - email notification is the fallback
        console.error("Pipedrive integration error:", error);
      }
    }

    // Email notification
    if (isEmailConfigured()) {
      try {
        await sendLeadNotification({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          eventType: data.eventType,
          attendeeCount: data.attendeeCount,
          timeline: data.timeline,
          message: data.message,
          utm_source: data.utm_source,
          utm_medium: data.utm_medium,
          utm_campaign: data.utm_campaign,
          utm_content: data.utm_content,
          page_url: data.page_url,
        });
      } catch (error) {
        console.error("Email notification error:", error);
      }
    }

    return NextResponse.json({ success: true, dealId });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
