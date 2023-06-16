import type { ReactNode } from 'react'
import React from 'react'

export interface HrosButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  classes?: React.ComponentProps<'button'>['className']
  href?: string
  fullWidth?: boolean
  disabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  children: ReactNode
  onClick?: () => void
}

const HrosButton: React.FC<HrosButtonProps> = ({
  variant = 'default',
  color = 'primary',
  size = 'md',
  classes = '',
  href = '',
  fullWidth = false,
  disabled = false,
  startIcon = null,
  endIcon = null,
  children,
  onClick,
  ...rest
}) => {
  const getButtonClass = (): string => {
    let buttonClass = 'rounded-lg font-medium focus:outline-none'
    const textColors = {
      primary: ' text-blue-500',
      secondary: ' text-gray-500 border-gray-500',
      danger: ' text-red-500 border-red-500',
    }
    const borderColors = {
      primary: ' border-blue-500',
      secondary: ' border-gray-500',
      danger: ' border-red-500',
    }

    const variantClasses = {
      outlined: ` border bg-white hover:none ${textColors[color]} ${borderColors[color]}`,
      text: `  underline ${textColors[color]} bg-white`,
      default: ' shadow',
    }
    buttonClass += variantClasses[variant] || variantClasses.default

    const colorClasses = {
      primary: ' bg-blue-500 text-white hover:bg-blue-600',
      secondary: ' bg-gray-500 text-white hover:bg-gray-600',
      danger: ' bg-red-500 text-white hover:bg-red-600',
    }
    if (variant === 'default') buttonClass += colorClasses[color] || ''

    const sizeClasses = {
      sm: ' text-sm px-3 py-1',
      md: ' text-base px-4 py-2',
      lg: ' text-lg px-5 py-2',
    }
    buttonClass += sizeClasses[size] || sizeClasses.md

    if (fullWidth) {
      buttonClass += ' w-full'
    }
    if (classes) {
      buttonClass += ` ${classes}`
    }
    if (disabled) {
      buttonClass += ' opacity-50 cursor-not-allowed'
    }
    return buttonClass
  }

  const renderButton = (
    <button
      className={getButtonClass()}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {startIcon && <span className='mr-1'>{startIcon}</span>}
      {children}
      {endIcon && <span className='ml-1'>{endIcon}</span>}
    </button>
  )

  if (href) {
    return <a href={href}>{renderButton}</a>
  }
  return renderButton
}

export default HrosButton
