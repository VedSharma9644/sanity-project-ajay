import {defineType} from 'sanity'

const seoSection = defineType({
  name: 'seoSection',
  title: 'SEO Section',
  type: 'document',
  fields: [
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
      description: 'Title when shared on social platforms'
    },
    {
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      description: 'Description for social sharing'
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image preview for social sharing'
    }
  ],
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
})

export default seoSection 