'use client'

import { useEffect } from 'react'
import { applyColorToBody } from '@/lib/colorUtils'

type BackgroundColorProviderProps = {
  backgroundColor: string
}

export default function BackgroundColorProvider({ backgroundColor }: BackgroundColorProviderProps) {
  useEffect(() => {
    // Apply background color to body using utility function
    applyColorToBody('backgroundColor', backgroundColor)
    
    // Cleanup function to reset background when component unmounts
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [backgroundColor])

  return null
}
