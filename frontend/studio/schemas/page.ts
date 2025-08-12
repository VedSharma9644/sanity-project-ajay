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
        // ... (all your reference sections, unchanged)
        {
          type: 'reference',
          name: 'heroSectionHighRef',
          title: 'Hero Section - High Priority',
          to: [{type: 'heroSectionHigh'}],
          preview: {
            select: {
              title: 'title',
              heading: 'heading',
              sideLine: 'sideLine'
            },
            prepare({title, heading, sideLine}: any) {
              return {
                title: title || 'High Priority Hero Section',
                subtitle: `${heading ? heading : 'No heading'} - ${sideLine ? 'With sideline' : 'No sideline'}`
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'heroSectionMediumRef',
          title: 'Hero Section - Medium Priority',
          to: [{type: 'heroSectionMedium'}],
          preview: {
            select: {
              title: 'title',
              heading: 'heading',
              sideLine: 'sideLine'
            },
            prepare({title, heading, sideLine}: any) {
              return {
                title: title || 'Medium Priority Hero Section',
                subtitle: `${heading ? heading : 'No heading'} - ${sideLine ? 'With sideline' : 'No sideline'}`
              }
            }
          }
        },
        // {
        //   type: 'reference',
        //   name: 'teamSectionRef',
        //   title: 'Team Section',
        //   to: [{type: 'teamSection'}],
        //   preview: {
        //     select: {
        //       title: 'title',
        //       label: 'label'
        //     },
        //     prepare(selection: any) {
        //       const {title, label} = selection
        //       return {
        //         title: title || 'Team Section',
        //         subtitle: label ? `Label: ${label}` : 'No label'
        //       }
        //     }
        //   }
        //         },
        {
          type: 'reference',
          name: 'featureSectionWithTitleRef',
          title: 'Feature Section - With Title',
          to: [{type: 'featureSectionWithTitle'}],
          preview: {
            select: {
              title: 'title',
              heading: 'heading',
              isActive: 'isActive'
            },
            prepare({title, heading, isActive}: any) {
              return {
                title: title || 'Feature Section - With Title',
                subtitle: `${heading ? heading : 'No heading'} - ${isActive ? 'Active' : 'Inactive'}`
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
              title: 'label'
            },
            prepare({title}: any) {
              return {
                title: title || 'Brands Section',
                subtitle: 'Brand logos and links'
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'blogSectionRef',
          title: 'Blog Section',
          to: [{type: 'siteBlog'}],
          preview: {
            select: {
              title: 'title',
              heading: 'heading',
              numberOfBlogs: 'numberOfBlogs'
            },
            prepare({title, heading, numberOfBlogs}: any) {
              return {
                title: title || 'Blog Section',
                subtitle: `${heading || 'No heading'} - ${numberOfBlogs || 4} posts`
              }
            }
          }
        },
        {
          type: 'reference',
          name: 'ctaSectionRef',
          title: 'CTA Section',
          to: [{type: 'ctaSection'}],
          preview: {
            select: {
              text: 'text',
              buttonText: 'button.text',
              isActive: 'isActive'
            },
            prepare({text, buttonText, isActive}: any) {
              return {
                title: text || 'CTA Section',
                subtitle: `${buttonText ? `Button: ${buttonText}` : 'No button'} - ${isActive ? 'Active' : 'Inactive'}`
              }
            }
          }
        },
        // {
        //   type: 'reference',
        //   name: 'easyAccessSectionRef',
        //   title: 'Easy Access Section',
        //   to: [{type: 'easyAccess'}],
        //   preview: {
        //     select: {
        //       title: 'title'
        //     },
        //     prepare({title}: any) {
        //       return {
        //         title: title || 'Easy Access Section',
        //         subtitle: 'Features with icons'
        //       }
        //     }
        //   }
        // },
        // {
        //   type: 'reference',
        //   name: 'insightSectionRef',
        //   title: 'Insight Section',
        //   to: [{type: 'insightSection'}],
        //   preview: {
        //     select: {
        //       title: 'title',
        //       badgeLabel: 'badgeLabel'
        //     },
        //     prepare({title, badgeLabel}: any) {
        //       return {
        //         title: title || 'Insight Section',
        //         subtitle: badgeLabel ? `Badge: ${badgeLabel}` : 'No badge'
        //       }
        //     }
        //   }
        // },
        // {
        //   type: 'reference',
        //   name: 'workspaceSectionRef',
        //   title: 'Workspace Section',
        //   to: [{type: 'workspaceSection'}],
        //   preview: {
        //     select: {
        //       title: 'title',
        //       badgeLabel: 'badgeLabel'
        //     },
        //     prepare({title, badgeLabel}: any) {
        //       return {
        //         title: title || 'Workspace Section',
        //         subtitle: badgeLabel ? `Badge: ${badgeLabel}` : 'No badge'
        //       }
        //     }
        //   }
        // },
        // {
        //   type: 'reference',
        //   name: 'headingDescriptionRef',
        //   title: 'Heading Description Section',
        //   to: [{type: 'headingDescription'}],
        //   preview: {
        //     select: {
        //       title: 'title'
        //     },
        //     prepare({title}: any) {
        //       return {
        //         title: title || 'Heading Description Section',
        //         subtitle: 'Title and description'
        //       }
        //     }
        //   }
        // },
        // {
        //   type: 'reference',
        //   name: 'newsletterSectionRef',
        //   title: 'Newsletter Section',
        //   to: [{type: 'newsletterSection'}],
        //   preview: {
        //     select: {
        //       title: 'title'
        //     },
        //     prepare({title}: any) {
        //       return {
        //         title: title || 'Newsletter Section',
        //         subtitle: 'Email signup form'
        //       }
        //     }
        //   }
        // },

        {
          type: 'reference',
          name: 'iframeSectionRef',
          title: 'iFrame Section',
          to: [{type: 'iframeSection'}],
          preview: {
            select: {
              title: 'title',
              iframeType: 'iframeType',
              iframeUrl: 'iframeUrl'
            },
            prepare({title, iframeType, iframeUrl}: any) {
              return {
                title: title || 'iFrame Section',
                subtitle: `${iframeType ? iframeType.replace('-', ' ').toUpperCase() : 'Other'} - ${iframeUrl ? 'URL provided' : 'No URL'}`
              }
            }
          }
        }
      ],
      options: {
        layout: 'list',
        insertMenu: {
          views: [
            {
              name: 'grid',
              previewImageUrl: (schemaType: string) => `/block-previews/${schemaType}.jpg`
            }
          ]
        }
      }
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Page title for search engines (50-60 characters recommended)',
          validation: (Rule: any) => Rule.max(60).warning('Title should be under 60 characters')
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Brief summary for search engines (150-160 characters)',
          validation: (Rule: any) => Rule.max(160).warning('Description should be under 160 characters')
        },
        {
          name: 'metaKeywords',
          title: 'Meta Keywords',
          type: 'text',
          description: 'Comma-separated keywords (less important today)'
        },
        {
          name: 'ogTitle',
          title: 'Open Graph Title',
          type: 'string',
          description: 'Title when shared on social platforms (optional - will use meta title if empty)',
          validation: (Rule: any) => Rule.max(60)
        },
        {
          name: 'ogDescription',
          title: 'Open Graph Description',
          type: 'text',
          description: 'Description for social sharing (optional - will use meta description if empty)',
          validation: (Rule: any) => Rule.max(160)
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image preview for social sharing (1200x630px recommended)',
          options: {
            hotspot: true,
          }
        },
        {
          name: 'twitterCardType',
          title: 'Twitter Card Type',
          type: 'string',
          options: {
            list: [
              { title: 'Summary', value: 'summary' },
              { title: 'Summary Large Image', value: 'summary_large_image' },
            ],
          },
          initialValue: 'summary_large_image'
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Canonical URL for this page (optional)'
        },
        {
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          description: 'Prevent search engines from indexing this page',
          initialValue: false
        },
        {
          name: 'noFollow',
          title: 'No Follow',
          type: 'boolean',
          description: 'Prevent search engines from following links on this page',
          initialValue: false
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'pageSettings',
      title: 'Page Settings',
      type: 'object',
      fields: [
        {
          name: 'pageBackground',
          title: 'Page Background',
          type: 'string',
          description: 'Enter a color value (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
          placeholder: '#ffffff or rgba(255,255,255,1) or white',
          validation: (Rule: any) => Rule.custom((value: string) => {
            if (!value) return true; // Allow empty
            const colorRegex = /^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|rgba?\([^)]+\)|transparent|inherit|initial|unset|white|black|gray|red|green|blue|yellow|orange|purple|pink|brown|cyan|magenta|lime|navy|teal|olive|maroon|silver|gold|indigo|violet|fuchsia|aqua|azure|beige|bisque|blanchedalmond|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|greenyellow|honeydew|hotpink|indianred|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|wheat|whitesmoke|yellowgreen)$/;
            return colorRegex.test(value) ? true : 'Please enter a valid color value (hex, rgba, rgb, or named color)';
          })
        },
        {
          name: 'headingFontColor',
          title: 'Heading Font Color',
          type: 'string',
          description: 'Color for main headings (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
          placeholder: '#ffffff or rgba(255,255,255,1) or white'
        },
        {
          name: 'titleFontColor',
          title: 'Title Font Color',
          type: 'string',
          description: 'Color for section titles (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
          placeholder: '#ffffff or rgba(255,255,255,1) or white'
        },
        {
          name: 'contentFontColor',
          title: 'Content Font Color',
          type: 'string',
          description: 'Color for content text (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
          placeholder: '#ffffff or rgba(255,255,255,1) or white'
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    }
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
