import Head from 'next/head'
import { urlFor } from '@/lib/sanity.client'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: any
  url?: string
  settings?: any
  noIndex?: boolean
}

export default function SEOHead({ 
  title, 
  description, 
  image, 
  url, 
  settings, 
  noIndex = false 
}: SEOHeadProps) {
  // Use settings defaults if not provided
  const metaTitle = title 
    ? (settings?.metaTitleTemplate ? settings.metaTitleTemplate.replace('%s', title) : title)
    : settings?.defaultMetaTitle || settings?.siteTitle || 'Website'
  
  const metaDescription = description || settings?.defaultMetaDescription || settings?.siteDescription || ''
  const metaImage = image || settings?.metaImage || settings?.ogImage
  const siteUrl = settings?.siteURL || ''
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {settings?.defaultMetaKeywords && (
        <meta name="keywords" content={settings.defaultMetaKeywords.join(', ')} />
      )}
      <meta name="language" content={settings?.defaultLanguage || 'en'} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      {fullUrl && <link rel="canonical" href={fullUrl} />}
      
      {/* Favicon */}
      {settings?.favicon && (
        <link rel="icon" href={urlFor(settings.favicon).url()} />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content={settings?.ogType || 'website'} />
      <meta property="og:title" content={settings?.ogTitle || metaTitle} />
      <meta property="og:description" content={settings?.ogDescription || metaDescription} />
      <meta property="og:url" content={fullUrl} />
      {metaImage && (
        <meta property="og:image" content={urlFor(metaImage).url()} />
      )}
      {settings?.siteURL && (
        <meta property="og:site_name" content={settings.siteTitle} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={settings?.twitterCardType || 'summary'} />
      {settings?.twitterHandle && (
        <meta name="twitter:site" content={settings.twitterHandle} />
      )}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && (
        <meta name="twitter:image" content={urlFor(metaImage).url()} />
      )}
      
      {/* Structured Data */}
      {settings?.organizationName && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": settings.organizationName,
              "url": settings.siteURL,
              ...(settings.logo && {
                "logo": urlFor(settings.logo).url()
              })
            })
          }}
        />
      )}
    </Head>
  )
} 