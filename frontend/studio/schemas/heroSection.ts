import {defineType} from 'sanity'

const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
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
      title: 'headline',
      subtext: 'subtext'
    },
    prepare({title, subtext}: any) {
      return {
        title: title || 'Hero Section',
        subtitle: subtext ? `${subtext.substring(0, 50)}...` : 'No subtext'
      }
    }
  }
})

export default heroSection
