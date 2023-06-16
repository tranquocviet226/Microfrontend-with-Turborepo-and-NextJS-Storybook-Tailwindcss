import * as React from 'react'

export const Header = ({ text }: { text: string }) => {
  return (
    <header className="bg-primary-500 h-14 w-full flex justify-center items-center text-white font-bold">
      {text}
    </header>
  )
}
