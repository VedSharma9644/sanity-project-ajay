/**
 * Utility functions for cleaning and applying color values
 */

/**
 * Cleans a color value by removing invisible Unicode characters
 * @param color - The color value to clean
 * @returns The cleaned color value
 */
export function cleanColorValue(color: string | undefined): string {
  if (!color || typeof color !== 'string') return '';
  
  // Remove invisible Unicode characters, zero-width spaces, and other problematic characters
  let cleaned = color
    .replace(/[\u200B-\u200D\uFEFF\u2060\u200E\u200F\u202A-\u202E]/g, '') // Remove various Unicode control characters
    .replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, ' ') // Replace various space characters with regular space
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
  
  // Additional validation for color values
  if (cleaned) {
    // Check if it's a valid color format
    const colorRegex = /^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|rgba?\([^)]+\)|transparent|inherit|initial|unset|white|black|gray|red|green|blue|yellow|orange|purple|pink|brown|cyan|magenta|lime|navy|teal|olive|maroon|silver|gold|indigo|violet|fuchsia|aqua|azure|beige|bisque|blanchedalmond|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|greenyellow|honeydew|hotpink|indianred|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|wheat|whitesmoke|yellowgreen)$/;
    
    if (!colorRegex.test(cleaned)) {
      console.warn('Invalid color value detected:', color, '-> cleaned to:', cleaned);
      return ''; // Return empty string for invalid colors
    }
  }
  
  return cleaned;
}

/**
 * Applies a color value to an element's style property
 * @param element - The element to apply the color to
 * @param property - The CSS property to apply (e.g., 'backgroundColor', 'color')
 * @param color - The color value to apply
 */
export function applyColorToElement(
  element: HTMLElement, 
  property: string, 
  color: string
): void {
  const cleanColor = cleanColorValue(color);
  if (cleanColor) {
    (element.style as any)[property] = cleanColor;
  }
}

/**
 * Applies color to document body
 * @param property - The CSS property to apply
 * @param color - The color value to apply
 */
export function applyColorToBody(property: string, color: string): void {
  const cleanColor = cleanColorValue(color);
  if (cleanColor && document.body) {
    (document.body.style as any)[property] = cleanColor;
  }
}
