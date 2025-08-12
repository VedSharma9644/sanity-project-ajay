import {defineType} from 'sanity'

const siteBlog = defineType({
  name: 'siteBlog',
  title: 'Blog Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Title for the blog section (e.g., "Latest Posts", "Our Blog")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'Main heading text (e.g., "OpenSauced Blog")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Description',
      type: 'text',
      description: 'Brief description or introduction text for the blog section',
    },
    {
      name: 'blogSectionSettings',
      title: 'Blog Section Settings',
      type: 'object',
      description: 'Customize the appearance of the blog section header',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'titleColor',
          title: 'Section Title Color',
          type: 'string',
          description: 'Color for the section title (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
          placeholder: '#ffffff or rgba(255,255,255,1) or white'
        },
        {
          name: 'headingColor',
          title: 'Main Heading Color',
          type: 'string',
          description: 'Color for the main heading (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
          placeholder: '#ffffff or rgba(255,255,255,1) or white'
        },
        {
          name: 'descriptionColor',
          title: 'Description Color',
          type: 'string',
          description: 'Color for the description text (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
          placeholder: '#ffffff or rgba(255,255,255,1) or white'
        },
        {
          name: 'showLoadMore',
          title: 'Show Load More Button',
          type: 'boolean',
          initialValue: true,
          description: 'Toggle to show/hide the load more button'
        },
        {
          name: 'loadMoreText',
          title: 'Load More Button Text',
          type: 'string',
          initialValue: 'View All Posts',
          description: 'Text to display on the load more button',
          hidden: ({ parent }) => !parent?.showLoadMore
        },
        {
          name: 'loadMoreUrl',
          title: 'View All Button URL',
          type: 'string',
          description: 'URL where the view all button should redirect users. Use relative paths like /blog or full URLs like https://example.com/blog',
          placeholder: '/blog or https://example.com/blog',
          hidden: ({ parent }) => !parent?.showLoadMore,
          validation: (Rule: any) => Rule.custom((value: string) => {
            if (!value) return true; // Allow empty
            // Allow relative paths starting with / or full URLs
            const urlRegex = /^(\/|https?:\/\/|mailto:|tel:)/;
            return urlRegex.test(value) || 'Please enter a valid URL (e.g., /blog or https://example.com/blog)';
          })
        },
      ]
    },
    {
      name: 'posts',
      title: 'Blog Posts',
      type: 'array',
      description: 'Select which blog posts to display in this section',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
          options: {
            disableNew: true
          }
        }
      ],
      validation: (Rule: any) => Rule.optional(),
    },
    {
      name: 'blogPostCardSettings',
      title: 'Blog Post Card Settings',
      type: 'object',
      description: 'Customize the appearance of individual blog post cards',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'postTitleColor',
          title: 'Post Title Color',
          type: 'string',
          description: 'Color for individual blog post titles (hex: #171717, rgba: rgba(23,23,23,1), rgb: rgb(23,23,23), or named color: black)',
          placeholder: '#171717 or rgba(23,23,23,1) or black'
        },
        {
          name: 'postTitleHoverColor',
          title: 'Post Title Hover Color',
          type: 'string',
          description: 'Color for post titles on hover (hex: #F87216, rgba: rgba(248,114,22,1), rgb: rgb(248,114,22), or named color: orange)',
          placeholder: '#F87216 or rgba(248,114,22,1) or orange'
        },
        {
          name: 'postTitleFontSize',
          title: 'Post Title Font Size',
          type: 'string',
          options: {
            list: [
              { title: 'Small', value: 'text-lg' },
              { title: 'Medium', value: 'text-xl' },
              { title: 'Large', value: 'text-2xl' }
            ]
          },
          initialValue: 'text-xl',
          description: 'Font size for blog post titles'
        },
        {
          name: 'postTitleFontWeight',
          title: 'Post Title Font Weight',
          type: 'string',
          options: {
            list: [
              { title: 'Normal', value: 'font-normal' },
              { title: 'Medium', value: 'font-medium' },
              { title: 'Semibold', value: 'font-semibold' },
              { title: 'Bold', value: 'font-bold' }
            ]
          },
          initialValue: 'font-semibold',
          description: 'Font weight for blog post titles'
        }
      ]
    },
    {
      name: 'featuredPost',
      title: 'Featured Blog Post',
      type: 'reference',
      description: 'Select the blog post to display as the featured post at the top of the blog page',
      to: [{ type: 'post' }],
      options: {
        disableNew: true
      },
      validation: (Rule: any) => Rule.optional(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      heading: 'heading'
    },
    prepare({ title, heading }: any) {
      return {
        title: title || 'Blog Section',
        subtitle: heading || 'No heading'
      }
    }
  }
})

export default siteBlog
