import { Roboto_Flex, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/layout/navigation';
import Footer from "@/components/layout/footer";

const roboto = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'NextGen - Digital Solutions That Drive Success',
    template: '%s - NextGen',
  },
  description:
    'At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.',

  openGraph: {
    title: 'NextGen - Digital Solutions That Drive Success',
    description:
      'At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.',
    url: 'https://nextgen.io/',
    siteName: 'NextGen - Digital Solutions That Drive Success',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://nextgen.io/og.png',
        width: 1200,
        height: 630,
        alt: 'NextGen',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased font-(family-name:--font-roboto-flex) bg-dark-main`}
      >
      <Navigation />
      {children}
      <Footer />
      </body>
    </html>
  );
}
