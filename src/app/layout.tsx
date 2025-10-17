import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gopang - From Our Waste, For Our Future',
  description: 'Food waste transformation through Black Soldier Fly processing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* Main content with top padding to account for fixed navbar */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer at bottom */}
      </body>
    </html>
  )
}