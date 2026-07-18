import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "California Medical Pharmacy",
  description:
    "Your neighborhood pharmacy: prescriptions, refills, and friendly advice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
