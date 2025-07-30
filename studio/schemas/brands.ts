import {defineType} from 'sanity'

const brands = defineType({
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "TRUSTED BY" or "OUR PARTNERS"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'logo',
          title: 'Logo',
          fields: [
            {
              name: 'name',
              title: 'Company Name',
              type: 'string',
              description: 'e.g., Digital Ocean, AWS, Google Cloud',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Logo Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'url',
              title: 'Website URL',
              type: 'url',
              description: 'Link to their website',
              validation: (Rule: any) => Rule.uri({
                scheme: ['http', 'https']
              }),
            },
          ],
          preview: {
            select: {
              title: 'name',
              media: 'image',
              url: 'url'
            },
            prepare({title, media, url}: any) {
              return {
                title: title || 'Untitled Logo',
                subtitle: url ? `Website: ${url}` : 'No website link',
                media: media
              }
            }
          }
        }
      ],
      options: {
        layout: 'grid'
      }
    },
  ],
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
})

export default brands 