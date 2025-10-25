import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Electrica - Professional Electrical Services | 24/7 Emergency Support',
  description: 'Professional electrical services for residential and commercial needs. Licensed electricians, 24/7 emergency support, competitive pricing. Call us today!',
  keywords: 'electrician, electrical services, emergency electrician, residential electrical, commercial electrical, licensed electrician',
  authors: [{ name: 'Electrica Services' }],
  openGraph: {
    title: 'Electrica - Professional Electrical Services',
    description: 'Licensed electricians providing quality electrical services for homes and businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
