import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

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
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
