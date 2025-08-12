import React from 'react'
import { PortableText } from '@portabletext/react'
import HeroSectionHigh from '@/components/HeroSectionHigh'
import HeroSectionMedium from '@/components/HeroSectionMedium'
// import TeamSection from '@/components/TeamSection'
import SeoSection from '@/components/SeoSection'
import BrandsSection from '@/components/BrandsSection'
import FeatureSection from '@/components/FeatureSection'
import SiteBlog from '@/components/SiteBlog'
import CTASection from '@/components/CTASection'
// import EasyAccessSection from '@/components/EasyAccessSection'
// import InsightSection from '@/components/InsightSection'
// import WorkspaceSection from '@/components/WorkspaceSection'
// import HeadingDescriptionSection from '@/components/HeadingDescriptionSection'
// import NewsletterSection from '@/components/NewsletterSection'

export const renderSection = (section: any, previousSectionHasSideLine?: boolean): React.ReactElement | null => {
  
  // Create data attribute for visual editing - simplified for Next.js 15 compatibility
  const dataAttribute = section._id ? { 
    'data-sanity': section._id,
    'data-sanity-type': section._type 
  } : {}
  
  switch (section._type) {
    case 'contentSection':
      return (
        <section key={section._key} className="mb-12" {...dataAttribute}>
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
    case 'heroSectionHighRef':
      return section.data ? (
        <div key={section._key} {...dataAttribute}>
          <HeroSectionHigh {...section.data} previousSectionHasSideLine={previousSectionHasSideLine} />
        </div>
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Hero Section High Error:</strong> No hero section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
          <p className="text-sm text-red-600 mt-2">Section keys: {Object.keys(section).join(', ')}</p>
        </div>
      )
    case 'heroSectionMediumRef':
      return section.data ? (
        <div key={section._key} {...dataAttribute}>
          <HeroSectionMedium {...section.data} previousSectionHasSideLine={previousSectionHasSideLine} />
        </div>
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Hero Section Medium Error:</strong> No hero section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
          <p className="text-sm text-red-600 mt-2">Section keys: {Object.keys(section).join(', ')}</p>
          <p className="text-sm text-red-600 mt-2">Debug ref: {JSON.stringify(section.debug_ref)}</p>
          <p className="text-sm text-red-600 mt-2">Debug all fields: {JSON.stringify(section.debug_all_fields)}</p>
        </div>
      )
    // case 'teamSectionRef':
    //   console.log('Team section data:', section.data);
    //   return section.data ? (
    //     <div key={section._key} {...dataAttribute}>
    //       <TeamSection {...section.data} />
    //     </div>
    //   ) : (
    //     <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
    //       <p className="text-red-800">
    //         <strong>Team Section Error:</strong> No team section data found
    //       </p>
    //       <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
    //     </div>
    //   )

    case 'brandsSectionRef':
      return section.data ? (
        <div key={section._key} {...dataAttribute}>
          <BrandsSection {...section.data} previousSectionHasSideLine={previousSectionHasSideLine} />
        </div>
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Brands Section Error:</strong> No brands section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    // case 'easyAccessSectionRef':
    //   console.log('Easy Access section data:', section.data);
    //   return section.data ? (
    //     <div key={section._key} {...dataAttribute}>
    //       <EasyAccessSection {...section.data} />
    //     </div>
    //   ) : (
    //     <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
    //       <div className="text-red-800">
    //         <strong>Easy Access Section Error:</strong> No easy access section data found
    //       </div>
    //       <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
    //     </div>
    //   )
    // case 'insightSectionRef':
    //   console.log('Insight section data:', section.data);
    //   return section.data ? (
    //     <div key={section._key} {...dataAttribute}>
    //       <InsightSection {...section.data} />
    //     </div>
    //   ) : (
    //     <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
    //       <p className="text-red-800">
    //         <strong>Insight Section Error:</strong> No insight section data found
    //       </p>
    //       <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
    //     </div>
    //   )
    // case 'workspaceSectionRef':
    //   console.log('Workspace section data:', section.data);
    //   return section.data ? (
    //     <div key={section._key} {...dataAttribute}>
    //       <WorkspaceSection {...section.data} />
    //     </div>
    //   ) : (
    //     <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
    //       <p className="text-red-800">
    //         <strong>Workspace Section Error:</strong> No workspace section data found
    //       </p>
    //       <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
    //     </div>
    //   )
    // case 'headingDescriptionRef':
    //   console.log('Heading Description section data:', section.data);
    //   return section.data ? (
    //     <div key={section._key} {...dataAttribute}>
    //       <HeadingDescriptionSection {...section.data} />
    //     </div>
    //   ) : (
    //     <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
    //       <p className="text-red-800">
    //         <strong>Heading Description Error:</strong> No heading description data found
    //       </p>
    //       <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
    //     </div>
    //   )
    // case 'newsletterSectionRef':
    //   console.log('Newsletter section data:', section.data);
    //   return section.data ? (
    //     <div key={section._key} {...dataAttribute}>
    //       <NewsletterSection {...section.data} />
    //     </div>
    //   ) : (
    //     <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
    //       <p className="text-red-800">
    //         <strong>Newsletter Section Error:</strong> No newsletter section data found
    //       </p>
    //       <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
    //     </div>
    //   )
    case 'seoSectionRef':
      return (
        <SeoSection
          key={section._key}
          {...section.data}
          isActive={section.data?.isActive}
          sideLine={section.data?.sideLine}
          previousSectionHasSideLine={previousSectionHasSideLine}
        />
      );
    case 'iframeSectionRef':
      return (
        <div key={section._key} {...dataAttribute}>
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">{section.data.title}</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Type:</strong> {section.data.iframeType}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>URL:</strong> {section.data.iframeUrl}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Height:</strong> {section.data.iframeHeight || 'Default'}
              </p>
            </div>
          </div>
        </div>
      )
    case 'featureSectionWithTitleRef':
      return section.data ? (
        <div key={section._key} {...dataAttribute}>
          <FeatureSection {...section.data} previousSectionHasSideLine={previousSectionHasSideLine} />
        </div>
      ) : (
        <div key={section._key} className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800">
            <strong>Feature Section Error:</strong> No feature section data found
          </p>
          <p className="text-sm text-red-600 mt-2">Debug: {JSON.stringify(section)}</p>
        </div>
      )
    case 'blogSectionRef':
      return (
        <div key={section._key} {...dataAttribute}>
          <SiteBlog {...section.data} />
        </div>
      )
    case 'ctaSectionRef':
      return (
        <div key={section._key} {...dataAttribute}>
          <CTASection {...section.data} previousSectionHasSideLine={previousSectionHasSideLine} />
        </div>
      )
    default:
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

export const renderSectionsWithSideLineContext = (sections: any[]): React.ReactElement[] => {
  
  return sections.map((section, index) => {
    // Check if the previous section has a sideline
    const previousSectionHasSideLine = index > 0 ? 
      (sections[index - 1].data?.sideLine === true || 
       sections[index - 1].data?.sideLineString === 'true') : 
      false;
    
    const renderedSection = renderSection(section, previousSectionHasSideLine);
    
    return renderedSection;
  }).filter(Boolean) as React.ReactElement[];
}

export const getPageQuery = (slug?: string): string => {
  const slugFilter = slug ? `&& slug.current == "${slug}"` : `&& slug.current == "homepage"`
  
  return `*[_type == "page" ${slugFilter}][0]{
    _id,
    title,
    slug,
    pageSettings{
      pageBackground,
      headingFontColor,
      titleFontColor,
      contentFontColor
    },
    seo{
      metaTitle,
      metaDescription,
      metaKeywords,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCardType,
      canonicalUrl,
      noIndex,
      noFollow
    },
    pageBuilder[] {
      _type,
      _key,
      title,
      content,
      
      // Handle different section types
      _type == "heroSectionRef" => {
        ...,
        "data": *[_type == "heroSection" && _id == ^._ref][0] {
          _id,
          _type,
          headline,
          subtext,
          sideLine
        }
      },
      
      _type == "heroSectionHighRef" => {
        ...,
        "data": *[_type == "heroSectionHigh" && _id == ^._ref][0] {
          _id,
          _type,
          title,
          heading,
          subheading,
          sideLine
        }
      },
      
      _type == "heroSectionMediumRef" => {
        ...,
        "data": *[_type == "heroSectionMedium" && _id == ^._ref][0] {
          _id,
          _type,
          title,
          heading,
          content,
          image,
          icon,
          sideLine
        }
      },
      
      _type == "teamSectionRef" => {
        ...,
        "data": *[_type == "teamSection" && _id == ^._ref][0] {
          _id,
          _type,
          label,
          title,
          description,
          icon,
          mainImage,
          sideLine
        }
      },
      
      _type == "brandsSectionRef" => {
        ...,
        "data": *[_type == "brands" && _id == ^._ref][0] {
          _id,
          _type,
          label,
          sideLine,
          imageResolution{
            width,
            height,
            unit,
            gap
          },
          logos[]{
            name,
            image,
            url
          }
        }
      },
      
      _type == "easyAccessSectionRef" => {
        ...,
        "data": *[_type == "easyAccess" && _id == ^._ref][0] {
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
        "data": *[_type == "insightSection" && _id == ^._ref][0] {
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
        "data": *[_type == "workspaceSection" && _id == ^._ref][0] {
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
        "data": *[_type == "headingDescription" && _id == ^._ref][0] {
          _id,
          _type,
          title,
          description
        }
      },
      
      _type == "newsletterSectionRef" => {
        ...,
        "data": *[_type == "newsletterSection" && _id == ^._ref][0] {
          _id,
          _type,
          title,
          description,
          buttonText,
          buttonLink
        }
      },
      
      _type == "seoSectionRef" => {
        ...,
        "data": *[_type == "seoSection" && _id == ^._ref][0] {
          _id,
          _type,
          title,
          content
        }
      },
      
      _type == "iframeSectionRef" => {
        ...,
        "data": *[_type == "iframeSection" && _id == ^._ref][0] {
          _id,
          _type,
          title,
          iframeType,
          iframeUrl,
          iframeHeight
        }
      },
      
      _type == "featureSectionWithTitleRef" => {
        ...,
        "data": *[_type == "featureSectionWithTitle" && _id == ^._ref][0] {
          _id,
          _type,
          icon,
          title,
          heading,
          content,
          columns[]{
            columnTitle,
            columnContent
          },
          isActive,
          sideLine,
          fontSettings{
            columnTitleFontColor,
            columnContentFontColor,
            columnLayout
          }
        }
      },
      
      _type == "blogSectionRef" => {
        ...,
        "data": *[_type == "siteBlog" && _id == ^._ref][0] {
          _id,
          _type,
          title,
          heading,
          content,
          blogSectionSettings{
            titleColor,
            headingColor,
            descriptionColor,
            showLoadMore,
            loadMoreText,
            loadMoreUrl
          },
          blogPostCardSettings{
            postTitleColor,
            postTitleHoverColor,
            postTitleFontSize,
            postTitleFontWeight
          },
          posts[]->{
            _id,
            title,
            slug,
            featureImage,
            excerpt,
            publishedAt,
            author->{
              name
            }
          }
        }
      },
      
      _type == "ctaSectionRef" => {
        ...,
        "data": *[_type == "ctaSection" && _id == ^._ref][0] {
          _id,
          _type,
          icon,
          text,
          subheading,
          button,
          textAlignment,
          isActive,
          sideLine,
          backgroundColor,
          ctaSettings{
            titleColor,
            headingColor,
            contentColor,
            customBackgroundColor
          }
        }
      }
    }
  }`
} 