import {defineType} from 'sanity'

const siteFooter = defineType({
  name: 'siteFooter',
  title: 'Site Footer',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Brand logo (e.g., /brandLogo.svg)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          title: 'Social Link',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              description: 'e.g., X (Twitter), GitHub, Instagram, YouTube, Dev.to',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Social media profile URL',
            },
          ],
          preview: {
            select: {
              title: 'platform',
              url: 'url'
            },
            prepare({title, url}: any) {
              return {
                title: title || 'Social Link',
                subtitle: url || 'No URL'
              }
            }
          }
        }
      ],
      options: {
        layout: 'list'
      }
    },
    {
      name: 'menuLinks',
      title: 'Menu Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuLink',
          title: 'Menu Link',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g., About, Blog, Changelog, CLI',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'e.g., /about, /blog, /changelog, /cli',
            },
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url'
            },
            prepare({title, url}: any) {
              return {
                title: title || 'Menu Link',
                subtitle: url || 'No URL'
              }
            }
          }
        }
      ],
      options: {
        layout: 'list'
      }
    },
    {
      name: 'moreSauce',
      title: 'More Sauce',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'sauceLink',
          title: 'Sauce Link',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g., opensauced.pizza/docs, news.opensauced.pizza, opensauced.pizza/learn',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Full URL to the sauce link',
            },
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url'
            },
            prepare({title, url}: any) {
              return {
                title: title || 'Sauce Link',
                subtitle: url || 'No URL'
              }
            }
          }
        }
      ],
      options: {
        layout: 'list'
      }
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          description: 'e.g., hello@opensauced.pizza',
        },
      ],
    },
    {
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'legalLink',
          title: 'Legal Link',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., Privacy, Terms',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Legal document URL',
            },
          ],
          preview: {
            select: {
              title: 'label',
              url: 'url'
            },
            prepare({title, url}: any) {
              return {
                title: title || 'Legal Link',
                subtitle: url || 'No URL'
              }
            }
          }
        }
      ],
      options: {
        layout: 'list'
      }
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      description: 'e.g., © 2025 Open Sauced, INC. All rights reserved.',
    },
  ],
  preview: {
    select: {
      title: 'copyright'
    },
    prepare({title}: any) {
      return {
        title: 'Site Footer',
        subtitle: title || 'No copyright text'
      }
    }
  }
})

export default siteFooter
