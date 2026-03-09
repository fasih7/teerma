import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Teerma Consultancy — Think Big. Study Abroad.",
  description:
    "Teerma Consultancy has guided hundreds of students to top universities across Cyprus, Russia, Malaysia, China, Uzbekistan, and beyond. 6+ years of real industry experience with a proven visa success track record.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-[family-name:var(--font-poppins)]`}>
        {children}
      </body>
    </html>
  );
}
