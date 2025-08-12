# Common Button System

This document describes the centralized button styling system used throughout the application to ensure consistency and maintainability.

## Overview

The button system consists of:
1. **Button Component** (`/components/ui/Button.tsx`) - A reusable React component
2. **Button Styles Utility** (`/lib/buttonStyles.ts`) - Utility functions for consistent styling
3. **PillTag Component** (`/components/ui/PillTag.tsx`) - A reusable pill-shaped tag component
4. **Type Definitions** - TypeScript types for button styles and sizes

## Button Styles Available

### Primary Button
- **Background**: Dark (`#211E1C`)
- **Text**: Light cream (`#FEEADD`)
- **Border**: Orange gradient with glowing effect
- **Hover**: Scale up animation (`hover:scale-105`)

### Secondary Button
- **Background**: Yellow (`#EAB308`)
- **Text**: White
- **Hover**: Darker yellow with enhanced shadow

### Outline Button
- **Background**: Transparent
- **Border**: Orange (`#F87216`)
- **Text**: Orange
- **Hover**: Orange background with white text

### Ghost Button
- **Background**: Transparent
- **Text**: Orange
- **Hover**: Light orange background

## Button Sizes

- **Small** (`sm`): `px-3 py-1.5 text-sm`
- **Medium** (`md`): `px-4 py-2 text-sm` (default)
- **Large** (`lg`): `px-6 py-4 text-base`

## PillTag Component

The PillTag component displays text in a pill-shaped container, commonly used for section titles, categories, or labels.

### PillTag Variants

- **Default** (`default`): Orange text with orange border (transparent background)
- **Outline** (`outline`): Same as default, explicitly transparent background
- **Filled** (`filled`): White text with orange background and border

### Usage Examples

```tsx
import PillTag from '@/components/ui/PillTag'

// Default pill tag
<PillTag>Insight Pages</PillTag>

// Centered pill tag
<PillTag className="mx-auto">Feature Section</PillTag>

// Filled variant
<PillTag variant="filled">New</PillTag>
```

### Styling

- **Background**: Transparent (default/outline) or orange (`#F87216`) for filled variant
- **Text**: Orange (`#F87216`) for default/outline, white for filled
- **Border**: Orange (`#F87216`) for all variants
- **Shape**: Fully rounded pill shape (`rounded-full`)
- **Padding**: `px-3 py-1`
- **Typography**: `text-base font-medium`

## Usage Examples

### 1. Using the Button Component

```tsx
import Button from '@/components/ui/Button'

// Primary button with link
<Button 
  href="/contact" 
  style="primary" 
  size="md"
>
  Contact Us
</Button>

// Secondary button with onClick
<Button 
  onClick={handleSubmit} 
  style="secondary" 
  size="lg"
>
  Submit Form
</Button>

// Outline button
<Button style="outline" size="sm">
  Learn More
</Button>
```

### 2. Using Button Style Utilities

```tsx
import { getButtonClasses, getPrimaryButtonWrapperClasses } from '@/lib/buttonStyles'

// Get complete button classes
const buttonClasses = getButtonClasses('primary', 'md')

// Get primary button wrapper (for gradient border)
const wrapperClasses = getPrimaryButtonWrapperClasses()

// For CTA sections with specific sizing
import { getCTAButtonClasses } from '@/lib/buttonStyles'
const ctaButtonClasses = getCTAButtonClasses('primary', 'md')
```

### 3. In Existing Components

The system has been integrated into:
- `SiteHeader` - CTA buttons in navigation
- `CTASection` - Call-to-action buttons
- `NewsletterSection` - Newsletter signup buttons

## Benefits

1. **Consistency**: All buttons across the app look and behave the same
2. **Maintainability**: Change button styles in one place
3. **Type Safety**: TypeScript ensures correct button style and size values
4. **Reusability**: Easy to add new buttons with consistent styling
5. **Performance**: No duplicate CSS classes across components

## Migration Guide

### From Inline Styling
```tsx
// Old way
<a className="px-4 py-2 bg-blue-600 text-white rounded-md">
  Click me
</a>

// New way
<Button style="primary" size="md">
  Click me
</Button>
```

### From Custom Functions
```tsx
// Old way
const getButtonClasses = (style, size) => {
  // Custom logic here
}

// New way
import { getButtonClasses } from '@/lib/buttonStyles'
const classes = getButtonClasses(style, size)
```

## Customization

To add new button styles or modify existing ones:

1. **Add new style**: Update `ButtonStyle` type and `getButtonStyleClasses()` function
2. **Add new size**: Update `ButtonSize` type and `getButtonSizeClasses()` function
3. **Modify colors**: Update the color values in the utility functions

## File Structure

```
frontend/
├── components/
│   └── ui/
│       ├── Button.tsx          # Main Button component
│       └── PillTag.tsx         # Pill-shaped tag component
├── lib/
│   └── buttonStyles.ts         # Button styling utilities
└── BUTTON_SYSTEM_README.md     # This documentation
```

## Best Practices

1. **Always use the Button component** for new buttons
2. **Use utility functions** when you need just the CSS classes
3. **Maintain consistency** by using predefined styles and sizes
4. **Test across components** to ensure styling consistency
5. **Update this documentation** when making changes to the system
