
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LocationProvider } from "./context/locationContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Home App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        <LocationProvider>
          {children}
        </LocationProvider>

      </body>
    </html>
  );
}
export default RootLayout;