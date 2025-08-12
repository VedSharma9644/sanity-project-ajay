# Gradient Text Feature

This feature allows content editors to add gradient styling to specific words or phrases in titles and headings by wrapping them with `$` symbols.

## How to Use

### In Sanity Studio

1. **For any title or heading field**, you can wrap text with `$` symbols to apply gradient styling
2. **Example**: `Easy access to all your $open source data$`
3. **Result**: The text "open source data" will be rendered with a gradient effect

### Examples

| Input in Sanity Studio | Rendered Output |
|------------------------|-----------------|
| `$Streamlined Access$` | "Streamlined Access" with gradient |
| `Easy access to all your $open source data$` | "Easy access to all your" (normal) + "open source data" (gradient) |
| `$Supercharge$ your workflow` | "Supercharge" (gradient) + " your workflow" (normal) |
| `Normal text with $highlighted$ words` | "Normal text with" (normal) + "highlighted" (gradient) + " words" (normal) |

### Supported Components

The gradient text feature is currently implemented in:

- **HeroSectionHigh** - title, heading, subheading, with left-side text and right-side dashboard image
- **HeroSectionMedium** - title, heading, subheading, with left-side text and right-side dashboard image  
- **FeatureSection** - heading, column titles
- **BrandsSection** - label, with optional side line decoration

### Technical Details

- **Marker**: Uses `$` as the gradient marker
- **Gradient Style**: Default gradient goes from `brandRed` (#ed5332) to `brandYellow` (#fcb60a)
- **Fallback**: If no `$` markers are found, text renders normally
- **Multiple Markers**: You can have multiple gradient sections in one text field

### CSS Classes Used

The gradient text uses these Tailwind CSS classes:
```css
bg-gradient-to-r from-[#ed5332] to-[#fcb60a] text-transparent bg-clip-text
```

### Customization

To use different gradient colors, you can import and use `GradientTextAlt` from `@/lib/gradientText` which uses a blue-to-purple gradient by default.

## Implementation

The feature is implemented in:
- `frontend/src/lib/gradientText.tsx` - Core utility functions
- Updated component files to use `GradientText` component
- Updated schema descriptions to guide content editors
