import {defineType} from 'sanity'

const iframeSection = defineType({
  name: 'iframeSection',
  title: 'iFrame Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Title for this iFrame section (optional)',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of what this iFrame contains',
    },
    {
      name: 'iframeUrl',
      title: 'iFrame URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
      description: 'The URL to embed (e.g., Google Maps, Calendly, etc.)',
    },
    {
      name: 'iframeType',
      title: 'iFrame Type',
      type: 'string',
      options: {
        list: [
          {title: 'Google Maps', value: 'google-maps'},
          {title: 'Calendly', value: 'calendly'},
          {title: 'Contact Form', value: 'contact-form'},
          {title: 'Video', value: 'video'},
          {title: 'Social Media', value: 'social-media'},
          {title: 'Other', value: 'other'},
        ]
      },
      initialValue: 'other',
      description: 'Type of content being embedded',
    },
    {
      name: 'width',
      title: 'Width',
      type: 'string',
      options: {
        list: [
          {title: 'Full Width', value: 'full'},
          {title: 'Container Width', value: 'container'},
          {title: 'Custom', value: 'custom'},
        ]
      },
      initialValue: 'full',
      description: 'Width of the iFrame',
    },
    {
      name: 'customWidth',
      title: 'Custom Width',
      type: 'string',
      description: 'Custom width (e.g., "800px", "100%", "50vw")',
      hidden: ({parent}: any) => parent?.width !== 'custom',
    },
    {
      name: 'height',
      title: 'Height',
      type: 'string',
      options: {
        list: [
          {title: 'Auto', value: 'auto'},
          {title: '400px', value: '400px'},
          {title: '500px', value: '500px'},
          {title: '600px', value: '600px'},
          {title: 'Custom', value: 'custom'},
        ]
      },
      initialValue: '500px',
      description: 'Height of the iFrame',
    },
    {
      name: 'customHeight',
      title: 'Custom Height',
      type: 'string',
      description: 'Custom height (e.g., "300px", "50vh", "100%")',
      hidden: ({parent}: any) => parent?.height !== 'custom',
    },
    {
      name: 'allowFullscreen',
      title: 'Allow Fullscreen',
      type: 'boolean',
      initialValue: false,
      description: 'Allow the iFrame to go fullscreen',
    },
    {
      name: 'allowScrolling',
      title: 'Allow Scrolling',
      type: 'boolean',
      initialValue: true,
      description: 'Allow scrolling within the iFrame',
    },
    {
      name: 'border',
      title: 'Border',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Thin', value: 'thin'},
          {title: 'Medium', value: 'medium'},
          {title: 'Thick', value: 'thick'},
        ]
      },
      initialValue: 'none',
      description: 'Border style for the iFrame',
    },
    {
      name: 'borderRadius',
      title: 'Border Radius',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: '0px'},
          {title: 'Small', value: '4px'},
          {title: 'Medium', value: '8px'},
          {title: 'Large', value: '12px'},
          {title: 'Custom', value: 'custom'},
        ]
      },
      initialValue: '0px',
      description: 'Border radius for rounded corners',
    },
    {
      name: 'customBorderRadius',
      title: 'Custom Border Radius',
      type: 'string',
      description: 'Custom border radius (e.g., "10px", "50%")',
      hidden: ({parent}: any) => parent?.borderRadius !== 'custom',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Transparent', value: 'transparent'},
          {title: 'White', value: '#ffffff'},
          {title: 'Light Gray', value: '#f5f5f5'},
          {title: 'Dark Gray', value: '#333333'},
          {title: 'Custom', value: 'custom'},
        ]
      },
      initialValue: 'transparent',
      description: 'Background color for the iFrame container',
    },
    {
      name: 'customBackgroundColor',
      title: 'Custom Background Color',
      type: 'string',
      description: 'Custom background color (hex, rgb, or color name)',
      hidden: ({parent}: any) => parent?.backgroundColor !== 'custom',
    },
    {
      name: 'padding',
      title: 'Padding',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: '0px'},
          {title: 'Small', value: '10px'},
          {title: 'Medium', value: '20px'},
          {title: 'Large', value: '30px'},
          {title: 'Custom', value: 'custom'},
        ]
      },
      initialValue: '0px',
      description: 'Padding around the iFrame',
    },
    {
      name: 'customPadding',
      title: 'Custom Padding',
      type: 'string',
      description: 'Custom padding (e.g., "15px", "20px 30px")',
      hidden: ({parent}: any) => parent?.padding !== 'custom',
    },
    {
      name: 'textAlignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ]
      },
      initialValue: 'center',
      description: 'Alignment of title and description text',
    },
    {
      name: 'sideLine',
      title: 'Side Line',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show/hide side line decoration',
    },
    {
      name: 'isActive',
      title: 'Active Status',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to activate/deactivate this iFrame section',
    }
  ],
  preview: {
    select: {
      title: 'title',
      iframeType: 'iframeType',
      iframeUrl: 'iframeUrl',
      isActive: 'isActive'
    },
    prepare({title, iframeType, iframeUrl, isActive}: any) {
      return {
        title: title || 'iFrame Section',
        subtitle: `${iframeType ? iframeType.replace('-', ' ').toUpperCase() : 'Other'} - ${isActive ? 'Active' : 'Inactive'}`
      }
    }
  }
})

export default iframeSection 