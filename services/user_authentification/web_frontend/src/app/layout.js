import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import "./navStyles.css"; // Importer le nouveau fichier CSS pour la navigation

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="nav-container">
          {/* Lien vers Home */}
          <Link href="/" className="nav-button nav-button-home">
            Home
          </Link>

          {/* Lien vers Login */}
          <Link href="/login" className="nav-button nav-button-login">
            Login
          </Link>

          {/* Lien vers Signup */}
          <Link href="/signup" className="nav-button nav-button-signup">
            Signup
          </Link>
        </nav>

        {/* Contenu de la page */}
        {children}
      </body>
    </html>
  );
}
