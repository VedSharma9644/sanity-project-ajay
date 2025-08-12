import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    // General Site Info
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of your website (e.g., "Ajay Corp | Official Website")',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Default meta description for your website (150-160 characters recommended)',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'siteURL',
      title: 'Site URL',
      type: 'url',
      description: 'Your website\'s main URL (e.g., https://ajaycorp.com)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'defaultLanguage',
      title: 'Default Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Hindi', value: 'hi' },
          { title: 'Spanish', value: 'es' },
          { title: 'French', value: 'fr' },
          { title: 'German', value: 'de' },
          { title: 'Chinese', value: 'zh' },
          { title: 'Japanese', value: 'ja' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Your website favicon (32x32px recommended)',
      options: {
        hotspot: true,
      },
    }),

    // Default SEO Meta Fields
    defineField({
      name: 'metaTitleTemplate',
      title: 'Meta Title Template',
      type: 'string',
      description: 'Template for page titles (e.g., "%s | Ajay Corp") - %s will be replaced with page title',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'defaultMetaTitle',
      title: 'Default Meta Title',
      type: 'string',
      description: 'Default title for pages without specific SEO title',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'defaultMetaDescription',
      title: 'Default Meta Description',
      type: 'text',
      description: 'Default meta description for pages without specific SEO description',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'defaultMetaKeywords',
      title: 'Default Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Default keywords for your website (optional)',
    }),
    defineField({
      name: 'metaImage',
      title: 'Default Meta Image',
      type: 'image',
      description: 'Default Open Graph and Twitter image (1200x630px recommended)',
      options: {
        hotspot: true,
      },
    }),

    // Social Sharing Defaults
    defineField({
      name: 'ogType',
      title: 'Open Graph Type',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'Article', value: 'article' },
          { title: 'Product', value: 'product' },
          { title: 'Organization', value: 'organization' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ogTitle',
      title: 'Default Open Graph Title',
      type: 'string',
      description: 'Default title for social media sharing (optional - will use meta title if empty)',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'ogDescription',
      title: 'Default Open Graph Description',
      type: 'text',
      description: 'Default description for social media sharing (optional - will use meta description if empty)',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Open Graph Image',
      type: 'image',
      description: 'Default image for social media sharing (1200x630px recommended)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'twitterCardType',
      title: 'Twitter Card Type',
      type: 'string',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary Large Image', value: 'summary_large_image' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      description: 'Your Twitter handle (e.g., @ajaycorp)',
    }),

    // Structured Data / Schema.org
    defineField({
      name: 'organizationName',
      title: 'Organization Name',
      type: 'string',
      description: 'Your organization name for structured data',
    }),
    defineField({
      name: 'logo',
      title: 'Organization Logo',
      type: 'image',
      description: 'Your organization logo for structured data',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      subtitle: 'siteURL',
    },
  },
}) 