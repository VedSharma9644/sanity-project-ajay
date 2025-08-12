import React from 'react'

interface PillTagProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'filled'
}

export default function PillTag({ 
  children, 
  className = '', 
  variant = 'default' 
}: PillTagProps) {
  const baseClasses = 'w-fit text-base px-3 py-1 rounded-full font-medium transition-all duration-200'
  
  const variantClasses = {
    default: 'text-[#F87216] border border-[#F87216]',
    outline: 'text-[#F87216] border border-[#F87216] bg-transparent',
    filled: 'text-white border border-[#F87216] bg-[#F87216]'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  
  return (
    <span className={classes}>
      {children}
    </span>
  )
}
