import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Ensure environment variables are properly set
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6omo2x0p'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'
const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333'
const apiToken = process.env.SANITY_API_TOKEN

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
});

// Create a client for draft mode
export const sanityClientDraft = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  stega: {
    enabled: true,
    studioUrl
  },
  // Add token for authenticated requests
  token: apiToken,
})

// Debug WebSocket connection
if (typeof window !== 'undefined') {
  const wsUrl = process.env.NODE_ENV === 'development' 
    ? 'ws://localhost:3333' 
    : 'wss://your-production-domain.com';

  try {
    const ws = new WebSocket(wsUrl);
    
    ws.onopen = () => {
      // WebSocket connected
    };
    
    ws.onclose = (event) => {
      // WebSocket closed
    };
    
    ws.onerror = (event) => {
      // WebSocket error
    };
  } catch (error) {
    // WebSocket connection failed
  }
}

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => {
  return builder.image(source)
}
