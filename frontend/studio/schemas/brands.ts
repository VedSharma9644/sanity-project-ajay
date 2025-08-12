import {defineType} from 'sanity'

const brands = defineType({
  name: 'brands',
  title: 'Image Scroller',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "TRUSTED BY", "OUR PARTNERS", or any section title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logos',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'logo',
          title: 'Image Item',
          fields: [
            {
              name: 'name',
              title: 'Image Name',
              type: 'string',
              description: 'e.g., Company name, project name, or any identifier',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
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
              description: 'Link to website (optional)',
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
                title: title || 'Untitled Image',
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
    {
      name: 'sideLine',
      title: 'Side Line',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show/hide side line decoration',
    },
    {
      name: 'imageResolution',
      title: 'Image Settings',
      type: 'object',
      fields: [
        {
          name: 'width',
          title: 'Width',
          type: 'number',
          description: 'Width of all images in the scroller',
          validation: (Rule: any) => Rule.required().min(1),
        },
        {
          name: 'height',
          title: 'Height',
          type: 'number',
          description: 'Height of all images in the scroller',
          validation: (Rule: any) => Rule.required().min(1),
        },
        {
          name: 'unit',
          title: 'Unit',
          type: 'string',
          options: {
            list: [
              {title: 'Pixels (px)', value: 'px'},
              {title: 'Percentage (%)', value: '%'}
            ]
          },
          initialValue: 'px',
          description: 'Unit for width and height values',
        },
        {
          name: 'gap',
          title: 'Gap',
          type: 'number',
          description: 'Gap between images (in pixels)',
          initialValue: 32,
          validation: (Rule: any) => Rule.min(0).max(100),
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
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
        title: title || 'Image Scroller',
        subtitle: `${logoCount} image${logoCount !== 1 ? 's' : ''}`
      }
    }
  }
})

export default brands 