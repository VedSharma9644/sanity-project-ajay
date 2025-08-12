# Open Sauced Frontend

This is the Next.js frontend for the Open Sauced platform, connected to Sanity CMS with a modern page builder system.

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
   SANITY_API_TOKEN=your-api-token
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

5. **Open Sanity Studio:**
   Visit [http://localhost:3333](http://localhost:3333) to manage content

## 📁 Project Structure

```
frontend/src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage with page builder
│   ├── layout.tsx         # Root layout with header/footer
│   ├── globals.css        # Global styles and CSS variables
│   ├── about/             # About page
│   ├── blog/              # Blog listing with featured post
│   └── [slug]/            # Dynamic pages with page builder
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx     # Centralized button system
│   │   └── PillTag.tsx    # Pill-shaped tag component
│   ├── SiteHeader.tsx     # Global header with background color
│   ├── SiteFooter.tsx     # Global footer with social links
│   ├── BackgroundColorProvider.tsx # Site background color
│   ├── FontColorProvider.tsx # Dynamic font colors
│   ├── HeroSectionHigh.tsx # High priority hero section
│   ├── HeroSectionMedium.tsx # Medium priority hero section
│   ├── CTASection.tsx     # Call-to-action section
│   ├── FeatureSection.tsx # Feature showcase with pill tags
│   ├── SiteBlog.tsx       # Blog section component
│   ├── NewsletterSection.tsx # Newsletter signup
│   ├── BrandsSection.tsx  # Company logos showcase
│   ├── TeamSection.tsx    # Team member showcase
│   ├── EasyAccessSection.tsx # Feature highlights
│   ├── WorkspaceSection.tsx # Workspace features
│   ├── InsightSection.tsx # Analytics insights
│   ├── HeadingDescriptionSection.tsx # Simple heading
│   └── SeoSection.tsx     # SEO metadata display
└── lib/                   # Utilities and configurations
    ├── buttonStyles.ts    # Button styling utilities
    ├── colorUtils.ts      # Color validation utilities
    ├── gradientText.tsx   # Gradient text rendering
    ├── headerUtils.ts     # Header styling utilities
    ├── pageUtils.tsx      # Page building utilities
    ├── sanity.client.ts   # Sanity client configuration
    ├── siteSettings.ts    # Site settings management
    └── seoSettings.ts     # SEO settings management
```

## 🎨 Core Features

### **Modern Button System**
- ✅ **Centralized Styling** - All buttons use consistent design system
- ✅ **Multiple Variants** - Primary, secondary, outline, ghost styles
- ✅ **Size Options** - Small, medium, large button sizes
- ✅ **Gradient Wrappers** - Beautiful gradient borders for primary buttons
- ✅ **Hover Effects** - Smooth transitions and interactive states

### **Dynamic Header System**
- ✅ **Background Color** - Customizable header background from Sanity
- ✅ **Logo Management** - Dynamic logo from CMS
- ✅ **Navigation Links** - Editable navigation menu
- ✅ **CTA Button** - Configurable call-to-action button
- ✅ **Responsive Design** - Mobile-friendly navigation

### **Enhanced Blog System**
- ✅ **Featured Post** - Prominent featured blog post at the top
- ✅ **Grid Layout** - 2-column responsive grid for recent posts
- ✅ **Load More** - Pagination with "Load More" functionality
- ✅ **Post Cards** - Consistent height cards with aligned buttons
- ✅ **Read Time** - Estimated reading time for each post
- ✅ **Author Information** - Author details for each post

### **Page Builder System**
- ✅ **Modular Sections** - Each section is a separate document type
- ✅ **Drag & Drop** - Reorder sections in Sanity Studio
- ✅ **Rich Content** - Portable Text for rich content editing
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Side Line Context** - Visual connection between sections

### **Content Sections**
- ✅ **Hero Sections** - High and Medium priority variants
- ✅ **Feature Section** - Showcase features with pill tags
- ✅ **CTA Section** - Call-to-action with gradient buttons
- ✅ **Team Section** - Team member showcase
- ✅ **Brands Section** - Company logos with hover effects
- ✅ **Easy Access Section** - Feature highlights with icons
- ✅ **Insight Section** - Analytics insights
- ✅ **Workspace Section** - Collaboration tools showcase
- ✅ **Newsletter Section** - Email signup with gradient styling

### **Advanced Styling**
- ✅ **Gradient Text** - Custom gradient text with $ markers
- ✅ **Dynamic Colors** - CMS-controlled color schemes
- ✅ **CSS Variables** - Centralized color management
- ✅ **Tailwind CSS** - Utility-first styling framework
- ✅ **Smooth Transitions** - Hover effects and animations

## 🔧 Configuration

### **Sanity CMS Integration**
- ✅ **Real-time Data** - All content from Sanity CMS
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Image Optimization** - Sanity image URLs with optimization
- ✅ **Content Validation** - Required fields enforced
- ✅ **Draft Mode** - Preview unpublished content

### **Environment Setup**
- ✅ **Project ID** - Sanity project configuration
- ✅ **Dataset** - Production/development dataset support
- ✅ **API Token** - Secure content access
- ✅ **Studio URL** - Custom Sanity Studio configuration

## 📱 Pages & Routes

### **Homepage** (`/`)
- Dynamic page builder content
- Hero sections with gradient backgrounds
- Feature showcases and CTAs
- Responsive design for all devices

### **Blog** (`/blog`)
- Featured post prominently displayed
- 2-column grid of recent posts
- Load more functionality
- Post metadata and author info

### **Blog Posts** (`/blog/[slug]`)
- Individual blog post pages
- Rich content with Portable Text
- Featured images and metadata
- SEO optimized

### **Dynamic Pages** (`/[slug]`)
- Custom pages using page builder
- Modular section system
- SEO metadata support
- Responsive layouts

### **About** (`/about`)
- Company information page
- Mission statement
- Team details

## 🎯 Content Management

### **Sanity Studio Features**
- **Page Builder** - Drag and drop section ordering
- **Content Types** - Structured content with validation
- **Media Management** - Image and asset handling
- **SEO Settings** - Meta tags and social sharing
- **Site Settings** - Global configuration and theming

### **Content Guidelines**
- Use realistic Open Sauced content
- Include proper alt text for images
- Add meaningful descriptions
- Keep content concise and engaging
- Use gradient text with $ markers for highlights

## 🛠️ Development

### **Adding New Sections**
1. Create schema in `studio/schemas/`
2. Add to page builder in `studio/schemas/page.ts`
3. Create React component in `frontend/src/components/`
4. Add to `renderSection` function in `frontend/src/lib/pageUtils.tsx`

### **Button System Usage**
```tsx
import { Button } from '@/components/ui/Button'

// Primary button with gradient wrapper
<Button variant="primary" size="md">
  Get Started
</Button>

// Secondary button
<Button variant="secondary" size="lg">
  Learn More
</Button>
```

### **Gradient Text Usage**
```tsx
import { renderGradientText } from '@/lib/gradientText'

// In your component
{renderGradientText("Welcome to $OpenSauced$")}
```

### **Styling Guidelines**
- Use Tailwind CSS classes
- Follow mobile-first approach
- Add hover effects and transitions
- Use gradient backgrounds for highlights
- Maintain consistent spacing
- Leverage CSS variables for theming

## 🚀 Deployment

### **Build Commands**
```bash
npm run build    # Production build
npm run start    # Production server
npm run dev      # Development server
```

### **Environment Variables**
Ensure all required environment variables are set in production:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`

### **Platforms**
- **Vercel** - Recommended for Next.js
- **Netlify** - Alternative deployment option
- **Self-hosted** - Docker or traditional hosting

## 📚 Additional Resources

- **Sanity Documentation** - [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **Next.js Documentation** - [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS** - [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Follow the established component patterns
2. Use the centralized button system
3. Maintain responsive design principles
4. Test on multiple devices
5. Update documentation for new features

---

**Built with Next.js, Sanity CMS, and Tailwind CSS** 🚀
