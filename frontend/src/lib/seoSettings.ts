import { sanityClient } from './sanity.client'

export const getSeoSettingsQuery = () => `
  *[_type == "seoSettings"][0] {
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

export const getSeoSettings = async () => {
  try {
    const settings = await sanityClient.fetch(getSeoSettingsQuery())
    return settings
  } catch (error) {
    console.error('Error fetching SEO settings:', error)
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
