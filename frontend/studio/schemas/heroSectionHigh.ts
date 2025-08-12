import {defineType} from 'sanity'

const heroSectionHigh = defineType({
  name: 'heroSectionHigh',
  title: 'Hero Section - High Priority',
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
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Secondary text below the heading. Use $text$ to add gradient styling to specific words.',
    },
    {
      name: 'image',
      title: 'Dashboard Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Dashboard image to display on the right side of the hero section',
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
        title: title || 'High Priority Hero Section',
        subtitle: `${heading ? heading : 'No heading'} - ${sideLine ? 'With sideline' : 'No sideline'}`
      }
    }
  }
})

export default heroSectionHigh 