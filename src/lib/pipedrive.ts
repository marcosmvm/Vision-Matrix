const PIPEDRIVE_BASE_URL = `https://${process.env.PIPEDRIVE_COMPANY_DOMAIN}.pipedrive.com/api/v1`;
const API_TOKEN = process.env.PIPEDRIVE_API_TOKEN;

function getUrl(endpoint: string): string {
  const separator = endpoint.includes("?") ? "&" : "?";
  return `${PIPEDRIVE_BASE_URL}${endpoint}${separator}api_token=${API_TOKEN}`;
}

async function pipedriveRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(getUrl(endpoint), {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Pipedrive API error (${response.status}): ${error}`);
  }

  const data = await response.json();
  if (!data.success) {
    throw new Error(`Pipedrive API error: ${data.error || "Unknown error"}`);
  }

  return data;
}

export async function searchOrCreateOrganization(
  companyName: string
): Promise<number> {
  // Search for existing organization
  const searchResult = await pipedriveRequest<{
    data: { items: { item: { id: number } }[] };
  }>(`/organizations/search?term=${encodeURIComponent(companyName)}&limit=1`);

  if (searchResult.data?.items?.length > 0) {
    return searchResult.data.items[0].item.id;
  }

  // Create new organization
  const createResult = await pipedriveRequest<{
    data: { id: number };
  }>("/organizations", {
    method: "POST",
    body: JSON.stringify({ name: companyName }),
  });

  return createResult.data.id;
}

export async function searchOrCreatePerson(
  name: string,
  email: string,
  phone: string,
  orgId: number
): Promise<number> {
  // Search by email
  const searchResult = await pipedriveRequest<{
    data: { items: { item: { id: number } }[] };
  }>(`/persons/search?term=${encodeURIComponent(email)}&fields=email&limit=1`);

  if (searchResult.data?.items?.length > 0) {
    return searchResult.data.items[0].item.id;
  }

  // Create new person
  const personData: Record<string, unknown> = {
    name,
    email: [{ value: email, primary: true, label: "work" }],
    org_id: orgId,
  };

  if (phone) {
    personData.phone = [{ value: phone, primary: true, label: "work" }];
  }

  const createResult = await pipedriveRequest<{
    data: { id: number };
  }>("/persons", {
    method: "POST",
    body: JSON.stringify(personData),
  });

  return createResult.data.id;
}

export async function createDeal(
  title: string,
  personId: number,
  orgId: number
): Promise<number> {
  const createResult = await pipedriveRequest<{
    data: { id: number };
  }>("/deals", {
    method: "POST",
    body: JSON.stringify({
      title,
      person_id: personId,
      org_id: orgId,
      status: "open",
    }),
  });

  return createResult.data.id;
}

export async function addNote(
  dealId: number,
  content: string
): Promise<number> {
  const createResult = await pipedriveRequest<{
    data: { id: number };
  }>("/notes", {
    method: "POST",
    body: JSON.stringify({
      deal_id: dealId,
      content,
      pinned_to_deal_flag: 1,
    }),
  });

  return createResult.data.id;
}

export function buildNoteContent(formData: {
  message: string;
  eventType?: string;
  attendeeCount?: string;
  timeline?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  page_url?: string;
}): string {
  const lines: string[] = [];

  lines.push("<strong>Message:</strong>");
  lines.push(formData.message);
  lines.push("");

  if (formData.eventType) {
    lines.push(`<strong>Event Type:</strong> ${formData.eventType}`);
  }
  if (formData.attendeeCount) {
    lines.push(`<strong>Expected Attendees:</strong> ${formData.attendeeCount}`);
  }
  if (formData.timeline) {
    lines.push(`<strong>Timeline:</strong> ${formData.timeline}`);
  }

  // UTM tracking
  const hasUtm =
    formData.utm_source ||
    formData.utm_medium ||
    formData.utm_campaign ||
    formData.utm_content;
  if (hasUtm) {
    lines.push("");
    lines.push("<strong>--- Tracking ---</strong>");
    if (formData.utm_source)
      lines.push(`Source: ${formData.utm_source}`);
    if (formData.utm_medium)
      lines.push(`Medium: ${formData.utm_medium}`);
    if (formData.utm_campaign)
      lines.push(`Campaign: ${formData.utm_campaign}`);
    if (formData.utm_content)
      lines.push(`Content: ${formData.utm_content}`);
  }

  if (formData.page_url) {
    lines.push(`Page: ${formData.page_url}`);
  }

  lines.push("");
  lines.push(`<em>Submitted: ${new Date().toISOString()}</em>`);

  return lines.join("<br>");
}

export function isPipedriveConfigured(): boolean {
  return !!(API_TOKEN && process.env.PIPEDRIVE_COMPANY_DOMAIN);
}
