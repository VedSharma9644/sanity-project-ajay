# 📦 Demo Data Import Guide

This guide will help you import demo data into your Sanity Studio to get started quickly.

## 🚀 Quick Import (Recommended)

### 1. **Get a Sanity Token**
1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to API tab
4. Create a new token with "Editor" permissions
5. Copy the token

### 2. **Set Environment Variable**
Create a `.env` file in the `studio` directory:
```env
SANITY_TOKEN=your_token_here
```

### 3. **Run the Import Script**
```bash
cd studio
npm install @sanity/client
node import-demo-data.js
```

## 🔧 Manual Import (Alternative)

If the script doesn't work, you can import data manually:

### 1. **Import SEO Settings**
1. Go to Sanity Studio
2. Navigate to "SEO Settings"
3. Create a new document
4. Copy the data from `demo-data.json` under `siteSettings`

### 2. **Import Content Sections**
1. Go to each section type (Hero Section, Team Section, etc.)
2. Create new documents
3. Copy the corresponding data from `demo-data.json`

### 3. **Import Homepage**
1. Go to "Pages"
2. Create a new page with slug "homepage"
3. Add sections using the Page Builder
4. Reference the imported sections

## 📋 What Gets Imported

The demo data includes:

### **Singleton Documents**
- ✅ SEO Settings (SEO configuration)
- ✅ Site Header (navigation)
- ✅ Site Footer (footer content)
- ✅ Site Blog (blog configuration)

### **Content Sections**
- ✅ Hero Section (main headline)
- ✅ Team Section (team information)
- ✅ Brands Section (company logos)
- ✅ Easy Access Section (features)
- ✅ Insight Section (analytics)
- ✅ Workspace Section (collaboration)
- ✅ Heading Description Section (simple heading)
- ✅ Newsletter Section (CTA)
- ✅ SEO Section (page SEO)

### **Pages & Blog**
- ✅ Homepage with all sections
- ✅ 2 sample blog posts

## 🎯 After Import

1. **Visit your frontend**: http://localhost:3000
2. **Check the homepage**: Should show all sections
3. **Visit debug pages**:
   - `/site-settings` - View SEO settings
   - `/debug` - General debug info
4. **Customize content**: Edit in Sanity Studio

## 🐛 Troubleshooting

### **Token Issues**
- Make sure your token has "Editor" permissions
- Check that the token is correctly set in `.env`

### **Import Errors**
- Check console for specific error messages
- Verify your Sanity project ID and dataset
- Ensure all schemas are properly configured

### **Missing Content**
- Check that all documents were created
- Verify references between documents
- Look for any validation errors

### **Frontend Issues**
- Restart your frontend development server
- Check browser console for errors
- Verify environment variables are set

## 📝 Customization

After importing, you can:

1. **Edit content** in Sanity Studio
2. **Add images** to sections
3. **Modify SEO settings** in SEO Settings
4. **Create new pages** using the Page Builder
5. **Add blog posts** to the blog

## 🎨 Next Steps

1. **Add your own content** and images
2. **Customize the design** in the frontend components
3. **Add more sections** by creating new schemas
4. **Deploy your website** to your preferred platform

---

**Need help?** Check the main README.md for more detailed instructions. 