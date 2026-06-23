import type { Metadata } from "next";
import { Poppins, Dancing_Script, Outfit } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cursive",
});

const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Theekshana Pabodi | Software Engineer Portfolio",
  description: "Personal portfolio of Theekshana Pabodi, Software Engineer & Full Stack Web Developer. Modern interactive developer portfolio showcases projects, skills, education, and experience.",
  icons: {
    icon: [
      { url: "/fav.png?v=1", type: "image/png" },
    ],
    shortcut: ["/fav.png?v=1"],
    apple: [{ url: "/fav.png?v=1" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${dancingScript.variable} ${outfit.variable} font-sans antialiased bg-brand-navy text-white`}
      >
        {children}
      </body>
    </html>
  );
}

