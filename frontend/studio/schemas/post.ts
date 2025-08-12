import {defineType} from 'sanity'

const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featureImage',
      title: 'Feature Image',
      type: 'image',
      description: 'Feature image for the blog post',
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
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional caption for the image',
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Brief summary of the blog post',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      description: 'Author of the blog post',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      publishedAt: 'publishedAt'
    },
    prepare({title, slug, publishedAt}: any) {
      return {
        title: title || 'Untitled Post',
        subtitle: publishedAt ? `Published ${new Date(publishedAt).toLocaleDateString()}` : 'Draft'
      }
    }
  }
})

export default post
