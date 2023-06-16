import './globals.css'

import React from 'react'

import AppLayout from '@/components/layouts/AppLayout'

import AppProvider from './app-provider'

export const metadata = {
  title: 'HROS Expenso',
  description: 'HROS Expenso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppProvider>
          <AppLayout>{children}</AppLayout>
        </AppProvider>
      </body>
    </html>
  )
}
