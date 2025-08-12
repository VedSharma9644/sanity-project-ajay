import React from 'react'

export type ButtonStyle = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  style?: ButtonStyle
  size?: ButtonSize
  className?: string
  target?: string
  rel?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  onClick,
  style = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200'
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
  
  const styleClasses = {
    primary: 'relative box-border px-4 py-2 text-sm font-medium bg-[#211E1C] text-[#FEEADD] rounded-md hover:scale-105 transition-all duration-200',
    secondary: 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
    ghost: 'text-orange-500 hover:bg-orange-50'
  }

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${styleClasses[style]} ${className}`

  // If it's a link (href provided)
  if (href) {
    if (style === 'primary') {
      return (
        <div className="h-fit w-fit p-[1px] bg-gradient-to-tr from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432] rounded-md">
          <a
            href={href}
            className={buttonClasses}
            target={target}
            rel={rel}
          >
            {children}
          </a>
        </div>
      )
    }
    
    return (
      <a
        href={href}
        className={buttonClasses}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }

  // If it's a button (onClick provided or default)
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
