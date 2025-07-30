import {defineType} from 'sanity'

const insightSection = defineType({
  name: 'insightSection',
  title: 'Insight Section',
  type: 'document',
  fields: [
    {
      name: 'badgeLabel',
      title: 'Badge Label',
      type: 'string',
      description: 'e.g., "Insight Pages"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Deep Insights into your entire open source ecosystem" (Wrap "Deep Insights" in styled span using gradient)',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'e.g., "Gather information about internal and external GitHub repositories..."',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Screenshot or illustration',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      badgeLabel: 'badgeLabel'
    },
    prepare({title, badgeLabel}: any) {
      return {
        title: title || 'Insight Section',
        subtitle: badgeLabel ? `Badge: ${badgeLabel}` : 'No badge'
      }
    }
  }
})

export default insightSection 