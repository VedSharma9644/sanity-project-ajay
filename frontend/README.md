# Open Sauced Frontend

This is the Next.js frontend for the Open Sauced platform, connected to Sanity CMS.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
frontend/src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage with hero section
│   ├── layout.tsx         # Root layout with header/footer
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── blog/              # Blog listing and posts
│   ├── changelog/         # Changelog page
│   ├── cli/               # CLI documentation page
│   └── [slug]/            # Dynamic pages with page builder
├── components/            # React components
│   ├── SiteHeader.tsx     # Global header
│   ├── SiteFooter.tsx     # Global footer
│   ├── HeroSection.tsx    # Hero section component
│   ├── TeamSection.tsx    # Team showcase
│   ├── BrandsSection.tsx  # Company logos
│   ├── EasyAccessSection.tsx # Features showcase
│   ├── InsightSection.tsx # Analytics showcase
│   ├── WorkspaceSection.tsx # Collaboration tools
│   ├── HeadingDescriptionSection.tsx # Simple heading
│   ├── NewsletterSection.tsx # CTA section
│   └── SeoSection.tsx     # SEO metadata display
└── lib/                   # Utilities
    └── sanity.client.ts   # Sanity client configuration
```

## 🎨 Features

### **Page Builder System**
- ✅ **Drag & Drop** - Reorder sections in Sanity Studio
- ✅ **Modular Sections** - Each section is a separate document type
- ✅ **Rich Content** - Portable Text for rich content editing
- ✅ **Responsive Design** - Mobile-first approach

### **Content Sections**
- ✅ **Hero Section** - Gradient design with headline and subtext
- ✅ **Team Section** - Two-column layout with team info
- ✅ **Brands Section** - Company logos with hover effects
- ✅ **Easy Access Section** - Feature showcase with icons
- ✅ **Insight Section** - Analytics with gradient text
- ✅ **Workspace Section** - Collaboration tools showcase
- ✅ **Heading & Description** - Simple heading with gradient
- ✅ **Newsletter Section** - CTA with gradient button

### **Blog System**
- ✅ **Blog Listing** - Grid layout with featured images
- ✅ **Blog Posts** - Rich content with Portable Text
- ✅ **SEO Optimized** - Meta descriptions and Open Graph
- ✅ **Responsive Cards** - Beautiful blog post cards

### **Navigation**
- ✅ **Dynamic Header** - Fetched from Sanity
- ✅ **Dynamic Footer** - Social links, menu, legal links
- ✅ **Mobile Menu** - Responsive navigation
- ✅ **Use Cases Dropdown** - Interactive dropdown menu

## 🔧 Configuration

### **Sanity Integration**
- ✅ **Real-time Data** - All content from Sanity CMS
- ✅ **Type Safety** - TypeScript interfaces
- ✅ **Image Optimization** - Sanity image URLs
- ✅ **Content Validation** - Required fields enforced

### **Styling**
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Custom Gradients** - Beautiful gradient effects
- ✅ **Responsive Design** - Mobile, tablet, desktop
- ✅ **Smooth Transitions** - Hover effects and animations

## 📱 Pages

### **Homepage** (`/`)
- Hero section with gradient background
- Call-to-action buttons
- Links to demo page and blog

### **Demo Page** (`/welcome`)
- Full page builder example
- All content sections displayed
- Drag-and-drop functionality

### **Blog** (`/blog`)
- Grid layout of blog posts
- Featured images and excerpts
- Publication dates

### **Blog Posts** (`/blog/[slug]`)
- Rich content with Portable Text
- Featured images
- Publication metadata

### **About** (`/about`)
- Company information
- Mission statement
- Links to demo page

### **Changelog** (`/changelog`)
- Version history
- Release notes
- Timeline design

### **CLI** (`/cli`)
- Command-line tool documentation
- Installation instructions
- Usage examples

## 🎯 Next Steps

1. **Add Demo Data** - Follow the guide in `studio/DEMO-IMPORT-GUIDE.md`
2. **Customize Content** - Update text and images in Sanity Studio
3. **Add More Pages** - Create additional pages using the page builder
4. **Deploy** - Deploy to Vercel, Netlify, or your preferred platform

## 🛠️ Development

### **Adding New Sections**
1. Create schema in `studio/schemas/`
2. Add to page builder in `studio/schemas/page.ts`
3. Create React component in `frontend/src/components/`
4. Add to `renderSection` function in `frontend/src/app/[slug]/page.tsx`

### **Styling Guidelines**
- Use Tailwind CSS classes
- Follow mobile-first approach
- Add hover effects and transitions
- Use gradient backgrounds for highlights
- Maintain consistent spacing

### **Content Guidelines**
- Use realistic Open Sauced content
- Include proper alt text for images
- Add meaningful descriptions
- Keep content concise and engaging
