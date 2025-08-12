import { createClient } from '@sanity/client'
import demoData from './demo-data.json'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '6omo2x0p',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  token: process.env.SANITY_TOKEN, // You'll need to create a token in your Sanity project
  apiVersion: '2023-07-01',
  useCdn: false,
})

async function importDemoData() {
  try {
    console.log('🚀 Starting demo data import...')

    // Import SEO Settings
console.log('📝 Importing SEO Settings...')
const siteSettings = await client.create(demoData.siteSettings)
console.log('✅ SEO Settings imported:', siteSettings._id)

    // Import Site Header
    console.log('📝 Importing Site Header...')
    const siteHeader = await client.create(demoData.siteHeader)
    console.log('✅ Site Header imported:', siteHeader._id)

    // Import Site Footer
    console.log('📝 Importing Site Footer...')
    const siteFooter = await client.create(demoData.siteFooter)
    console.log('✅ Site Footer imported:', siteFooter._id)

    // Import Site Blog
    console.log('📝 Importing Site Blog...')
    const siteBlog = await client.create(demoData.siteBlog)
    console.log('✅ Site Blog imported:', siteBlog._id)

    // Import Hero Section
    console.log('📝 Importing Hero Section...')
    const heroSection = await client.create(demoData.heroSection)
    console.log('✅ Hero Section imported:', heroSection._id)

    // Import Team Section
    console.log('📝 Importing Team Section...')
    const teamSection = await client.create(demoData.teamSection)
    console.log('✅ Team Section imported:', teamSection._id)

    // Import Brands Section
    console.log('📝 Importing Brands Section...')
    const brands = await client.create(demoData.brands)
    console.log('✅ Brands Section imported:', brands._id)

    // Import Easy Access Section
    console.log('📝 Importing Easy Access Section...')
    const easyAccess = await client.create(demoData.easyAccess)
    console.log('✅ Easy Access Section imported:', easyAccess._id)

    // Import Insight Section
    console.log('📝 Importing Insight Section...')
    const insightSection = await client.create(demoData.insightSection)
    console.log('✅ Insight Section imported:', insightSection._id)

    // Import Workspace Section
    console.log('📝 Importing Workspace Section...')
    const workspaceSection = await client.create(demoData.workspaceSection)
    console.log('✅ Workspace Section imported:', workspaceSection._id)

    // Import Heading Description Section
    console.log('📝 Importing Heading Description Section...')
    const headingDescription = await client.create(demoData.headingDescription)
    console.log('✅ Heading Description Section imported:', headingDescription._id)

    // Import Newsletter Section
    console.log('📝 Importing Newsletter Section...')
    const newsletterSection = await client.create(demoData.newsletterSection)
    console.log('✅ Newsletter Section imported:', newsletterSection._id)

    // Import SEO Section
    console.log('📝 Importing SEO Section...')
    const seoSection = await client.create(demoData.seoSection)
    console.log('✅ SEO Section imported:', seoSection._id)

    // Import Blog Posts
    console.log('📝 Importing Blog Posts...')
    for (const post of demoData.posts) {
      const importedPost = await client.create(post)
      console.log('✅ Blog Post imported:', importedPost._id, '-', importedPost.title)
    }

    // Update the page with correct references
    console.log('📝 Importing Homepage...')
    const pageData = {
      ...demoData.page,
      pageBuilder: demoData.page.pageBuilder.map(section => {
        if (section._type === 'heroSectionRef') {
          return { ...section, heroSectionRef: { _type: 'reference', _ref: heroSection._id } }
        }
        if (section._type === 'teamSectionRef') {
          return { ...section, teamSectionRef: { _type: 'reference', _ref: teamSection._id } }
        }
        if (section._type === 'brandsSectionRef') {
          return { ...section, brandsSectionRef: { _type: 'reference', _ref: brands._id } }
        }
        if (section._type === 'easyAccessSectionRef') {
          return { ...section, easyAccessSectionRef: { _type: 'reference', _ref: easyAccess._id } }
        }
        if (section._type === 'insightSectionRef') {
          return { ...section, insightSectionRef: { _type: 'reference', _ref: insightSection._id } }
        }
        if (section._type === 'workspaceSectionRef') {
          return { ...section, workspaceSectionRef: { _type: 'reference', _ref: workspaceSection._id } }
        }
        if (section._type === 'headingDescriptionRef') {
          return { ...section, headingDescriptionRef: { _type: 'reference', _ref: headingDescription._id } }
        }
        if (section._type === 'newsletterSectionRef') {
          return { ...section, newsletterSectionRef: { _type: 'reference', _ref: newsletterSection._id } }
        }
        return section
      })
    }

    const page = await client.create(pageData)
    console.log('✅ Homepage imported:', page._id)

    console.log('🎉 Demo data import completed successfully!')
    console.log('📋 Summary:')
    console.log('- SEO Settings:', siteSettings._id)
    console.log('- Site Header:', siteHeader._id)
    console.log('- Site Footer:', siteFooter._id)
    console.log('- Site Blog:', siteBlog._id)
    console.log('- Hero Section:', heroSection._id)
    console.log('- Team Section:', teamSection._id)
    console.log('- Brands Section:', brands._id)
    console.log('- Easy Access Section:', easyAccess._id)
    console.log('- Insight Section:', insightSection._id)
    console.log('- Workspace Section:', workspaceSection._id)
    console.log('- Heading Description Section:', headingDescription._id)
    console.log('- Newsletter Section:', newsletterSection._id)
    console.log('- SEO Section:', seoSection._id)
    console.log('- Homepage:', page._id)
    console.log('- Blog Posts:', demoData.posts.length, 'posts imported')

    console.log('\n🚀 Your website is now ready! Visit http://localhost:3000 to see it in action.')

  } catch (error) {
    console.error('❌ Error importing demo data:', error)
    process.exit(1)
  }
}

// Run the import if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  importDemoData()
}

export default importDemoData 
// 2. Or manually create documents using the data from demo-data.json 