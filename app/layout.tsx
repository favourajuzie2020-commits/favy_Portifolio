import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Favour Ajuzie | UI/UX Designer',
  description:
    'Portfolio of Favour Ajuzie, a UI/UX and Product Designer creating intuitive digital experiences, user-centered interfaces, and compelling visual designs.',
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
