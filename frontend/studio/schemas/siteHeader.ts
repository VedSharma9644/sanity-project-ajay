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
      name: 'headerSettings',
      title: 'Header Settings',
      type: 'object',
      description: 'Styling and layout settings for the header',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'logoSize',
          title: 'Logo Size',
          type: 'number',
          description: 'Logo size in pixels',
          initialValue: 40,
          validation: (Rule) => Rule.min(20).max(200),
        },
        {
          name: 'menuFontSize',
          title: 'Menu Font Size',
          type: 'number',
          description: 'Font size for navigation menu items in pixels',
          initialValue: 16,
          validation: (Rule) => Rule.min(12).max(32),
        },
        {
          name: 'menuFontColor',
          title: 'Menu Font Color',
          type: 'string',
          description: 'Color for navigation menu items (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
          placeholder: '#171717 or rgba(23,23,23,1) or black',
        },
        {
          name: 'menuFontWeight',
          title: 'Menu Font Weight',
          type: 'string',
          options: {
            list: [
              { title: 'Light', value: 'light' },
              { title: 'Normal', value: 'normal' },
              { title: 'Medium', value: 'medium' },
              { title: 'Semibold', value: 'semibold' },
              { title: 'Bold', value: 'bold' },
            ],
          },
          initialValue: 'normal',
        },
        {
          name: 'backgroundColor',
          title: 'Header Background Color',
          type: 'string',
          description: 'Background color for the header (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
          placeholder: '#ffffff or rgba(255,255,255,1) or white',
        },
      ],
    },

    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      description: 'Call-to-action button in the header',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'name',
          title: 'Button Name',
          type: 'string',
          description: 'Text displayed on the button (e.g., "Get Started", "Contact Us")',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
          description: 'URL or path the button links to (e.g., "/contact", "https://example.com")',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'icon',
          title: 'Button Icon',
          type: 'string',
          description: 'Icon name or class (e.g., "arrow-right", "phone", "mail")',
        },
        {
          name: 'iconPosition',
          title: 'Icon Position',
          type: 'string',
          options: {
            list: [
              { title: 'Left', value: 'left' },
              { title: 'Right', value: 'right' },
            ],
          },
          initialValue: 'right',
          hidden: ({ parent }) => !parent?.icon,
        },
        {
          name: 'buttonStyle',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
              { title: 'Outline', value: 'outline' },
              { title: 'Ghost', value: 'ghost' },
            ],
          },
          initialValue: 'primary',
        },
        {
          name: 'buttonSize',
          title: 'Button Size',
          type: 'string',
          options: {
            list: [
              { title: 'Small', value: 'sm' },
              { title: 'Medium', value: 'md' },
              { title: 'Large', value: 'lg' },
            ],
          },
          initialValue: 'md',
        },
      ],
      preview: {
        select: {
          name: 'name',
          link: 'link',
          icon: 'icon',
        },
        prepare({ name, link, icon }: any) {
          return {
            title: name || 'CTA Button',
            subtitle: `${link || 'No link'}${icon ? ` • ${icon}` : ''}`,
          }
        }
      }
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
