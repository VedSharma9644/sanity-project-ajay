# 🚀 Modern Website with Sanity CMS & Next.js

A modern, SEO-optimized website built with **Next.js 15**, **Sanity CMS**, and **Tailwind CSS**. Features a powerful page builder system, blog functionality, and comprehensive SEO management.

## ✨ Features

### 🎨 **Page Builder System**
- **Drag & Drop** - Reorder sections in Sanity Studio
- **Modular Sections** - Each section is a separate document type
- **Rich Content** - Portable Text for rich content editing
- **Responsive Design** - Mobile-first approach

### 📝 **Content Management**
- **SEO Settings** - Centralized SEO and website configuration
- **Blog System** - Full-featured blog with rich content
- **Dynamic Pages** - Create unlimited pages with the page builder
- **Media Management** - Optimized image handling with Sanity

### 🔍 **SEO & Performance**
- **Meta Tags** - Automatic Open Graph and Twitter Card generation
- **Structured Data** - Schema.org markup for better search results
- **Performance Optimized** - Next.js 15 with App Router
- **Image Optimization** - Automatic image optimization and lazy loading

### 🎯 **Content Sections**
- **Hero Section** - Gradient design with headline and CTA
- **Team Section** - Two-column layout with team information
- **Brands Section** - Company logos with hover effects
- **Easy Access Section** - Feature showcase with icons
- **Insight Section** - Analytics with gradient text
- **Workspace Section** - Collaboration tools showcase
- **Heading & Description** - Simple heading with gradient
- **Newsletter Section** - CTA with gradient button
- **SEO Section** - SEO metadata display

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **React 19** - Latest React features

### **Backend & CMS**
- **Sanity CMS** - Headless content management
- **GROQ** - Query language for content
- **Portable Text** - Rich text content
- **Real-time Collaboration** - Live content editing

### **Development Tools**
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **npm** - Package management

## 📦 Project Structure

```
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # Next.js App Router
│   │   │   ├── page.tsx     # Homepage
│   │   │   ├── layout.tsx   # Root layout
│   │   │   ├── [slug]/      # Dynamic pages
│   │   │   ├── blog/        # Blog pages
│   │   │   └── site-settings/ # Debug page
│   │   ├── components/      # React components
│   │   │   ├── SiteHeader.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── SEOHead.tsx
│   │   └── lib/             # Utilities
│   │       ├── sanity.client.ts
│   │       ├── siteSettings.ts
│   │       └── pageUtils.tsx
│   └── package.json
├── studio/                   # Sanity Studio
│   ├── schemas/             # Content schemas
│   │   ├── siteSettings.ts  # SEO settings
│   │   ├── page.ts          # Page builder
│   │   ├── post.ts          # Blog posts
│   │   └── *.ts             # Section schemas
│   ├── deskStructure.ts     # Studio navigation
│   └── sanity.config.ts     # Studio configuration
└── README.md
```

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **1. Clone the Repository**
```bash
git clone <your-repo-url>
cd your-project-name
```

### **2. Install Dependencies**

**Frontend:**
```bash
cd frontend
npm install
```

**Studio:**
```bash
cd studio
npm install
```

### **3. Environment Setup**

Create `.env.local` in the `frontend` directory:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### **4. Start Development Servers**

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 2 - Studio:**
```bash
cd studio
npm run dev
```

### **5. Access Your Application**
- **Frontend**: http://localhost:3000
- **Sanity Studio**: http://localhost:3333

## 📋 Initial Setup

### **1. Configure SEO Settings**
1. Go to Sanity Studio (http://localhost:3333)
2. Navigate to "SEO Settings" in the sidebar
3. Create a new SEO Settings document
4. Fill in essential fields:
   - **Site Title**: Your website name
   - **Site URL**: Your website URL
   - **Default Language**: Choose your language
   - **Site Description**: Brief description of your site
   - **Meta Title Template**: e.g., "%s | Your Company Name"

### **2. Create Your Homepage**
1. In Sanity Studio, go to "Pages"
2. Create a new Page document
3. Set the slug to "homepage"
4. Add sections using the Page Builder
5. Save and check your frontend

### **3. Add Demo Content**
Follow the guide in `studio/DEMO-IMPORT-GUIDE.md` to import sample content.

## 🎨 Customization

### **Adding New Sections**
1. Create schema in `studio/schemas/`
2. Add to page builder in `studio/schemas/page.ts`
3. Create React component in `frontend/src/components/`
4. Add to `renderSection` function in `frontend/src/lib/pageUtils.tsx`

### **Styling Guidelines**
- Use Tailwind CSS classes
- Follow mobile-first approach
- Add hover effects and transitions
- Use gradient backgrounds for highlights
- Maintain consistent spacing

### **SEO Configuration**
- Update SEO Settings in Sanity Studio
- Configure Open Graph and Twitter Card images
- Set up structured data for your organization
- Add favicon and logo

## 📱 Available Pages

### **Homepage** (`/`)
- Hero section with gradient background
- Call-to-action buttons
- Dynamic content from page builder

### **Dynamic Pages** (`/[slug]`)
- Any page created in Sanity Studio
- Full page builder functionality
- SEO optimized

### **Blog** (`/blog`)
- Grid layout of blog posts
- Featured images and excerpts
- Publication dates

### **Blog Posts** (`/blog/[slug]`)
- Rich content with Portable Text
- Featured images
- Publication metadata

### **SEO Settings Debug** (`/site-settings`)
- View all SEO settings
- Debug SEO configuration
- Raw data display

## 🔧 Development

### **Available Scripts**

**Frontend:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Studio:**
```bash
npm run dev      # Start Sanity Studio
npm run build    # Build studio for production
npm run deploy   # Deploy studio to Sanity
```

### **Environment Variables**

**Frontend (.env.local):**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### **Content Types**

- **SEO Settings** - Global SEO and website configuration
- **Pages** - Dynamic pages with page builder
- **Posts** - Blog posts with rich content
- **Sections** - Reusable content sections

## 🚀 Deployment

### **Frontend Deployment (Vercel)**
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Studio Deployment**
```bash
cd studio
npm run deploy
```

### **Environment Variables for Production**
Ensure these are set in your hosting platform:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## 🐛 Troubleshooting

### **Common Issues**

**1. Sanity Connection Error**
- Check environment variables
- Verify project ID and dataset
- Ensure Sanity Studio is running

**2. Missing Content**
- Create SEO Settings document
- Add content in Sanity Studio
- Check page slugs match URLs

**3. Build Errors**
- Run `npm install` in both directories
- Clear `.next` folder: `rm -rf .next`
- Check TypeScript errors

### **Debug Pages**
- `/debug` - General debug information
- `/site-settings` - SEO settings debug

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Next.js, Sanity CMS, and Tailwind CSS** 