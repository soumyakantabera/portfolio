import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Soumyakanta Bera - Finance & Risk Management Portfolio',
  description: 'MSc student in Finance & Risk Management specializing in Corporate Finance, FP&A, and M&A with expertise in data analytics and machine learning.',
  keywords: ['Finance', 'Risk Management', 'FP&A', 'M&A', 'Corporate Finance', 'Data Analytics', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Soumyakanta Bera' }],
  openGraph: {
    title: 'Soumyakanta Bera - Finance & Risk Management Portfolio',
    description: 'MSc student in Finance & Risk Management — Corporate Finance / FP&A / M&A — Data & ML',
    type: 'website',
    locale: 'en_US',
    siteName: 'Soumyakanta Bera Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumyakanta Bera - Finance & Risk Management Portfolio',
    description: 'MSc student in Finance & Risk Management — Corporate Finance / FP&A / M&A — Data & ML',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
