import {defineType} from 'sanity'

const featureSectionWithTitle = defineType({
  name: 'featureSectionWithTitle',
  title: 'Feature Section',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Icon for the feature section (optional)',
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the feature section (optional). Use $text$ to add gradient styling to specific words.',
    },
    {
      name: 'heading',
      title: 'Feature Section Heading',
      type: 'string',
      description: 'Primary heading for the feature section (optional). Use $text$ to add gradient styling to specific words.',
    },
    {
      name: 'content',
      title: 'Feature Section Content',
      type: 'text',
      description: 'Additional content for the feature section (optional)',
    },
    {
      name: 'columns',
      title: 'Feature Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'featureColumn',
          title: 'Feature Column',
          fields: [
            {
              name: 'columnTitle',
              title: 'Column Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
              description: 'Title for this feature column. Use $text$ to add gradient styling to specific words.',
            },
            {
              name: 'columnContent',
              title: 'Column Content',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
              description: 'Content for this feature column',
            },
          ],
          preview: {
            select: {
              title: 'columnTitle',
              content: 'columnContent'
            },
            prepare({title, content}: any) {
              return {
                title: title || 'Untitled Column',
                subtitle: content ? `${content.substring(0, 50)}${content.length > 50 ? '...' : ''}` : 'No content'
              }
            }
          }
        }
      ],
      description: 'Add feature columns. Each column will have a title and content. (optional)',
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
    },
    {
      name: 'fontSettings',
      title: 'Feature Columns Settings',
      type: 'object',
      fields: [
                 {
           name: 'columnTitleFontColor',
           title: 'Column Title Font Color',
           type: 'string',
           description: 'Color for column titles (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
           placeholder: '#ffffff or rgba(255,255,255,1) or white'
         },
                 {
           name: 'columnContentFontColor',
           title: 'Column Content Font Color',
           type: 'string',
           description: 'Color for column content text (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white)',
           placeholder: '#ffffff or rgba(255,255,255,1) or white'
         },
                 {
           name: 'columnLayout',
           title: 'Column Layout',
           type: 'string',
           options: {
             list: [
               {title: 'Row (Side by Side)', value: 'row'},
               {title: 'Column (Stacked)', value: 'column'}
             ]
           },
           initialValue: 'row',
           description: 'Choose how feature columns are displayed - side by side (row) or stacked vertically (column)'
         }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      heading: 'heading',
      columns: 'columns',
      isActive: 'isActive'
    },
    prepare({title, heading, columns, isActive}: any) {
      const columnCount = columns ? columns.length : 0
      return {
        title: title || 'Feature Section',
        subtitle: `${heading ? heading : 'No heading'} - ${columnCount} columns - ${isActive ? 'Active' : 'Inactive'}`
      }
    }
  }
})

export default featureSectionWithTitle 