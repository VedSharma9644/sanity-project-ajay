export type ButtonStyle = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

// Base button classes
export const getBaseButtonClasses = () => 
  'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200'

// Size-specific classes
export const getButtonSizeClasses = (size: ButtonSize = 'md') => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-4 text-base'
  }
  return sizeClasses[size]
}

// Style-specific classes
export const getButtonStyleClasses = (style: ButtonStyle = 'primary') => {
  const styleClasses = {
    primary: 'relative box-border px-4 py-3 text-sm font-medium bg-[#211E1C] text-[#FEEADD] rounded-md hover:scale-105 transition-all duration-200',
    secondary: 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
    ghost: 'text-orange-500 hover:bg-orange-50'
  }
  return styleClasses[style]
}

// Complete button classes
export const getButtonClasses = (style: ButtonStyle = 'primary', size: ButtonSize = 'md') => {
  const baseClasses = getBaseButtonClasses()
  const sizeClasses = getButtonSizeClasses(size)
  const styleClasses = getButtonStyleClasses(style)
  
  return `${baseClasses} ${sizeClasses} ${styleClasses}`
}

// Primary button wrapper classes (for gradient border)
export const getPrimaryButtonWrapperClasses = () => 
  'h-fit w-fit p-[1px] bg-gradient-to-tr from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432] rounded-md'

// CTA section specific size classes (with width/height constraints)
export const getCTASizeClasses = (size: ButtonSize = 'md') => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm w-[200px] h-[32px]',
    medium: 'px-4 py-3 text-sm w-[280px] h-[38px] largeTablet:w-[394px]',
    large: 'px-6 py-4 text-base w-[320px] h-[44px] largeTablet:w-[450px]'
  }
  return sizeClasses[size]
}

// CTA section specific button classes
export const getCTAButtonClasses = (style: ButtonStyle = 'primary', size: ButtonSize = 'md') => {
  const baseClasses = getBaseButtonClasses()
  const sizeClasses = getCTASizeClasses(size)
  const styleClasses = getButtonStyleClasses(style)
  
  return `${baseClasses} ${sizeClasses} ${styleClasses}`
}
