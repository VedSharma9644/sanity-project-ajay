import {defineType} from 'sanity'

const siteHeader = defineType({
  name: 'siteHeader',
  title: 'Site Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      description: 'Main logo for the header',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      description: 'Repeatable list of navigation links',
      of: [
        {
          type: 'object',
          name: 'navLink',
          title: 'Navigation Link',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "Blog", "About"',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'e.g., "/blog", "/about"',
            },
          ],
          preview: {
            select: {
              title: 'label',
              url: 'url'
            },
            prepare({title, url}: any) {
              return {
                title: title || 'Navigation Link',
                subtitle: url || 'No URL'
              }
            }
          }
        }
      ],
      options: {
        layout: 'list'
      }
    },
    {
      name: 'mobileMenuIcon',
      title: 'Mobile Menu Icon',
      type: 'image',
      description: 'Hamburger icon for small screens',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'useCasesButtonLabel',
      title: 'Use Cases Button Label',
      type: 'string',
      description: 'e.g., "Use Cases" (optional dropdown)',
    },
  ],
  preview: {
    select: {
      title: 'logo'
    },
    prepare() {
      return {
        title: 'Site Header',
        subtitle: 'Header configuration'
      }
    }
  }
})

export default siteHeader
