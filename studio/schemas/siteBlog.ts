import {defineType} from 'sanity'

const siteBlog = defineType({
  name: 'siteBlog',
  title: 'Site Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog Section Title',
      type: 'string',
    },
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    },
  ],
})

export default siteBlog
