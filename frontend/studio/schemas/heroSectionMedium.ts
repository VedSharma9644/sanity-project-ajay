import {defineType} from 'sanity'

const heroSectionMedium = defineType({
  name: 'heroSectionMedium',
  title: 'Hero Section - Medium Priority',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Main title for the hero section. Use $text$ to add gradient styling to specific words.',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Primary heading for the hero section. Use $text$ to add gradient styling to specific words.',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
      description: 'Content text below the heading. Use $text$ to add gradient styling to specific words.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main image for the hero section',
    },
    {
      name: 'icon',
      title: 'Side Line Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Icon to display at the top of the side line (optional)',
    },
    {
      name: 'sideLine',
      title: 'Side Line',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show/hide side line decoration',
    }
  ],
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
})

export default heroSectionMedium 