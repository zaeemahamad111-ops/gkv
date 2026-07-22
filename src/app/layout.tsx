import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.greenkoleventures.com'),
  title: 'Green Kole Ventures | Luxury Landscape Architecture & Outdoor Environments',
  description: 'Green Kole Ventures (GKV) designs and constructs premier outdoor living experiences, hardscape architecture, bio-climatic polyhouses, and automated irrigation across Kerala & South India.',
  keywords: ['Landscape Architecture Kerala', 'Luxury Garden Design', 'Hardscape Stone Paving', 'Smart Irrigation', 'Farm Estate Development', 'Green Kole Ventures'],
  authors: [{ name: 'Green Kole Ventures' }],
  openGraph: {
    title: 'Green Kole Ventures | Outdoor Architecture Studio',
    description: 'Designing outdoor experiences that last. Luxury landscaping, natural stone hardscape, farm development, and smart irrigation.',
    url: 'https://www.greenkoleventures.com',
    siteName: 'Green Kole Ventures',
    images: [
      {
        url: '/assets/brand/hero-landscape.png',
        width: 1200,
        height: 630,
        alt: 'Green Kole Ventures Luxury Landscape Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0D120F] text-[#F5F2EC] selection:bg-[#B69B67] selection:text-[#0D120F]">
        <LenisProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </LenisProvider>
      </body>
    </html>
  );
}
