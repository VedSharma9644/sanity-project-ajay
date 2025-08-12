import {defineType} from 'sanity'

const workspaceSection = defineType({
  name: 'workspaceSection',
  title: 'Workspace Section',
  type: 'document',
  fields: [
    {
      name: 'badgeLabel',
      title: 'Badge Label',
      type: 'string',
      description: 'e.g., "Workspaces"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Share key information and collaborate with your team" (Wrap "Share key information" in styled span using gradient)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'e.g., /icons/find_icon.svg',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'e.g., "Workspaces serve as a centralized hub for sharing, collaborating on, and monitoring open source projects and their contributors. Manage your open source information⎯whether for individual productivity, team collaboration, or company-wide operations."',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Screenshot, illustration, or GIF',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
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
      title: 'title',
      badgeLabel: 'badgeLabel'
    },
    prepare({title, badgeLabel}: any) {
      return {
        title: title || 'Workspace Section',
        subtitle: badgeLabel ? `Badge: ${badgeLabel}` : 'No badge'
      }
    }
  }
})

export default workspaceSection 