import {defineType} from 'sanity'

const newsletterSection = defineType({
  name: 'newsletterSection',
  title: 'Newsletter Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "The fast track to open source" (Title Highlighted Part: "The fast track" has gradient color)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'e.g., "Stay up to date with the latest OpenSauced news and trends."',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'e.g., "Subscribe"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      description: 'e.g., https://opensourceready.substack.com/',
      validation: (Rule: any) => Rule.uri({
        scheme: ['http', 'https']
      }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      buttonText: 'buttonText'
    },
    prepare({title, buttonText}: any) {
      return {
        title: title || 'Newsletter Section',
        subtitle: buttonText ? `Button: ${buttonText}` : 'No button text'
      }
    }
  }
})

export default newsletterSection 