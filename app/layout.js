import "./globals.css";

import localFont from "next/font/local";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {UserProvider} from "@/context/UserContext";
import { FavoriteProvider } from "@/context/FavoriteContext";

const fontSans = localFont({
  src: [
    {
      path: "./fonts/NotoSans-Regular.woff2",
      style: "normal",
    },
    {
      path: "./fonts/NotoSans-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "MyWebsite — Build something meaningful",
  description:
    "We help individuals and businesses build modern, simple, and useful digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <UserProvider>
          <FavoriteProvider>
           <Navbar />
            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </FavoriteProvider>
        </UserProvider>
      </body>
    </html>
  );
}