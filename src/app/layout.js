import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrepQuest",
  description: "Tokyo",
  icons: {
    icon: [
      "/favicon.ico?v=4", 
      "/favicon-16x16.png?v=4", 
      "/favicon-32x32.png?v=4", 
    ],
    apple: "/apple-touch-icon.png?v=4",
    shortcut: "/favicon.ico?v=4",  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fbf9ef]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
