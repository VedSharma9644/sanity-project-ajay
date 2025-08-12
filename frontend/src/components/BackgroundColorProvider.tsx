'use client'

import { useEffect } from 'react'

interface BackgroundColorProviderProps {
  children: React.ReactNode
  backgroundColor?: string
  siteBackgroundColor?: string
}

export default function BackgroundColorProvider({ 
  children, 
  backgroundColor,
  siteBackgroundColor 
}: BackgroundColorProviderProps) {
  useEffect(() => {
    // Set the background color CSS variable
    if (backgroundColor) {
      document.documentElement.style.setProperty('--background-color', backgroundColor)
    }
    
    // Set the site background color CSS variable
    if (siteBackgroundColor) {
      document.documentElement.style.setProperty('--site-background-color', siteBackgroundColor)
    }
  }, [backgroundColor, siteBackgroundColor])

  return <>{children}</>
}
