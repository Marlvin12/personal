import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marlvin Goremusandu - Software Engineer & Founder',
  description: 'Software engineer passionate about scalable systems, ai, and financial innovation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

