import { sanityClient } from "@/lib/sanity.client";
import { getPageQuery, renderSection } from "@/lib/pageUtils";
import { getSiteSettings } from "@/lib/siteSettings";

export default async function HomePage() {
  try {
    // Try to fetch the homepage and site settings
    const [page, settings] = await Promise.all([
      sanityClient.fetch(getPageQuery()),
      getSiteSettings()
    ]);

    // If no homepage document exists, show setup instructions
    if (!page) {
      return (
        <main className="min-h-screen">
          <div className="max-w-4xl mx-auto py-12 px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to {settings?.siteTitle || 'Open Sauced'}</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your homepage is not configured yet. Please set up your content in Sanity Studio.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800">
                <strong>Setup Instructions:</strong>
              </p>
              <ul className="text-blue-700 mt-2 space-y-1">
                <li>• Go to Sanity Studio at <a href="http://localhost:3333" className="underline" target="_blank">http://localhost:3333</a></li>
                <li>• Navigate to "Pages"</li>
                <li>• Create a new Page document</li>
                <li>• Set the slug to "homepage"</li>
                <li>• Add sections using the Page Builder</li>
                <li>• Save and refresh this page</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>Debug:</strong> Visit <a href="/debug" className="underline">/debug</a> to see what's in your Sanity database.
              </p>
            </div>
          </div>
        </main>
      );
    }

    // If page exists but has no content, show a message
    if (!page.pageBuilder || page.pageBuilder.length === 0) {
      return (
        <main className="min-h-screen">
          <div className="max-w-4xl mx-auto py-12 px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">{page.title || settings?.siteTitle || 'Homepage'}</h1>
            <p className="text-xl text-gray-600 mb-8">
              This page exists but has no content sections. Add sections using the Page Builder in Sanity Studio.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Next Steps:</strong>
              </p>
              <ul className="text-yellow-700 mt-2 space-y-1">
                <li>• Go to Sanity Studio at <a href="http://localhost:3333" className="underline" target="_blank">http://localhost:3333</a></li>
                <li>• Edit this page in the Page Builder</li>
                <li>• Add Hero Section, Team Section, etc.</li>
                <li>• Save and refresh this page</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>Debug Info:</strong> Page found with title "{page.title}" but no sections. 
                Visit <a href="/debug" className="underline">/debug</a> for more details.
              </p>
            </div>
          </div>
        </main>
      );
    }

    // Debug: Log the page data
    console.log('Homepage data:', page);
    console.log('Page builder sections:', page.pageBuilder);

    return (
      <main>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 mx-4 mt-4">
          <p className="text-green-800">
            <strong>✅ Content Found:</strong> {page.pageBuilder.length} sections loaded from Sanity.
            Visit <a href="/debug" className="underline">/debug</a> for detailed information.
          </p>
        </div>
        {page.pageBuilder.map(renderSection)}
      </main>
    );
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return (
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Connection Error</h1>
          <p className="text-xl text-gray-600 mb-8">
            Unable to connect to Sanity CMS.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">
              <strong>Error:</strong> {error instanceof Error ? error.message : 'Unknown error'}
            </p>
            <div className="mt-4 text-sm text-red-700">
              <p><strong>Troubleshooting:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Check if Sanity Studio is running on port 3333</li>
                <li>Verify your environment variables in .env.local</li>
                <li>Check browser console for more details</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>Debug:</strong> Visit <a href="/debug" className="underline">/debug</a> to test your Sanity connection.
            </p>
          </div>
        </div>
      </main>
    );
  }
}