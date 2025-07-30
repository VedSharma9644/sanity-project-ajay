import { sanityClient } from '@/lib/sanity.client'

export default async function DebugPage() {
  try {
    // Test basic connection
    const allPages = await sanityClient.fetch(`*[_type == "page"]`)
    const homepage = await sanityClient.fetch(`*[_type == "page" && slug.current == "homepage"][0]`)
    const allHeroSections = await sanityClient.fetch(`*[_type == "heroSection"]`)
    const allTeamSections = await sanityClient.fetch(`*[_type == "teamSection"]`)
    
    // Test section reference resolution
    const testHeroRef = await sanityClient.fetch(`*[_type == "heroSection" && _id == "36b8837b-667f-4d30-bb66-49fd1e7cea9a"][0]`)
    const testTeamRef = await sanityClient.fetch(`*[_type == "teamSection" && _id == "8b34a1f9-2bd9-4b83-b414-3a2b04d87efb"][0]`)
    
    // Test the exact query we're using
    const testQuery = await sanityClient.fetch(`*[_type == "page" && slug.current == "homepage"][0]{
      _id,
      title,
      slug,
      pageBuilder[] {
        _type,
        _key,
        title,
        content,
        
        _type == "heroSectionRef" => {
          ...,
          "heroSectionRef": *[_type == "heroSection" && _id == ^.heroSectionRef][0] {
            _id,
            _type,
            headline,
            subtext
          }
        },
        
        _type == "teamSectionRef" => {
          ...,
          "teamSectionRef": *[_type == "teamSection" && _id == ^.teamSectionRef][0] {
            _id,
            _type,
            label,
            title,
            highlightedText,
            description,
            icon,
            mainImage
          }
        }
      }
    }`)
    
    return (
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Sanity Debug Page</h1>
        
        <div className="space-y-8">
          {/* Connection Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">✅ Connection Status</h2>
            <p className="text-green-700">Sanity connection is working!</p>
            <p className="text-sm text-green-600 mt-2">
              Project ID: {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6omo2x0p'}
            </p>
            <p className="text-sm text-green-600">
              Dataset: {process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}
            </p>
          </div>

          {/* All Pages */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">📄 All Pages ({allPages.length})</h2>
            {allPages.length > 0 ? (
              <div className="space-y-4">
                {allPages.map((page: any) => (
                  <div key={page._id} className="bg-white p-4 rounded border">
                    <h3 className="font-bold">{page.title || 'No title'}</h3>
                    <p className="text-sm text-gray-600">Slug: {page.slug?.current || 'No slug'}</p>
                    <p className="text-sm text-gray-600">ID: {page._id}</p>
                    <p className="text-sm text-gray-600">
                      Page Builder Sections: {page.pageBuilder?.length || 0}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-blue-700">No pages found in Sanity</p>
            )}
          </div>

          {/* Homepage Data */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">🏠 Homepage Data</h2>
            {homepage ? (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h3 className="font-bold">{homepage.title || 'No title'}</h3>
                  <p className="text-sm text-gray-600">Slug: {homepage.slug?.current}</p>
                  <p className="text-sm text-gray-600">ID: {homepage._id}</p>
                  <p className="text-sm text-gray-600">
                    Page Builder Sections: {homepage.pageBuilder?.length || 0}
                  </p>
                </div>
                
                {homepage.pageBuilder && homepage.pageBuilder.length > 0 && (
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-bold mb-2">Page Builder Sections:</h4>
                    <ul className="space-y-2">
                      {homepage.pageBuilder.map((section: any, index: number) => (
                        <li key={index} className="text-sm">
                          <strong>{section._type}</strong> - {section._key}
                          {section.heroSectionRef && <span className="text-green-600"> (Has Hero Data)</span>}
                          {section.teamSectionRef && <span className="text-green-600"> (Has Team Data)</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-yellow-700">No homepage found with slug "homepage"</p>
            )}
          </div>

          {/* Test Query Results */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">🧪 Test Query Results</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold">Test Hero Section Reference</h3>
                <p className="text-sm text-gray-600">ID: 36b8837b-667f-4d30-bb66-49fd1e7cea9a</p>
                {testHeroRef ? (
                  <div className="mt-2">
                    <p className="text-green-600">✅ Found: {testHeroRef.headline}</p>
                    <p className="text-sm text-gray-600">Subtext: {testHeroRef.subtext}</p>
                  </div>
                ) : (
                  <p className="text-red-600">❌ Not found</p>
                )}
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold">Test Team Section Reference</h3>
                <p className="text-sm text-gray-600">ID: 8b34a1f9-2bd9-4b83-b414-3a2b04d87efb</p>
                {testTeamRef ? (
                  <div className="mt-2">
                    <p className="text-green-600">✅ Found: {testTeamRef.title}</p>
                    <p className="text-sm text-gray-600">Label: {testTeamRef.label}</p>
                  </div>
                ) : (
                  <p className="text-red-600">❌ Not found</p>
                )}
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold">Test Query with References</h3>
                {testQuery ? (
                  <div className="mt-2">
                    <p className="text-green-600">✅ Query successful</p>
                    <p className="text-sm text-gray-600">Title: {testQuery.title}</p>
                    <p className="text-sm text-gray-600">Sections: {testQuery.pageBuilder?.length || 0}</p>
                    {testQuery.pageBuilder && testQuery.pageBuilder.length > 0 && (
                      <div className="mt-2">
                        <h4 className="font-bold text-sm">First few sections:</h4>
                        <ul className="text-xs space-y-1 mt-1">
                          {testQuery.pageBuilder.slice(0, 3).map((section: any, index: number) => (
                            <li key={index}>
                              {section._type}: {section.heroSectionRef ? '✅ Has data' : '❌ No data'}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-red-600">❌ Query failed</p>
                )}
              </div>
            </div>
          </div>

          {/* Available Sections */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">🧩 Available Sections</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold">Hero Sections</h3>
                <p className="text-sm text-gray-600">{allHeroSections.length} found</p>
                {allHeroSections.length > 0 && (
                  <ul className="text-sm mt-2">
                    {allHeroSections.map((hero: any) => (
                      <li key={hero._id}>• {hero.headline} (ID: {hero._id})</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold">Team Sections</h3>
                <p className="text-sm text-gray-600">{allTeamSections.length} found</p>
                {allTeamSections.length > 0 && (
                  <ul className="text-sm mt-2">
                    {allTeamSections.map((team: any) => (
                      <li key={team._id}>• {team.title} (ID: {team._id})</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Setup Instructions */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">🔧 Setup Instructions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-orange-700">If no pages found:</h3>
                <ol className="list-decimal list-inside text-orange-700 space-y-1 mt-2">
                  <li>Go to Sanity Studio at <a href="http://localhost:3333" className="underline" target="_blank">http://localhost:3333</a></li>
                  <li>Create a new "Page" document</li>
                  <li>Set the slug to "homepage"</li>
                  <li>Add sections using the Page Builder</li>
                  <li>Save and refresh this debug page</li>
                </ol>
              </div>
              <div>
                <h3 className="font-bold text-orange-700">If pages exist but no content:</h3>
                <ol className="list-decimal list-inside text-orange-700 space-y-1 mt-2">
                  <li>Edit the existing page in Sanity Studio</li>
                  <li>Add sections to the Page Builder</li>
                  <li>Make sure sections are properly linked</li>
                  <li>Save and refresh</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  } catch (error) {
    console.error('Debug page error:', error)
    return (
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">Debug Page Error</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">
            <strong>Error:</strong> {error instanceof Error ? error.message : String(error)}
          </p>
        </div>
      </main>
    )
  }
} 