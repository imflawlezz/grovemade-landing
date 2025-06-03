import "./globals.css";
import {Header} from "@/app/components/layout/Header";
import {Hero} from "@/app/components/sections/Hero";
import {GetStarted} from "@/app/components/sections/GetStarted";
import {Featured} from "@/app/components/sections/Featured";
import {Inspiration} from "@/app/components/sections/Inspiration";
import {House} from "@/app/components/sections/House";
import {Team} from "@/app/components/sections/Team";
import {Motto} from "@/app/components/sections/Motto";
import Footer from "@/app/components/layout/Footer";
export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-light tracking-wide">
      <Header />
      <Hero />
      <GetStarted />
      <Featured />
      <Inspiration />
      <House />
      <Team />
      <Motto />
      <Footer />
      </body>
    </html>
  );
}
