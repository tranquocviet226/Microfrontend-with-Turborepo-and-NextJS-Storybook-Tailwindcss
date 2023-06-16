import React from 'react'

export interface HrosInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: number
  fullWidth?: boolean
  classes?: React.ComponentProps<'button'>['className']
  onClick?: () => void
  register?: object
}

const HrosInput: React.FC<HrosInputProps> = ({
  size = 24,
  fullWidth = false,
  classes = '',
  onClick,
  register,
  ...rest
}) => {
  const getClasses = () => {
    let inputClass = `rounded-lg px-2 py-1 border bg-bg-primary`
    if (fullWidth) inputClass += ' w-full'
    if (classes) {
      inputClass += ` ${classes}`
    }
    return inputClass
  }
  return (
    <input
      size={size}
      onClick={onClick}
      className={getClasses()}
      {...register}
      {...rest}
    ></input>
  )
}

export default HrosInput
