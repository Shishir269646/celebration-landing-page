import { Geist, Geist_Mono } from "next/font/google";

import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "This is demo landing Page",
  description: "This is a landing page for demonstration purposes only.",
};






const maiandraGd = localFont({
  src: [
    {
      path: "../../public/fonts/Maiandra Font.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/maiandra-gd-demi-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-maiandra-gd",
});

const mauline = localFont({
  src: [
    {
      path: "../../public/fonts/mauline.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/mauline.otf",
      weight: "700",
    },
  ],
  variable: "--font-mauline",
});


export default function RootLayout({ children }) {







  return (
    <html lang="en" className={`${maiandraGd.variable} ${mauline.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen overflow-auto">
          
          {children}
          <Footer />

        </div>
      </body>
    </html>
  );
}
