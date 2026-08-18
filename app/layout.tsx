import type { Metadata } from "next";
import { Crimson_Text, DM_Sans, Rethink_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iExec — Browse everything.",
  description:
    "iExec provides real insights, without the data overload. A developer-friendly approach to streamline your business.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${crimsonText.variable} ${dmSans.variable} ${rethinkSans.variable} ${robotoMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-[#121417] flex flex-col selection:bg-[#384718] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
