import { sanityClient } from './sanity.client'

export const getSiteSettingsQuery = () => `
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    siteURL,
    defaultLanguage,
    favicon,
    metaTitleTemplate,
    defaultMetaTitle,
    defaultMetaDescription,
    defaultMetaKeywords,
    metaImage,
    ogType,
    ogTitle,
    ogDescription,
    ogImage,
    twitterCardType,
    twitterHandle,
    organizationName,
    logo
  }
`

export const getSiteSettings = async () => {
  try {
    const settings = await sanityClient.fetch(getSiteSettingsQuery())
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

// Helper function to generate meta title using template
export const generateMetaTitle = (pageTitle: string, settings: any) => {
  if (!settings?.metaTitleTemplate) {
    return pageTitle || settings?.defaultMetaTitle || settings?.siteTitle || 'Website'
  }
  
  return settings.metaTitleTemplate.replace('%s', pageTitle || '')
}

// Helper function to get default meta description
export const getDefaultMetaDescription = (settings: any) => {
  return settings?.defaultMetaDescription || settings?.siteDescription || ''
}

// Helper function to get default meta image
export const getDefaultMetaImage = (settings: any) => {
  return settings?.metaImage || settings?.ogImage || null
} 