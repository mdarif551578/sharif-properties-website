"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Please check the form fields.",
    };
  }

  const data = validatedFields.data;

  // Here you would typically send an email, save to a database,
  // or call an AI flow to classify the inquiry.
  console.log("New contact form submission:", data);

  // Simulating AI analysis
  const isUrgent = data.message.toLowerCase().includes("urgent");
  console.log(`AI Analysis: Is urgent? ${isUrgent}`);

  return {
    message: "Thank you for your message! We will get back to you shortly.",
    errors: null,
    success: true,
  };
}
