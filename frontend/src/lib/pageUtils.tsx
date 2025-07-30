import React from 'react'
import { PortableText } from '@portabletext/react'
import HeroSection from '@/components/HeroSection'
import TeamSection from '@/components/TeamSection'
import SeoSection from '@/components/SeoSection'
import BrandsSection from '@/components/BrandsSection'
import EasyAccessSection from '@/components/EasyAccessSection'
import InsightSection from '@/components/InsightSection'
import WorkspaceSection from '@/components/WorkspaceSection'
import HeadingDescriptionSection from '@/components/HeadingDescriptionSection'
import NewsletterSection from '@/components/NewsletterSection'

export const renderSection = (section: any): React.ReactElement | null => {
  console.log('Rendering section:', section._type, section);
  
  switch (section._type) {
    case 'contentSection':
      return (
        <section key={section._key} className="mb-12">
          {section.title && (
            <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
          )}
          {section.content && (
            <div className="prose max-w-none">
              <PortableText value={section.content} />
            </div>
          )}
        </section>
      )
    case 'heroSectionRef':
      console.log('Hero section data:', section.data);
      return section.data ? (
        <HeroSection key={section._key} {...section.data} />
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Hero Section Error:</strong> No hero section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    case 'teamSectionRef':
      console.log('Team section data:', section.data);
      return section.data ? (
        <TeamSection key={section._key} {...section.data} />
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Team Section Error:</strong> No team section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    case 'seoSectionRef':
      console.log('SEO section data:', section.data);
      return section.data ? (
        <SeoSection key={section._key} {...section.data} />
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>SEO Section Error:</strong> No SEO section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    case 'brandsSectionRef':
      console.log('Brands section data:', section.data);
      return section.data ? (
        <BrandsSection key={section._key} {...section.data} />
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Brands Section Error:</strong> No brands section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    case 'easyAccessSectionRef':
      console.log('Easy Access section data:', section.data);
      return section.data ? (
        <EasyAccessSection key={section._key} {...section.data} />
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <div className="text-red-800">
            <strong>Easy Access Section Error:</strong> No easy access section data found
          </div>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    case 'insightSectionRef':
      console.log('Insight section data:', section.data);
      return section.data ? (
        <InsightSection key={section._key} {...section.data} />
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Insight Section Error:</strong> No insight section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    case 'workspaceSectionRef':
      console.log('Workspace section data:', section.data);
      return section.data ? (
        <WorkspaceSection key={section._key} {...section.data} />
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Workspace Section Error:</strong> No workspace section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    case 'headingDescriptionRef':
      console.log('Heading Description section data:', section.data);
      return section.data ? (
        <HeadingDescriptionSection key={section._key} {...section.data} />
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Heading Description Error:</strong> No heading description data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    case 'newsletterSectionRef':
      console.log('Newsletter section data:', section.data);
      return section.data ? (
        <NewsletterSection key={section._key} {...section.data} />
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Newsletter Section Error:</strong> No newsletter section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    default:
      console.log('Unknown section type:', section._type);
      return (
        <div key={section._key} className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-gray-800">
            <strong>Unknown Section Type:</strong> {section._type}
          </p>
          <p className="text-sm text-gray-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
  }
}

export const getPageQuery = (slug?: string): string => {
  const slugFilter = slug ? `&& slug.current == "${slug}"` : `&& slug.current == "homepage"`
  
  return `*[_type == "page" ${slugFilter}][0]{
    _id,
    title,
    slug,
    pageBuilder[] {
      _type,
      _key,
      title,
      content,
      
      _type == "heroSectionRef" => {
        ...,
        "data": *[_type == "heroSection" && _id == ^.heroSectionRef][0] {
          _id,
          _type,
          headline,
          subtext
        }
      },
      
      _type == "teamSectionRef" => {
        ...,
        "data": *[_type == "teamSection" && _id == ^.teamSectionRef][0] {
          _id,
          _type,
          label,
          title,
          highlightedText,
          description,
          icon,
          mainImage
        }
      },
      
      _type == "seoSectionRef" => {
        ...,
        "data": *[_type == "seoSection" && _id == ^.seoSectionRef][0] {
          _id,
          _type,
          metaDescription,
          metaKeywords,
          ogTitle,
          ogDescription,
          ogImage
        }
      },
      
      _type == "brandsSectionRef" => {
        ...,
        "data": *[_type == "brands" && _id == ^.brandsSectionRef][0] {
          _id,
          _type,
          label,
          logos[]{
            name,
            image,
            url
          }
        }
      },
      
      _type == "easyAccessSectionRef" => {
        ...,
        "data": *[_type == "easyAccess" && _id == ^.easyAccessSectionRef][0] {
          _id,
          _type,
          title,
          icon,
          features[]{
            title,
            description
          },
          bottomImage
        }
      },
      
      _type == "insightSectionRef" => {
        ...,
        "data": *[_type == "insightSection" && _id == ^.insightSectionRef][0] {
          _id,
          _type,
          badgeLabel,
          title,
          icon,
          description,
          image
        }
      },
      
      _type == "workspaceSectionRef" => {
        ...,
        "data": *[_type == "workspaceSection" && _id == ^.workspaceSectionRef][0] {
          _id,
          _type,
          badgeLabel,
          title,
          icon,
          description,
          image
        }
      },
      
      _type == "headingDescriptionRef" => {
        ...,
        "data": *[_type == "headingDescription" && _id == ^.headingDescriptionRef][0] {
          _id,
          _type,
          title,
          description
        }
      },
      
      _type == "newsletterSectionRef" => {
        ...,
        "data": *[_type == "newsletterSection" && _id == ^.newsletterSectionRef][0] {
          _id,
          _type,
          title,
          description,
          buttonText,
          buttonLink
        }
      }
    }
  }`
} 