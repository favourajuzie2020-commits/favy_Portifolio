import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Favour Ajuzie | UI/UX, Product & Graphic Designer',
  description:
    'Explore the portfolio of Favour Ajuzie, a UI/UX, Product, and Graphic Designer creating intuitive digital products, user-centred experiences, and compelling visual identities.',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
