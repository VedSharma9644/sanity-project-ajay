import {defineType} from 'sanity'

const easyAccess = defineType({
  name: 'easyAccess',
  title: 'Easy Access',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Easy access to all your open source data" (Use span/mark for gradient styling)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'e.g., /icons/find_icon.svg',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              description: 'e.g., "Streamlined Access"',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              description: 'e.g., "We distill your raw GitHub events data..."',
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description'
            },
            prepare({title, description}: any) {
              return {
                title: title || 'Untitled Feature',
                subtitle: description ? `${description.substring(0, 50)}...` : 'No description'
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
      name: 'bottomImage',
      title: 'Bottom Image',
      type: 'image',
      description: 'Screenshot or illustration at the bottom',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'sideLine',
      title: 'Side Line',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show/hide side line decoration',
    },
  ],
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
})

export default easyAccess 