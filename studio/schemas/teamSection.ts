import {defineType} from 'sanity'

const teamSection = defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "Teams"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Build Successful Open Source Projects"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'e.g., "Open Source Projects"',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'e.g., "Access insights to validate and share the value of open source..."',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Small icon beside the label',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Large image on the right',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      label: 'label',
      media: 'mainImage'
    },
    prepare({title, label, media}: any) {
      return {
        title: title || 'Untitled Team Section',
        subtitle: label ? `Label: ${label}` : 'No label',
        media: media
      }
    }
  }
})

export default teamSection
