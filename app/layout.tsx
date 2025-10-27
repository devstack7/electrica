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
  metadataBase: new URL('https://j-ampgroup.com.au'),
  title: 'J-Amp Group - Melbourne Electrical Services | Custom Builds, Renovations & Fit-outs',
  description: 'Trusted Melbourne electrical company specialising in custom new builds, renovations, extensions and fit-outs. Licensed electricians serving Victoria since 2020. Call 0482 441 022',
  keywords: 'electrician Melbourne, electrical services Melbourne, custom builds, renovations, fit-outs, licensed electrician Victoria, J-Amp Group',
  authors: [{ name: 'J-Amp Group' }],
  icons: {
    icon: '/images/j-amp-logo.png',
    apple: '/images/j-amp-logo.png',
  },
  openGraph: {
    title: 'J-Amp Group - Melbourne Electrical Services',
    description: 'Trusted electrical company specialising in custom new builds, renovations, extensions and fit-outs throughout Melbourne.',
    type: 'website',
    images: ['/images/j-amp-logo.png'],
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
