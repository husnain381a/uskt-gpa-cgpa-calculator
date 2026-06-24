import Script from 'next/script';
import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  metadataBase: new URL('https://usktcgpacalculator.online'),
  title: {
    default: 'USKT GPA & CGPA Calculator | University of Sialkot Grade Calculator Tool',
    template: '%s | USKT GPA & CGPA Calculator',
  },
  description: 'Effortlessly calculate and track your GPA and CGPA with our accurate, user-friendly tool — built for University of Sialkot students.',
  keywords: [
    'USKT GPA Calculator', 'USKT CGPA Calculator', 'University of Sialkot GPA',
    'University of Sialkot CGPA', 'USKT Grade Calculator 2025', 'usktgpa',
    'usktcgpa', 'usktcgpacalculator', 'new USKT CGPA Calculator',
    'USKT GPA Calculator 2025', 'universityofsialkot', 'university of sialkot grading system',
    'uskt grading policy', 'uskt cgpa tool', 'cgpa calculator for USKT',
    'GPA CGPA Calculator USKT', 'accurate uskt gpa calculator',
  ],
  authors: [{ name: 'Husnain & Aimen' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://usktcgpacalculator.online',
  },
  openGraph: {
    type: 'website',
    url: 'https://usktcgpacalculator.online',
    siteName: 'USKT Calculator',
    title: 'USKT GPA & CGPA Calculator | University of Sialkot Grade Calculator Tool',
    description: 'Effortlessly calculate and track your GPA and CGPA with our accurate, user-friendly tool — built for University of Sialkot students.',
    images: [{
      url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjaZFypyA0ed71DyHoJ-A0ATyxpPlj1IzwCSWkS1yqxz5Ik6BOfdayKngSRyekct1G6v-ZcAyLNq-dhHP2Uf_Oed6WrxGULn84z9PYJx8EG50PklQQb-QtNoX9qWg3JXe8SFMpzObKTbe3KRIapmucGxxIIKRcisNjllMmQkxp_p30BJQxzIqWbRj2qQw0',
    }],
  },
  icons: {
    icon: '/USKTLOGO.webp',
  },
  verification: {
    google: 'KKCTlMtcSdp0vfrvLj5_QqNI2qPCS-rJ6deEgMhc1jw',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'USKT GPA & CGPA Calculator',
  },
  other: {
    'msapplication-TileColor': '#f59e0b',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f59e0b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6R3YBG04TM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6R3YBG04TM');`}
        </Script>
      </body>
    </html>
  );
}
