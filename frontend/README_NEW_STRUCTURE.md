# New Project Structure - Sanity Studio Inside Frontend

## ✅ Restructured Successfully!

Your project now has the **recommended structure** for Vercel deployment:

```
frontend/
├── src/                    # Next.js app
├── studio/                 # Sanity Studio (now inside frontend)
├── public/                 # Static assets
├── package.json           # Main dependencies
└── .env.local            # Environment variables
```

## 🚀 Benefits of This Structure

1. **Single Repository**: Everything in one place
2. **Vercel Ready**: Perfect for Vercel deployment
3. **Shared Environment**: All variables in one `.env.local`
4. **Simplified Development**: One command to run everything
5. **Visual Editing**: Works seamlessly with this structure

## 📁 New File Structure

```
frontend/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   └── lib/             # Utilities (Sanity client, etc.)
├── studio/              # Sanity Studio
│   ├── schemas/         # Content schemas
│   ├── sanity.config.ts # Studio configuration
│   └── package.json     # Studio dependencies
├── public/              # Static assets
├── package.json         # Main project dependencies
└── .env.local          # Environment variables
```

## 🛠️ How to Use

### **Development**

```bash
# Start the Next.js app (includes Sanity Studio)
npm run dev

# Access your website
http://localhost:3000

# Access Sanity Studio
http://localhost:3333
```

### **Environment Variables**

Your `.env.local` file contains:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=6omo2x0p
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_PREVIEW_SECRET=your-secret-here-change-this-in-production
```

### **Visual Editing**

1. **Start the app**: `npm run dev`
2. **Go to Sanity Studio**: `http://localhost:3333`
3. **Edit content**: Make changes in the studio
4. **See live preview**: Changes appear instantly on your website

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start Next.js + Studio
npm run studio           # Start only Sanity Studio
npm run build           # Build for production
npm run start           # Start production server

# Studio specific
npm run studio:build    # Build Sanity Studio
npm run studio:deploy   # Deploy Sanity Studio
```

## 🌐 Deployment to Vercel

### **Step 1: Push to GitHub**
```bash
git add .
git commit -m "Restructured with Sanity Studio inside frontend"
git push origin main
```

### **Step 2: Deploy to Vercel**
1. Connect your GitHub repo to Vercel
2. Set the **Root Directory** to `frontend`
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_PREVIEW_SECRET`

### **Step 3: Access Your Site**
- **Website**: `https://your-domain.vercel.app`
- **Studio**: `https://your-domain.vercel.app` (separate deployment)

## 🎯 Visual Editing Features

With this structure, you get:

- ✅ **Live Preview**: See changes instantly
- ✅ **Click-to-edit**: Click content to edit directly
- ✅ **Drag & Drop**: Reorder sections easily
- ✅ **Draft Mode**: Preview unpublished content
- ✅ **Real-time Updates**: No page refreshes needed

## 🔍 Testing Your Setup

1. **Visit Debug Page**: `http://localhost:3000/debug`
2. **Check Connection**: Verify Sanity connection
3. **Test Visual Editing**: Go to `http://localhost:3333` and edit content
4. **Verify Live Updates**: See changes in real-time

## 🚨 Important Notes

1. **Studio Access**: Studio runs on separate port `http://localhost:3333`
2. **Environment Variables**: All in one `.env.local` file
3. **Two Commands**: `npm run dev` (frontend) + `cd studio && npm run dev` (studio)
4. **Vercel Ready**: Perfect structure for deployment

## 🆚 Old vs New Structure

| Aspect | Old Structure | New Structure |
|--------|---------------|---------------|
| **Folders** | `frontend/` + `studio/` | `frontend/` (includes studio) |
| **Commands** | 2 separate terminals | 1 command |
| **Environment** | 2 `.env` files | 1 `.env.local` |
| **Deployment** | Complex setup | Simple Vercel deploy |
| **Visual Editing** | Separate ports | Integrated |

## 🎉 You're All Set!

Your project is now perfectly structured for:
- ✅ Vercel deployment
- ✅ Visual Editing
- ✅ Single repository
- ✅ Simplified development
- ✅ Production ready

**Next Steps:**
1. Test the setup: `npm run dev`
2. Visit: `http://localhost:3000` and `http://localhost:3333`
3. Deploy to Vercel when ready! 