import {defineType} from 'sanity'

const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'blockContent',
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare({title}: any) {
              return {
                title: title || 'Content Section',
                subtitle: 'Rich text content',
                
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'heroSectionRef',
          title: 'Hero Section',
          to: [{type: 'heroSection'}],
          preview: {
            select: {
              title: 'headline',
              subtext: 'subtext',
              imageUrl: '/placeholder.png'
            },
            prepare({title, subtext}: any) {
              return {
                title: title || 'Hero Section',
                subtitle: subtext ? `${subtext.substring(0, 50)}...` : 'No subtext'
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'teamSectionRef',
          title: 'Team Section',
          to: [{type: 'teamSection'}],
          preview: {
            select: {
              title: 'title',
              label: 'label'
            },
            prepare(selection: any) {
              const {title, label} = selection
              return {
                title: title || 'Team Section',
                subtitle: label ? `Label: ${label}` : 'No label'
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'seoSectionRef',
          title: 'SEO Section',
          to: [{type: 'seoSection'}],
          preview: {
            select: {
              title: 'ogTitle',
              description: 'metaDescription'
            },
            prepare({title, description}: any) {
              return {
                title: title || 'SEO Section',
                subtitle: description ? `${description.substring(0, 50)}...` : 'No description'
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'brandsSectionRef',
          title: 'Brands Section',
          to: [{type: 'brands'}],
          preview: {
            select: {
              title: 'label',
              logos: 'logos'
            },
            prepare({title, logos}: any) {
              const logoCount = logos ? logos.length : 0
              return {
                title: title || 'Brands Section',
                subtitle: `${logoCount} logo${logoCount !== 1 ? 's' : ''}`
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'easyAccessSectionRef',
          title: 'Easy Access Section',
          to: [{type: 'easyAccess'}],
          preview: {
            select: {
              title: 'title',
              features: 'features'
            },
            prepare({title, features}: any) {
              const featureCount = features ? features.length : 0
              return {
                title: title || 'Easy Access Section',
                subtitle: `${featureCount} feature${featureCount !== 1 ? 's' : ''}`
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'insightSectionRef',
          title: 'Insight Section',
          to: [{type: 'insightSection'}],
          preview: {
            select: {
              title: 'title',
              badgeLabel: 'badgeLabel'
            },
            prepare({title, badgeLabel}: any) {
              return {
                title: title || 'Insight Section',
                subtitle: badgeLabel ? `Badge: ${badgeLabel}` : 'No badge'
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'workspaceSectionRef',
          title: 'Workspace Section',
          to: [{type: 'workspaceSection'}],
          preview: {
            select: {
              title: 'title',
              badgeLabel: 'badgeLabel'
            },
            prepare({title, badgeLabel}: any) {
              return {
                title: title || 'Workspace Section',
                subtitle: badgeLabel ? `Badge: ${badgeLabel}` : 'No badge'
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'headingDescriptionRef',
          title: 'Heading & Description',
          to: [{type: 'headingDescription'}],
          preview: {
            select: {
              title: 'title',
              description: 'description'
            },
            prepare({title, description}: any) {
              return {
                title: title || 'Heading & Description',
                subtitle: description ? `${description.substring(0, 30)}...` : 'No description'
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'newsletterSectionRef',
          title: 'Newsletter Section',
          to: [{type: 'newsletterSection'}],
          preview: {
            select: {
              title: 'title',
              buttonText: 'buttonText'
            },
            prepare({title, buttonText}: any) {
              return {
                title: title || 'Newsletter Section',
                subtitle: buttonText ? `Button: ${buttonText}` : 'No button text'
              }
            }
          }
        }
      ],
      options: {
        layout: 'list'
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current'
    },
    prepare({title, slug}: any) {
      return {
        title: title || 'Untitled Page',
        subtitle: slug ? `/${slug}` : 'No slug'
      }
    }
  }
})

export default page
