import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// College contact information
export const collegeInfo = {
  name: "Devi Shakuntala Shikshan Sansthan",
  tagline: "Excellence in Education",
  address: "Jaisinghnagar, Shahdol, Madhya Pradesh 484771",
  phone1: "+91 9893767392",
  phone2: "+91 9893575723",
  email: {
    admissions: "admissions@devishakuntala.edu.in",
    info: "info@devishakuntala.edu.in"
  },
  officeHours: "Monday - Saturday: 9:00 AM - 5:00 PM",
  officeHoursSunday: "Sunday: Closed",
  whatsapp: "919893767392",
  affiliations: [
    {
      name: "Makhanlal Chaturvedi University",
      fullName: "Rashtreeya Patrkarita Evan Sanchar Vishwavidhlay, Bhopal"
    },
    {
      name: "Chitrkoot Gramoday Vishwavidyalaya",
      fullName: "Madhya Pradesh"
    }
  ],
  socialMedia: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  }
};

// Custom colors that match the design
export const colors = {
  primary: "#003366",
  secondary: "#800000",
  accent: "#FFD700",
  background: "#FFFFFF",
  text: "#333333",
  textLight: "#666666",
  textDark: "#111111",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827"
  }
};
