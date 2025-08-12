'use client'

import { useEffect, useMemo } from 'react'
import { applyColorToBody, cleanColorValue } from '@/lib/colorUtils'

type FontColorProviderProps = {
  headingFontColor?: string
  titleFontColor?: string
  contentFontColor?: string
}

export default function FontColorProvider({
  headingFontColor,
  titleFontColor,
  contentFontColor,
  children
}: FontColorProviderProps) {
  const cleanHeadingColor = cleanColorValue(headingFontColor);
  const cleanTitleColor = cleanColorValue(titleFontColor);
  const cleanContentColor = cleanColorValue(contentFontColor);

  const contextValue = useMemo(() => ({
    headingFontColor: cleanHeadingColor,
    titleFontColor: cleanTitleColor,
    contentFontColor: cleanContentColor
  }), [cleanHeadingColor, cleanTitleColor, cleanContentColor]);

  useEffect(() => {
    // Apply font colors to CSS custom properties
    if (headingFontColor) {
      document.documentElement.style.setProperty('--heading-font-color', cleanHeadingColor);
    }
    if (titleFontColor) {
      document.documentElement.style.setProperty('--title-font-color', cleanTitleColor);
    }
    if (contentFontColor) {
      document.documentElement.style.setProperty('--content-font-color', cleanContentColor);
    }
    
    // Cleanup function to reset font colors when component unmounts
    return () => {
      document.documentElement.style.removeProperty('--heading-font-color');
      document.documentElement.style.removeProperty('--title-font-color');
      document.documentElement.style.removeProperty('--content-font-color');
    }
  }, [headingFontColor, titleFontColor, contentFontColor])

  return null
}
