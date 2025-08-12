import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettingsNew',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Google Analytics/Tag Manager
    defineField({
      name: 'googleTagId',
      title: 'Google Tag ID',
      type: 'string',
      description: 'Your Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX) or Google Tag Manager Container ID (e.g., GTM-XXXXXXX)',
      validation: (Rule) => Rule.max(20),
    }),
    defineField({
      name: 'googleTagEnabled',
      title: 'Enable Google Analytics',
      type: 'boolean',
      description: 'Enable or disable Google Analytics tracking',
      initialValue: false,
    }),

    // Language Settings
    defineField({
      name: 'defaultLanguage',
      title: 'Default Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Hindi', value: 'hi' },
          { title: 'Spanish', value: 'es' },
          { title: 'French', value: 'fr' },
          { title: 'German', value: 'de' },
          { title: 'Chinese', value: 'zh' },
          { title: 'Japanese', value: 'ja' },
          { title: 'Arabic', value: 'ar' },
          { title: 'Portuguese', value: 'pt' },
          { title: 'Russian', value: 'ru' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'supportedLanguages',
      title: 'Supported Languages',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Hindi', value: 'hi' },
          { title: 'Spanish', value: 'es' },
          { title: 'French', value: 'fr' },
          { title: 'German', value: 'de' },
          { title: 'Chinese', value: 'zh' },
          { title: 'Japanese', value: 'ja' },
          { title: 'Arabic', value: 'ar' },
          { title: 'Portuguese', value: 'pt' },
          { title: 'Russian', value: 'ru' },
        ],
      },
      description: 'Select all languages your site supports',
      validation: (Rule) => Rule.required().min(1),
    }),

    // Site Theme - Gradient Colors
    defineField({
      name: 'siteTheme',
      title: 'Site Theme',
      type: 'object',
      fields: [
        defineField({
          name: 'primaryGradient',
          title: 'Primary Gradient',
          type: 'object',
          fields: [
            defineField({
              name: 'from',
              title: 'From Color',
              type: 'string',
              description: 'Primary gradient start color (hex code)',
              validation: (Rule) => Rule.regex(/^#[0-9A-F]{6}$/i).error('Please enter a valid hex color code'),
            }),
            defineField({
              name: 'to',
              title: 'To Color',
              type: 'string',
              description: 'Primary gradient end color (hex code)',
              validation: (Rule) => Rule.regex(/^#[0-9A-F]{6}$/i).error('Please enter a valid hex color code'),
            }),
            defineField({
              name: 'direction',
              title: 'Gradient Direction',
              type: 'string',
              options: {
                list: [
                  { title: 'To Right', value: 'to-r' },
                  { title: 'To Left', value: 'to-l' },
                  { title: 'To Top', value: 'to-t' },
                  { title: 'To Bottom', value: 'to-b' },
                  { title: 'To Top Right', value: 'to-tr' },
                  { title: 'To Top Left', value: 'to-tl' },
                  { title: 'To Bottom Right', value: 'to-br' },
                  { title: 'To Bottom Left', value: 'to-bl' },
                ],
              },
              initialValue: 'to-r',
            }),
          ],
        }),
        defineField({
          name: 'secondaryGradient',
          title: 'Secondary Gradient',
          type: 'object',
          fields: [
            defineField({
              name: 'from',
              title: 'From Color',
              type: 'string',
              description: 'Secondary gradient start color (hex code)',
              validation: (Rule) => Rule.regex(/^#[0-9A-F]{6}$/i).error('Please enter a valid hex color code'),
            }),
            defineField({
              name: 'to',
              title: 'To Color',
              type: 'string',
              description: 'Secondary gradient end color (hex code)',
              validation: (Rule) => Rule.regex(/^#[0-9A-F]{6}$/i).error('Please enter a valid hex color code'),
            }),
            defineField({
              name: 'direction',
              title: 'Gradient Direction',
              type: 'string',
              options: {
                list: [
                  { title: 'To Right', value: 'to-r' },
                  { title: 'To Left', value: 'to-l' },
                  { title: 'To Top', value: 'to-t' },
                  { title: 'To Bottom', value: 'to-b' },
                  { title: 'To Top Right', value: 'to-tr' },
                  { title: 'To Top Left', value: 'to-tl' },
                  { title: 'To Bottom Right', value: 'to-br' },
                  { title: 'To Bottom Left', value: 'to-bl' },
                ],
              },
              initialValue: 'to-br',
            }),
          ],
        }),
        defineField({
          name: 'accentGradient',
          title: 'Accent Gradient',
          type: 'object',
          fields: [
            defineField({
              name: 'from',
              title: 'From Color',
              type: 'string',
              description: 'Accent gradient start color (hex code)',
              validation: (Rule) => Rule.regex(/^#[0-9A-F]{6}$/i).error('Please enter a valid hex color code'),
            }),
            defineField({
              name: 'to',
              title: 'To Color',
              type: 'string',
              description: 'Accent gradient end color (hex code)',
              validation: (Rule) => Rule.regex(/^#[0-9A-F]{6}$/i).error('Please enter a valid hex color code'),
            }),
            defineField({
              name: 'direction',
              title: 'Gradient Direction',
              type: 'string',
              options: {
                list: [
                  { title: 'To Right', value: 'to-r' },
                  { title: 'To Left', value: 'to-l' },
                  { title: 'To Top', value: 'to-t' },
                  { title: 'To Bottom', value: 'to-b' },
                  { title: 'To Top Right', value: 'to-tr' },
                  { title: 'To Top Left', value: 'to-tl' },
                  { title: 'To Bottom Right', value: 'to-br' },
                  { title: 'To Bottom Left', value: 'to-bl' },
                ],
              },
              initialValue: 'to-t',
            }),
          ],
        }),
        defineField({
          name: 'themeMode',
          title: 'Theme Mode',
          type: 'string',
          options: {
            list: [
              { title: 'Light', value: 'light' },
              { title: 'Dark', value: 'dark' },
              { title: 'Auto (System)', value: 'auto' },
            ],
          },
          initialValue: 'light',
        }),
      ],
    }),

    // Additional Site Settings
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'The name of your website',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Brief description of your website',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'maintenanceMode',
      title: 'Maintenance Mode',
      type: 'boolean',
      description: 'Enable maintenance mode (shows maintenance page to visitors)',
      initialValue: false,
    }),
    defineField({
      name: 'maintenanceMessage',
      title: 'Maintenance Message',
      type: 'text',
      description: 'Message to display when maintenance mode is enabled',
      hidden: ({ document }) => !document?.maintenanceMode,
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'defaultLanguage',
    },
  },
}) 