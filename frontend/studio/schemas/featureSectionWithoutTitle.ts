import {defineType} from 'sanity'

const featureSectionWithoutTitle = defineType({
  name: 'featureSectionWithoutTitle',
  title: 'Feature Section - Without Title',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Primary heading for the feature',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Icon for the feature (optional)',
    },
    {
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main image for the feature',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the feature',
    },
    {
      name: 'content',
      title: 'Content Block',
      type: 'blockContent',
      description: 'Rich content for the feature section',
    },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
          {title: 'Top', value: 'top'},
          {title: 'Bottom', value: 'bottom'},
        ]
      },
      initialValue: 'left',
      description: 'Position of the image relative to content',
    },
    {
      name: 'isActive',
      title: 'Active Status',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to activate/deactivate this feature section',
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
      heading: 'heading',
      isActive: 'isActive'
    },
    prepare({heading, isActive}: any) {
      return {
        title: heading || 'Feature Section without Title',
        subtitle: `${isActive ? 'Active' : 'Inactive'} - No title section`
      }
    }
  }
})

export default featureSectionWithoutTitle 