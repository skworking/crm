
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
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
        <div className={`w-full bg-white lg:sticky lg:top-0  z-50 shadow-md  `}>
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;