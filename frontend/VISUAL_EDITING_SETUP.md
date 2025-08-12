# Visual Editing Setup Guide

This guide will help you set up Visual Editing for your Sanity Studio project.

## Environment Variables

Create a `.env.local` file in the `frontend` directory with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=6omo2x0p
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3333

# Visual Editing
SANITY_PREVIEW_SECRET=your-secret-key-here
```

## How to Use Visual Editing

### 1. Start Your Development Servers

```bash
# Terminal 1: Start Sanity Studio
cd studio
npm run dev

# Terminal 2: Start Next.js Frontend
cd frontend
npm run dev
```

### 2. Enable Draft Mode

To enable visual editing, you need to access your site in draft mode. You can do this by:

1. Going to your Sanity Studio (http://localhost:3333)
2. Opening a page document
3. Clicking the "Preview" button in the top right
4. This will open your frontend in draft mode with visual editing enabled

### 3. Visual Editing Features

Once in draft mode, you'll see:

- **Click-to-edit**: Click on any section to edit it directly in Sanity Studio
- **Live preview**: Changes made in Sanity Studio appear immediately on your frontend
- **Visual overlays**: Hover over sections to see edit controls

### 4. Testing Visual Editing

1. Open your frontend in draft mode (http://localhost:3000)
2. Hover over any section - you should see visual editing overlays
3. Click on a section to open it in Sanity Studio for editing
4. Make changes in Sanity Studio and see them update live on your frontend

## Troubleshooting

### Visual Editing Not Working?

1. **Check Environment Variables**: Ensure all environment variables are set correctly
2. **Draft Mode**: Make sure you're accessing the site in draft mode
3. **Studio URL**: Verify the studio URL is correct and accessible
4. **Console Errors**: Check browser console for any JavaScript errors

### Common Issues

- **CORS Errors**: Make sure your studio URL is accessible
- **No Overlays**: Ensure you're in draft mode and the VisualEditing component is loaded
- **Click Not Working**: Check that your sections have proper data attributes

## Advanced Configuration

### Custom Studio URL

If your Sanity Studio is hosted elsewhere, update the `NEXT_PUBLIC_SANITY_STUDIO_URL`:

```env
NEXT_PUBLIC_SANITY_STUDIO_URL=https://your-studio.sanity.studio
```

### Custom Preview Secret

For production, use a strong secret:

```env
SANITY_PREVIEW_SECRET=your-very-secure-secret-key
```

## Next Steps

1. Test visual editing on your homepage
2. Add visual editing to other pages (blog, about, etc.)
3. Customize the visual editing experience with custom overlays
4. Deploy and test on production

For more information, visit the [Sanity Visual Editing Documentation](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing). 