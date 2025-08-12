# Open Sauced Sanity Studio

This is the Sanity Content Studio for the Open Sauced platform - a real-time content editing environment connected to the Sanity backend.

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ installed
- Sanity account created
- Project created in Sanity dashboard

### **Installation & Setup**

1. **Install dependencies:**
   ```bash
   cd studio
   npm install
   ```

2. **Environment Configuration:**
   Create a `.env` file in the studio directory:
   ```
   SANITY_STUDIO_PROJECT_ID=your-project-id
   SANITY_STUDIO_DATASET=production
   SANITY_TOKEN=your-api-token
   ```

3. **Start the studio:**
   ```bash
   npm run dev
   ```

4. **Open Sanity Studio:**
   Visit [http://localhost:3333](http://localhost:3333)

## 📁 Studio Structure

```
studio/
├── schemas/                 # Content type definitions
│   ├── index.ts            # Schema registry
│   ├── page.ts             # Page builder schema
│   ├── post.ts             # Blog post schema
│   ├── author.ts           # Author schema
│   ├── siteHeader.ts       # Header configuration
│   ├── siteFooter.ts       # Footer configuration
│   ├── siteBlog.ts         # Blog page configuration
│   ├── siteSettings.ts     # Site settings & theme
│   ├── seoSettings.ts      # SEO & meta settings
│   ├── heroSectionHigh.ts  # High priority hero section
│   ├── heroSectionMedium.ts # Medium priority hero section
│   ├── featureSection.ts   # Feature showcase section
│   ├── ctaSection.ts       # Call-to-action section
│   ├── teamSection.ts      # Team member section
│   ├── brandsSection.ts    # Company logos section
│   ├── easyAccessSection.ts # Feature highlights section
│   ├── insightSection.ts   # Analytics insights section
│   ├── workspaceSection.ts # Workspace features section
│   ├── headingDescription.ts # Simple heading section
│   ├── newsletterSection.ts # Newsletter signup section
│   ├── seoSection.ts       # SEO metadata section
│   └── blockContent.ts     # Rich text content blocks
├── deskStructure.ts         # Studio navigation structure
├── sanity.config.ts         # Studio configuration
├── sanity.cli.ts           # CLI configuration
└── import-demo-data.js     # Demo data import script
```

## 🎯 Content Types

### **Core Site Configuration**
- **`siteSettings`** - Site theme, Google Analytics, maintenance mode
- **`seoSettings`** - SEO metadata, social sharing, Open Graph
- **`siteHeader`** - Header logo, navigation, CTA button, styling
- **`siteFooter`** - Footer links, social media, legal information
- **`siteBlog`** - Blog page configuration, featured post selection

### **Page Builder Sections**
- **`page`** - Dynamic pages with modular section system
- **`heroSectionHigh`** - High priority hero sections
- **`heroSectionMedium`** - Medium priority hero sections
- **`featureSection`** - Feature showcases with pill tags
- **`ctaSection`** - Call-to-action sections
- **`teamSection`** - Team member showcases
- **`brandsSection`** - Company logo displays
- **`easyAccessSection`** - Feature highlights
- **`insightSection`** - Analytics insights
- **`workspaceSection`** - Workspace features
- **`headingDescription`** - Simple heading sections
- **`newsletterSection`** - Newsletter signups

### **Content Management**
- **`post`** - Blog posts with rich content
- **`author`** - Author information
- **`blockContent`** - Portable Text rich content blocks

## 🔧 Configuration

### **Studio Configuration (`sanity.config.ts`)**
```typescript
export default defineConfig({
  name: 'default',
  title: 'Open Sauced Website',
  projectId: 'your-project-id',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: myStructure
    }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft'
        }
      }
    })
  ]
})
```

### **Desk Structure (`deskStructure.ts`)**
- **Content** - Main content management
- **SEO Settings** - SEO configuration
- **Site Settings** - Site theme and configuration
- **Site Header** - Header management
- **Site Footer** - Footer management
- **Blog Page** - Blog configuration
- **Pages** - Dynamic page management
- **Blog Posts** - Blog post management
- **Hero Sections** - Hero section management
- **Brands Sections** - Brand showcase management

## 📝 Content Creation Workflow

### **1. Site Setup (One-time)**
1. **Create SEO Settings** - Set site title, description, meta tags
2. **Create Site Settings** - Configure theme colors, Google Analytics
3. **Create Site Header** - Add logo, navigation, CTA button
4. **Create Site Footer** - Add links, social media, legal info
5. **Create Blog Page** - Configure blog layout and featured post

### **2. Page Creation**
1. **Create Page** - Set slug, title, and SEO metadata
2. **Add Sections** - Use page builder to add content sections
3. **Order Sections** - Drag and drop to arrange section order
4. **Configure Sections** - Set content, images, and styling
5. **Publish Page** - Make page live

### **3. Blog Management**
1. **Create Authors** - Add author information
2. **Create Blog Posts** - Write content with rich text
3. **Set Featured Post** - Select featured post in blog page
4. **Add Images** - Upload and configure feature images
5. **Publish Posts** - Make posts live

## 🎨 Styling & Customization

### **Color Management**
- **Hex Colors** - Use #RRGGBB format
- **RGBA Colors** - Use rgba(r,g,b,a) format
- **Named Colors** - Use standard color names
- **Validation** - All colors are validated before saving

### **Gradient Text**
- **Syntax** - Wrap text with $ symbols: `$OpenSauced$`
- **Implementation** - Automatically applies gradient styling
- **Customization** - Gradient colors configurable in CSS

### **Button System**
- **Variants** - Primary, secondary, outline, ghost
- **Sizes** - Small, medium, large
- **Styling** - Consistent design system across all components

## 🔍 Content Validation

### **Required Fields**
- Page titles and slugs
- Blog post titles and content
- Author names
- Site configuration settings

### **Field Validation**
- Color format validation
- URL format validation
- Image asset requirements
- Character limits for SEO

## 📊 Demo Data Import

### **Import Script**
Use the included demo data import script to populate your studio:
```bash
cd studio
node import-demo-data.js
```

### **Demo Content Includes**
- Sample pages with sections
- Blog posts with content
- Hero sections and features
- Team and brand showcases

## 🚀 Deployment

### **Production Build**
```bash
npm run build
```

### **Environment Variables**
Ensure these are set in production:
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_TOKEN`

### **Deployment Platforms**
- **Vercel** - Recommended for Next.js projects
- **Netlify** - Alternative deployment option
- **Self-hosted** - Traditional hosting solutions

## 🛠️ Development

### **Adding New Content Types**
1. **Create Schema** - Define in `schemas/` directory
2. **Add to Index** - Register in `schemas/index.ts`
3. **Update Desk Structure** - Add to navigation
4. **Test in Studio** - Verify functionality

### **Schema Best Practices**
- Use descriptive field names
- Include helpful descriptions
- Set appropriate validation rules
- Group related fields in objects
- Use collapsible sections for organization

### **Content Guidelines**
- Use realistic Open Sauced content
- Include proper alt text for images
- Add meaningful descriptions
- Keep content concise and engaging
- Use gradient text for highlights

## 📚 Resources

### **Sanity Documentation**
- [Getting Started](https://www.sanity.io/docs/introduction/getting-started)
- [Schema Types](https://www.sanity.io/docs/schema-types)
- [Studio Customization](https://www.sanity.io/docs/content-studio)
- [API Reference](https://www.sanity.io/docs/reference)

### **Community & Support**
- [Sanity Community](https://www.sanity.io/community)
- [GitHub Issues](https://github.com/sanity-io/sanity)
- [Discord Server](https://discord.gg/sanity)

## 🔐 Security

### **API Tokens**
- Keep tokens secure and private
- Use appropriate token permissions
- Rotate tokens regularly
- Never commit tokens to version control

### **Content Access**
- Configure dataset permissions
- Set up user roles and permissions
- Monitor content changes
- Backup important content

---

**Built with Sanity Studio** 🚀

For frontend setup, see the main project README.md
