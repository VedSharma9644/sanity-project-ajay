import {defineType} from 'sanity'

const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for accessibility',
        },
      ],
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'Brief biography of the author',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Contact email (optional)',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'Author website (optional)',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      bio: 'bio'
    },
    prepare({title, media, bio}: any) {
      return {
        title: title || 'Untitled Author',
        subtitle: bio ? bio.substring(0, 50) + '...' : 'No bio available',
        media: media
      }
    }
  }
})

export default author
