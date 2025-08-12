import {defineType} from 'sanity'

const ctaSection = defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Icon for the CTA section',
    },
    {
      name: 'text',
      title: 'Main Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Primary text for the call-to-action. Use $text$ to add gradient styling to specific words.',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Secondary text below the main heading. Use $text$ to add gradient styling to specific words.',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
          description: 'Text displayed on the button. Use $text$ to add gradient styling to specific words.',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'url',
          validation: (Rule: any) => Rule.required(),
          description: 'URL the button links to',
        },
        {
          name: 'style',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              {title: 'Primary', value: 'primary'},
              {title: 'Secondary', value: 'secondary'},
              {title: 'Outline', value: 'outline'},
              {title: 'Ghost', value: 'ghost'},
            ]
          },
          initialValue: 'primary',
          description: 'Visual style of the button',
        },
        {
          name: 'size',
          title: 'Button Size',
          type: 'string',
          options: {
            list: [
              {title: 'Small', value: 'small'},
              {title: 'Medium', value: 'medium'},
              {title: 'Large', value: 'large'},
            ]
          },
          initialValue: 'medium',
          description: 'Size of the button',
        }
      ]
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Dark', value: 'dark'},
          {title: 'Light', value: 'light'},
        ]
      },
      initialValue: 'default',
      description: 'Background color for the CTA section',
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
      description: 'Alignment of text content',
    },
    {
      name: 'isActive',
      title: 'Active Status',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to activate/deactivate this CTA section',
    },
    {
      name: 'sideLine',
      title: 'Side Line',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show/hide side line decoration',
    },
    {
      name: 'ctaSettings',
      title: 'CTA Settings',
      type: 'object',
      fields: [
        {
          name: 'titleColor',
          title: 'Title Color',
          type: 'string',
          description: 'Color for the main title text (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white). Use $text$ to add gradient styling to specific words.',
          placeholder: '#ffffff or rgba(255,255,255,1) or white',
          validation: (Rule: any) => Rule.custom((value: string) => {
            if (!value) return true; // Allow empty
            const colorRegex = /^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|rgba?\([^)]+\)|transparent|inherit|initial|unset|white|black|gray|red|green|blue|yellow|orange|purple|pink|brown|cyan|magenta|lime|navy|teal|olive|maroon|silver|gold|indigo|violet|fuchsia|aqua|azure|beige|bisque|blanchedalmond|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|greenyellow|honeydew|hotpink|indianred|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|wheat|whitesmoke|yellowgreen)$/;
            return colorRegex.test(value) ? true : 'Please enter a valid color value (hex, rgba, rgb, or named color)';
          })
        },
        {
          name: 'headingColor',
          title: 'Heading Color',
          type: 'string',
          description: 'Color for the subheading text (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white). Use $text$ to add gradient styling to specific words.',
          placeholder: '#ffffff or rgba(255,255,255,1) or white',
          validation: (Rule: any) => Rule.custom((value: string) => {
            if (!value) return true; // Allow empty
            const colorRegex = /^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|rgba?\([^)]+\)|transparent|inherit|initial|unset|white|black|gray|red|green|blue|yellow|orange|purple|pink|brown|cyan|magenta|lime|navy|teal|olive|maroon|silver|gold|indigo|violet|fuchsia|aqua|azure|beige|bisque|blanchedalmond|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|greenyellow|honeydew|hotpink|indianred|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|wheat|whitesmoke|yellowgreen)$/;
            return colorRegex.test(value) ? true : 'Please enter a valid color value (hex, rgba, rgb, or named color)';
          })
        },
        {
          name: 'contentColor',
          title: 'Content Color',
          type: 'string',
          description: 'Color for the button text (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white). Use $text$ to add gradient styling to specific words.',
          placeholder: '#ffffff or rgba(255,255,255,1) or white',
          validation: (Rule: any) => Rule.custom((value: string) => {
            if (!value) return true; // Allow empty
            const colorRegex = /^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|rgba?\([^)]+\)|transparent|inherit|initial|unset|white|black|gray|red|green|blue|yellow|orange|purple|pink|brown|cyan|magenta|lime|navy|teal|olive|maroon|silver|gold|indigo|violet|fuchsia|aqua|azure|beige|bisque|blanchedalmond|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|greenyellow|honeydew|hotpink|indianred|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|wheat|whitesmoke|yellowgreen)$/;
            return colorRegex.test(value) ? true : 'Please enter a valid color value (hex, rgba, rgb, or named color)';
          })
        },
        {
          name: 'customBackgroundColor',
          title: 'Custom Background Color',
          type: 'string',
          description: 'Custom background color for the CTA section (hex: #ffffff, rgba: rgba(255,255,255,1), rgb: rgb(255,255,255), or named color: white). This will override the preset background color.',
          placeholder: '#ffffff or rgba(255,255,255,1) or white',
          validation: (Rule: any) => Rule.custom((value: string) => {
            if (!value) return true; // Allow empty
            const colorRegex = /^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|rgba?\([^)]+\)|transparent|inherit|initial|unset|white|black|gray|red|green|blue|yellow|orange|purple|pink|brown|cyan|magenta|lime|navy|teal|olive|maroon|silver|gold|indigo|violet|fuchsia|aqua|azure|beige|bisque|blanchedalmond|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|greenyellow|honeydew|hotpink|indianred|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|wheat|whitesmoke|yellowgreen)$/;
            return colorRegex.test(value) ? true : 'Please enter a valid color value (hex, rgba, rgb, or named color)';
          })
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
      text: 'text',
      buttonText: 'button.text',
      isActive: 'isActive'
    },
    prepare({text, buttonText, isActive}: any) {
      return {
        title: text || 'CTA Section',
        subtitle: `${buttonText ? `Button: ${buttonText}` : 'No button'} - ${isActive ? 'Active' : 'Inactive'}`
      }
    }
  }
})

export default ctaSection 