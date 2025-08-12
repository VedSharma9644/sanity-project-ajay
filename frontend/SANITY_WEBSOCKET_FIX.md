# Sanity WebSocket Connection Fix

## Issue
You're experiencing WebSocket connection failures with Sanity Studio, which prevents live changes from working properly.

## Solution Steps

### 1. Create Environment Variables File
Create a `.env.local` file in the `frontend` directory with the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=6omo2x0p
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3333
SANITY_API_TOKEN=your_api_token_here
```

### 2. Get Your Sanity API Token
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project (6omo2x0p)
3. Go to API section
4. Create a new token with "Editor" permissions
5. Copy the token and add it to your `.env.local` file

### 3. Restart Your Development Servers
After creating the `.env.local` file:

```bash
# Stop all running servers (Ctrl+C)
# Then restart them:

# Terminal 1 - Start Sanity Studio
cd frontend/studio
npm run dev

# Terminal 2 - Start Next.js app
cd frontend
npm run dev
```

### 4. Verify the Fix
1. Open your Sanity Studio at `http://localhost:3333`
2. Make changes to content
3. Check if changes appear live in your Next.js app without publishing

## Additional Troubleshooting

### If WebSocket still fails:
1. **Check Firewall**: Ensure port 3333 is not blocked
2. **Clear Browser Cache**: Hard refresh (Ctrl+Shift+R)
3. **Check Network**: Ensure stable internet connection
4. **Update Sanity**: Run `npm update` in studio directory

### Alternative Solutions:
1. **Use HTTPS**: If localhost doesn't work, try using HTTPS
2. **Different Port**: Change studio port in package.json scripts
3. **VPN Issues**: Disable VPN if using one

## Configuration Changes Made
- Removed redundant WebSocket config from `sanity.config.ts`
- Updated `sanity.client.ts` with proper perspective settings
- Added WebSocket config to `sanity.cli.ts`
- Improved environment variable handling

## Expected Behavior After Fix
- WebSocket connection should establish successfully
- Live changes should work without publishing
- No more "WebSocket is closed before the connection is established" errors 