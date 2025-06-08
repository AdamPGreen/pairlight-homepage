import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Pairlight — AI-powered speaker sourcing for events',
  description: 'Find the right speakers fast. Pairlight enables you to source and connect with high-quality speakers — curated, vetted, and aligned with your agenda.',
  icons: {
    icon: '/assets/brand/fav-icon.png',
  },
  openGraph: {
    images: [
      {
        url: '/assets/brand/pairlight_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Pairlight',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshi.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}