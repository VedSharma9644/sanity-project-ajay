import { getSeoSettings } from "@/lib/seoSettings";

export default async function SEOSettingsPage() {
  const settings = await getSeoSettings();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">SEO Settings Debug</h1>
        
        {!settings ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-800 mb-4">No Site Settings Found</h2>
            <p className="text-red-700 mb-4">
              No site settings document exists in your Sanity database. Please create one in Sanity Studio.
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
              <h2 className="text-xl font-semibold text-green-800 mb-4">✅ Site Settings Found</h2>
              <p className="text-green-700">
                Your site settings are configured and ready to use.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Site Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Basic Site Info</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium text-gray-600">Site Name:</dt>
                    <dd className="text-gray-800">{settings.siteName || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Site Description:</dt>
                    <dd className="text-gray-800">{settings.siteDescription || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Default Language:</dt>
                    <dd className="text-gray-800">{settings.defaultLanguage || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Supported Languages:</dt>
                    <dd className="text-gray-800">
                      {settings.supportedLanguages?.length > 0 
                        ? settings.supportedLanguages.join(', ') 
                        : 'Not set'}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Google Analytics */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Google Analytics</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium text-gray-600">Google Tag ID:</dt>
                    <dd className="text-gray-800">{settings.googleTagId || 'Not set'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Analytics Enabled:</dt>
                    <dd className="text-gray-800">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        settings.googleTagEnabled 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {settings.googleTagEnabled ? 'Yes' : 'No'}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Maintenance Mode */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Maintenance Mode</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium text-gray-600">Maintenance Mode:</dt>
                    <dd className="text-gray-800">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        settings.maintenanceMode 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {settings.maintenanceMode ? 'Enabled' : 'Disabled'}
                      </span>
                    </dd>
                  </div>
                  {settings.maintenanceMode && (
                    <div>
                      <dt className="font-medium text-gray-600">Maintenance Message:</dt>
                      <dd className="text-gray-800">{settings.maintenanceMessage || 'Not set'}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Theme Settings */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Theme Settings</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium text-gray-600">Theme Mode:</dt>
                    <dd className="text-gray-800">{settings.siteTheme?.themeMode || 'light'}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Primary Gradient:</dt>
                    <dd className="text-gray-800">
                      {settings.siteTheme?.primaryGradient?.from && settings.siteTheme?.primaryGradient?.to 
                        ? `${settings.siteTheme.primaryGradient.from} → ${settings.siteTheme.primaryGradient.to} (${settings.siteTheme.primaryGradient.direction})`
                        : 'Not set'
                      }
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Secondary Gradient:</dt>
                    <dd className="text-gray-800">
                      {settings.siteTheme?.secondaryGradient?.from && settings.siteTheme?.secondaryGradient?.to 
                        ? `${settings.siteTheme.secondaryGradient.from} → ${settings.siteTheme.secondaryGradient.to} (${settings.siteTheme.secondaryGradient.direction})`
                        : 'Not set'
                      }
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Accent Gradient:</dt>
                    <dd className="text-gray-800">
                      {settings.siteTheme?.accentGradient?.from && settings.siteTheme?.accentGradient?.to 
                        ? `${settings.siteTheme.accentGradient.from} → ${settings.siteTheme.accentGradient.to} (${settings.siteTheme.accentGradient.direction})`
                        : 'Not set'
                      }
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Gradient Preview */}
            {settings.siteTheme && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Gradient Preview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {settings.siteTheme.primaryGradient?.from && settings.siteTheme.primaryGradient?.to && (
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Primary Gradient</h4>
                      <div 
                        className={`h-20 rounded-lg ${generateGradientClass(settings.siteTheme.primaryGradient)}`}
                      ></div>
                    </div>
                  )}
                  {settings.siteTheme.secondaryGradient?.from && settings.siteTheme.secondaryGradient?.to && (
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Secondary Gradient</h4>
                      <div 
                        className={`h-20 rounded-lg ${generateGradientClass(settings.siteTheme.secondaryGradient)}`}
                      ></div>
                    </div>
                  )}
                  {settings.siteTheme.accentGradient?.from && settings.siteTheme.accentGradient?.to && (
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Accent Gradient</h4>
                      <div 
                        className={`h-20 rounded-lg ${generateGradientClass(settings.siteTheme.accentGradient)}`}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            )}

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