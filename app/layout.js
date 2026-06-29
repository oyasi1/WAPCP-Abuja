import { Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WAPCP Abuja - West African Postgraduate College of Pharmacists",
  description: "Excellence in pharmaceutical education and professional development in West Africa",
icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',

};

export default function RootLayout({ children }) {
  return (
    <html
  lang="en"
  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
  <body className="h-full">
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  </body>
</html>
  );
}
