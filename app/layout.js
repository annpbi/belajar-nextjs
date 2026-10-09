import "./globals.css";

import localFont from "next/font/local";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AuthProvider } from "@/context/AuthContext";
import { FavoriteProvider } from "@/context/FavoriteContext";
import { createClient } from "@/lib/supabase/server";

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
  title: "PARAS — Build something meaningful",
  description:
    "Kami membantu masyarakat memahami informasi iklim dan kebencanaan, serta mendorong aksi nyata untuk lingkungan yang lebih tangguh.",
};

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html
      lang="en"
      className={`${fontSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <AuthProvider user={user ? { id: user.id, email: user.email, name: user.user_metadata?.name ?? null } : null}>
          <FavoriteProvider>
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </FavoriteProvider>
        </AuthProvider>
      </body>
    </html>
  );
}