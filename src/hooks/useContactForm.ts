"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientContactFormSchema, type ClientContactFormData } from "@/lib/schemas";

interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  page_url: string;
}

export function useContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    page_url: "",
  });

  const form = useForm<ClientContactFormData>({
    resolver: zodResolver(clientContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      eventType: "",
      attendeeCount: "",
      timeline: "",
      message: "",
    },
  });

  // Capture UTM params from URL on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      page_url: window.location.href,
    });
  }, []);

  const onSubmit = async (data: ClientContactFormData) => {
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          ...utmParams,
          website: "", // Honeypot - always empty for real submissions
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(
          result.error || "Something went wrong. Please try again."
        );
        return;
      }

      setIsSubmitted(true);
    } catch {
      setServerError("Unable to connect. Please check your connection and try again.");
    }
  };

  const resetForm = () => {
    form.reset();
    setIsSubmitted(false);
    setServerError(null);
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    isSubmitted,
    serverError,
    setServerError,
    resetForm,
  };
}
