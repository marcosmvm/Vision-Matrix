import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string(),
  company: z.string().min(1, "Company is required"),
  eventType: z.string(),
  attendeeCount: z.string(),
  timeline: z.string(),
  message: z.string().min(10, "Please provide more detail about your event"),
  // Honeypot field - should remain empty
  website: z.string().max(0, "Bot detected"),
  // UTM tracking fields
  utm_source: z.string(),
  utm_medium: z.string(),
  utm_campaign: z.string(),
  utm_content: z.string(),
  page_url: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Schema for client-side validation (without honeypot check)
export const clientContactFormSchema = contactFormSchema.omit({
  website: true,
  utm_source: true,
  utm_medium: true,
  utm_campaign: true,
  utm_content: true,
  page_url: true,
});

export type ClientContactFormData = z.infer<typeof clientContactFormSchema>;
