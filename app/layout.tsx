import type { Metadata } from 'next'
import './globals.css'


import { Urbanist } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'a dashboard with Next.js and Tailwind CSS',
}

const urbanist = Urbanist({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={urbanist.className} >
      <body >{children}</body>
    </html>
  )
}
