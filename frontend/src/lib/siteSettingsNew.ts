import { sanityClient } from './sanity.client'

export const getSiteSettingsNewQuery = () => `
  *[_type == "siteSettingsNew"][0] {
    siteName,
    siteDescription,
    defaultLanguage,
    supportedLanguages,
    googleTagId,
    googleTagEnabled,
    maintenanceMode,
    maintenanceMessage,
    siteTheme {
      primaryGradient {
        from,
        to,
        direction
      },
      secondaryGradient {
        from,
        to,
        direction
      },
      accentGradient {
        from,
        to,
        direction
      },
      themeMode
    }
  }
`

export const getSiteSettingsNew = async () => {
  try {
    const settings = await sanityClient.fetch(getSiteSettingsNewQuery())
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

// Helper function to generate gradient CSS class
export const generateGradientClass = (gradient: any) => {
  if (!gradient?.from || !gradient?.to) return ''
  return `bg-gradient-to-${gradient.direction || 'r'} from-[${gradient.from}] to-[${gradient.to}]`
}

// Helper function to get theme mode
export const getThemeMode = (settings: any) => {
  return settings?.siteTheme?.themeMode || 'light'
}

// Helper function to check if Google Analytics is enabled
export const isGoogleAnalyticsEnabled = (settings: any) => {
  return settings?.googleTagEnabled && settings?.googleTagId
}

// Helper function to get Google Tag ID
export const getGoogleTagId = (settings: any) => {
  return settings?.googleTagId || null
}

// Helper function to check if maintenance mode is enabled
export const isMaintenanceMode = (settings: any) => {
  return settings?.maintenanceMode || false
}

// Helper function to get maintenance message
export const getMaintenanceMessage = (settings: any) => {
  return settings?.maintenanceMessage || 'Site is under maintenance. Please check back later.'
} 