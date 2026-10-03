import { z } from "zod";
import { officialAwardCategories } from "./officialAwardCategories.js";

export const mvaRiseTracks = [
  "Digital & Emerging Tech",
  "Creative Enterprise & Fashion",
  "Beauty Enterprise & Lifestyle",
  "Digital Media & Creator Economy",
  "Venture Incubation & Leadership",
  "Green Energy & CleanTech",
];

const phoneSchema = z
  .string()
  .trim()
  .min(7, "Enter a valid phone number.")
  .max(30, "Phone number must be 30 characters or fewer.")
  .regex(/^\+?[0-9(). -]+$/, "Use a valid phone number.")
  .refine((phone) => (phone.match(/[0-9]/g) ?? []).length >= 7, "Phone number must contain at least 7 digits.");

const emailSchema = z.string().trim().max(254, "Email address must be 254 characters or fewer.").email("Enter a valid email address.");
const nameSchema = z.string().trim().min(2, "Enter at least 2 characters.").max(120, "Name must be 120 characters or fewer.");

export const nomineeRegistrationSchema = z.object({
  nomineeName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  category: z.string().refine((category) => officialAwardCategories.includes(category), "Select an official award category."),
  location: z.string().trim().min(2, "Enter at least 2 characters for your location.").max(120, "Location must be 120 characters or fewer."),
  achievements: z.string().trim().min(20, "Achievements must be at least 20 characters.").max(3000, "Achievements must be 3,000 characters or fewer."),
  paymentConfirmed: z.literal(true, { error: "Confirm the payment terms to continue." }),
});

export const mvaRiseApplicationSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  age: z.coerce.number().int().min(15, "Applicants must be at least 15 years old.").max(99, "Enter a valid age."),
  track: z.string().refine((track) => mvaRiseTracks.includes(track), "Select an available training track."),
  motivation: z.string().trim().min(20, "Your motivation must be at least 20 characters.").max(3000, "Your motivation must be 3,000 characters or fewer."),
});