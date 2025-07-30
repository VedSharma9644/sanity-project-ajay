import {defineType} from 'sanity'

const headingDescription = defineType({
  name: 'headingDescription',
  title: 'Heading & Description',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Supercharge your open source knowledge" (Apply gradient to "Supercharge" using frontend styling)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Leave blank for now or add later if text is added under the heading',
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    },
    prepare({title, description}: any) {
      return {
        title: title || 'Heading & Description',
        subtitle: description ? `${description.substring(0, 50)}...` : 'No description'
      }
    }
  }
})

export default headingDescription 