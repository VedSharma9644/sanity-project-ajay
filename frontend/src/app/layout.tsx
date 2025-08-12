import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { sanityClient } from "@/lib/sanity.client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackgroundColorProvider from "@/components/BackgroundColorProvider";
import { getSeoSettings } from "@/lib/seoSettings";
import { getSiteSettings } from "@/lib/siteSettings";
import { getHeaderQuery } from "@/lib/headerQuery";
import { VisualEditingWrapper } from '@/components/VisualEditingWrapper'
import DebugWebSocket from '@/components/DebugWebSocket'
import EnvTest from '@/components/EnvTest'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const seoSettings = await getSeoSettings()
  
  return {
    title: seoSettings?.defaultMetaTitle || seoSettings?.siteTitle || "Open Sauced - Supercharge Your Open Source Knowledge",
    description: seoSettings?.defaultMetaDescription || seoSettings?.siteDescription || "Discover insights, track contributions, and build better open source projects with our comprehensive platform.",
    keywords: seoSettings?.defaultMetaKeywords?.join(', '),
    authors: [{ name: seoSettings?.organizationName }],
    openGraph: {
      title: seoSettings?.ogTitle || seoSettings?.defaultMetaTitle || seoSettings?.siteTitle,
      description: seoSettings?.ogDescription || seoSettings?.defaultMetaDescription || seoSettings?.siteDescription,
      type: seoSettings?.ogType || 'website',
      url: seoSettings?.siteURL,
      siteName: seoSettings?.siteTitle,
      images: seoSettings?.ogImage ? [
        {
          url: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2025-08-03/production/${seoSettings.ogImage.asset._ref}`,
          width: 1200,
          height: 630,
          alt: seoSettings?.ogTitle || seoSettings?.defaultMetaTitle,
        }
      ] : undefined,
    },
    twitter: {
      card: seoSettings?.twitterCardType || 'summary',
      title: seoSettings?.ogTitle || seoSettings?.defaultMetaTitle || seoSettings?.siteTitle,
      description: seoSettings?.ogDescription || seoSettings?.defaultMetaDescription || seoSettings?.siteDescription,
      site: seoSettings?.twitterHandle,
      images: seoSettings?.ogImage ? [
        `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2025-08-03/production/${seoSettings.ogImage.asset._ref}`
      ] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: seoSettings?.siteURL,
    },
  }
}

async function getHeaderData() {
  return await sanityClient.fetch(getHeaderQuery)
}

async function getFooterData() {
  return await sanityClient.fetch(`*[_type == "siteFooter"][0]{
    logo{
      asset->{
        url
      }
    },
    socialLinks[]{
      platform,
      icon{
        asset->{
          url
        }
      },
      url
    },
    menuLinks[]{
      title,
      url
    },
    moreSauce[]{
      title,
      url
    },
    contact{
      email
    },
    legalLinks[]{
      label,
      url
    },
    copyright
  }`)
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerData = await getHeaderData()
  const footerData = await getFooterData()
  const siteSettings = await getSiteSettings()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ 
          backgroundColor: siteSettings?.siteTheme?.siteBackgroundColor || '#ffffff' 
        }}
      >
        <BackgroundColorProvider siteBackgroundColor={siteSettings?.siteTheme?.siteBackgroundColor}>
          <SiteHeader 
            logo={headerData?.logo}
            navLinks={headerData?.navLinks}
            ctaButton={headerData?.ctaButton}
            headerSettings={headerData?.headerSettings}
          />
          {children}
          <SiteFooter 
            logo={footerData?.logo}
            socialLinks={footerData?.socialLinks}
            menuLinks={footerData?.menuLinks}
            moreSauce={footerData?.moreSauce}
            contact={footerData?.contact}
            legalLinks={footerData?.legalLinks}
            copyright={footerData?.copyright}
          />
          <VisualEditingWrapper />
          {/* Debug components disabled - uncomment to re-enable
          <DebugWebSocket />
          <EnvTest />
          */}
        </BackgroundColorProvider>
      </body>
    </html>
  );
}
