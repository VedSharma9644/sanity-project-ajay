import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './schemaTypes'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'OpenSauced Website',
  projectId: '6omo2x0p',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: myStructure, // custom desk structure
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: 'http://localhost:3000/api/draft'
        }
      },
      allowOrigins: [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://localhost:3003',
        'http://localhost:3004',
        'http://localhost:3333',
        'http://localhost:3005'
      ]
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  // Add explicit WebSocket configuration
  websocket: {
    projectId: '6omo2x0p',
    dataset: 'production',
  },

  // Add API configuration
  api: {
    projectId: '6omo2x0p',
    dataset: 'production',
  },

  // Add studio host configuration
  studioHost: 'localhost',
})
