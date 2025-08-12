import { getSiteSettingsNew, generateGradientClass } from "@/lib/siteSettingsNew";

export default async function SiteSettingsPage() {
  const settings = await getSiteSettingsNew();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Site Settings Debug</h1>
        
        {!settings ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-800 mb-4">No SEO Settings Found</h2>
            <p className="text-red-700 mb-4">
              No SEO settings document exists in your Sanity database. Please create one in Sanity Studio.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>Setup Instructions:</strong>
              </p>
              <ul className="text-blue-700 mt-2 space-y-1">
                <li>• Go to Sanity Studio at <a href="http://localhost:3333" className="underline" target="_blank">http://localhost:3333</a></li>
                <li>• Navigate to "SEO Settings" in the sidebar</li>
                <li>• Create a new SEO Settings document</li>
                <li>• Fill in the required fields</li>
                <li>• Save and refresh this page</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">✅ SEO Settings Found</h2>
              <p className="text-green-700">
                Your SEO settings are configured and ready to use.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* General Site Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">General Site Info</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium text-gray-600">Site Title:</dt>
                    <dd className="text-gray-800">{settings.siteTitle || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Site URL:</dt>
                    <dd className="text-gray-800">{settings.siteURL || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Default Language:</dt>
                    <dd className="text-gray-800">{settings.defaultLanguage || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Site Description:</dt>
                    <dd className="text-gray-800">{settings.siteDescription || 'Not set'}</dd>
                  </div>
                </dl>
              </div>

              {/* SEO Meta Fields */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">SEO Meta Fields</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium text-gray-600">Meta Title Template:</dt>
                    <dd className="text-gray-800">{settings.metaTitleTemplate || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Default Meta Title:</dt>
                    <dd className="text-gray-800">{settings.defaultMetaTitle || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Default Meta Description:</dt>
                    <dd className="text-gray-800">{settings.defaultMetaDescription || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Default Keywords:</dt>
                    <dd className="text-gray-800">
                      {settings.defaultMetaKeywords?.length ? settings.defaultMetaKeywords.join(', ') : 'Not set'}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Social Sharing */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Social Sharing</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium text-gray-600">Open Graph Type:</dt>
                    <dd className="text-gray-800">{settings.ogType || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">OG Title:</dt>
                    <dd className="text-gray-800">{settings.ogTitle || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">OG Description:</dt>
                    <dd className="text-gray-800">{settings.ogDescription || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Twitter Card Type:</dt>
                    <dd className="text-gray-800">{settings.twitterCardType || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Twitter Handle:</dt>
                    <dd className="text-gray-800">{settings.twitterHandle || 'Not set'}</dd>
                  </div>
                </dl>
              </div>

              {/* Structured Data */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Structured Data</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium text-gray-600">Organization Name:</dt>
                    <dd className="text-gray-800">{settings.organizationName || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Has Logo:</dt>
                    <dd className="text-gray-800">{settings.logo ? 'Yes' : 'No'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Has Favicon:</dt>
                    <dd className="text-gray-800">{settings.favicon ? 'Yes' : 'No'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Has Meta Image:</dt>
                    <dd className="text-gray-800">{settings.metaImage ? 'Yes' : 'No'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Has OG Image:</dt>
                    <dd className="text-gray-800">{settings.ogImage ? 'Yes' : 'No'}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Raw Data */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Raw Settings Data</h3>
              <pre className="bg-white border border-gray-200 rounded p-4 overflow-x-auto text-sm">
                {JSON.stringify(settings, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 