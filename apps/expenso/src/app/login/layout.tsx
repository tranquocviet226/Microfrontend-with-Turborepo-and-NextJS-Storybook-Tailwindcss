import React from 'react'

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className='p-4'>{children}</section>
}
