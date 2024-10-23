import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Metadata configurada sin viewport
export const metadata = {
  title: "Ericka Veintimilla Digital Card",
  description:
    "Máster en Marketing Digital, experta en creación de contenido y manejo de redes sociales.",
  keywords:
    "Ericka Veintimilla, Marketing Digital, creación de contenido, manejo de redes sociales, estrategias digitales",
  authors: [{ name: "Ericka Veintimilla" }],

  robots: "index, follow",

  openGraph: {
    title: "Ericka Veintimilla Digital Card",
  description:
    "Digital Card de Ericka Veintimilla, Máster en Marketing Digital y experta en creación de contenido y manejo de redes sociales.",
  url: "https://erickaveintimilla.anvetcard.com",
    images: [
      {
        url: "https://erickaveintimilla.anvetcard.com/assets/images/sharedimage.jpg",
        alt: "Likeate Logo",
        width: 1200, // Ajuste de tamaño recomendado para OpenGraph
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ericka Veintimilla - Máster en Marketing Digital",
    description:
      "Máster en Marketing Digital, experta en creación de contenido y manejo de redes sociales.",
    images: ["/assets/images/logo.jpg"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

// Nueva exportación para viewport
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-image-with-overlay">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
