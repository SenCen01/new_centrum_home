"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactRequest(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = formData.get("firstName")?.toString().trim() ?? "";
  const lastName = formData.get("lastName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const serviceInterest = formData.get("serviceInterest")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!firstName || !lastName || !email || !serviceInterest) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: wire up to an email/CRM provider (e.g. Resend) once requested.
  console.log("Contact request received:", {
    firstName,
    lastName,
    email,
    phone,
    serviceInterest,
    message,
  });

  return {
    status: "success",
    message: "Thanks! We've received your message and will be in touch shortly.",
  };
}
