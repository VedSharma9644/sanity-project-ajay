import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'sanity-template-ajay',

  projectId: '6omo2x0p',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure, // custom desk structure
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
