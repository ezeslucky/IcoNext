import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/providers/theme';
import { Header } from '@/components/header';

// import ogImage from './og.png';
import { Analytics } from '@/components/analytics';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
// import { SnowfallComponent } from '@/components/snowfall';
import { Toaster } from 'sonner';


const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://icons.ezeslucky.dev'),
  openGraph: {
    title: 'IcoNext',
    description: 'beautifully crafted animated icons',
    siteName: 'IcoNext',
    type: 'website',
    locale: 'en_US',
    url: 'https://icons.ezeslucky.dev',
    // Image: [
    //   {
    //     url: ogImage.src,
    //     width: ogImage.width,
    //     height: ogImage.height,
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  applicationName: 'IcoNext',
  appleWebApp: {
    title: 'IcoNext',
    statusBarStyle: 'default',
    capable: true,
  },
  title: {
    default: 'IcoNext',
    template: `%s - IcoNext
`,
  },
  description: 'beautifully crafted animated icons',
  twitter: {
    card: 'summary_large_image',
    title: 'IcoNext',
    description: 'beautifully crafted animated icons',
    creator: '@ezeslucky',
    // Image: [
    //   {
    //     url: ogImage.src,
    //     width: ogImage.width,
    //     height: ogImage.height,
    //   },
    // ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  maximumScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-background dark:bg-[#151515]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        
           
          <Header />
          <NuqsAdapter>
            {children}
            <Toaster theme="light" position="bottom-right" />
            {/* <SnowfallComponent /> */}
          </NuqsAdapter>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
