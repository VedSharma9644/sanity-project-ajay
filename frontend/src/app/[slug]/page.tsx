import { sanityClient } from '@/lib/sanity.client'
import { notFound } from 'next/navigation'
import { getPageQuery, renderSectionsWithSideLineContext } from '@/lib/pageUtils'
import BackgroundColorProvider from "@/components/BackgroundColorProvider";
import FontColorProvider from "@/components/FontColorProvider";
import { cleanColorValue } from '@/lib/colorUtils'

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  try {
    // Skip if this is the homepage slug (handled by root page.tsx)
    if (slug === 'homepage') {
      notFound();
    }

    const page = await sanityClient.fetch(getPageQuery(slug));
    
    if (!page) {
      return (
        <main className="min-h-screen" style={{ backgroundColor: 'white' }}>
          <div className="max-w-4xl mx-auto py-12 px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The page "{slug}" does not exist.
            </p>
            <div className="border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>Debug Info:</strong> Page "{slug}" not found. Visit <a href="/debug" className="underline">/debug</a> for more details.
              </p>
            </div>
          </div>
        </main>
      );
    }

    // Get and clean color values from page settings
    const backgroundColor = cleanColorValue(page.pageSettings?.pageBackground) || 'white';
    const headingFontColor = cleanColorValue(page.pageSettings?.headingFontColor);
    const titleFontColor = cleanColorValue(page.pageSettings?.titleFontColor);
    const contentFontColor = cleanColorValue(page.pageSettings?.contentFontColor);
    
    return (
      <>
        <BackgroundColorProvider backgroundColor={backgroundColor} />
        <FontColorProvider 
          headingFontColor={headingFontColor}
          titleFontColor={titleFontColor}
          contentFontColor={contentFontColor}
        />
        <main className="min-h-screen" style={{ backgroundColor }}>
        {page.pageBuilder && page.pageBuilder.length > 0 ? (
                     renderSectionsWithSideLineContext(page.pageBuilder)
        ) : (
          <div className="max-w-4xl mx-auto py-12 px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
            <p className="text-xl text-gray-600 mb-8">
              This page exists but has no content sections. Add sections using the Page Builder in Sanity Studio.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>Next Steps:</strong>
              </p>
              <ul className="text-yellow-700 mt-2 space-y-1">
                <li>• Go to Sanity Studio at <a href="http://localhost:3333" className="underline" target="_blank">http://localhost:3333</a></li>
                <li>• Edit this page in the Page Builder</li>
                <li>• Add sections and save</li>
                <li>• Refresh this page</li>
              </ul>
            </div>
          </div>
        )}
        </main>
      </>
    )
  } catch (error) {
    console.error('Error fetching page data:', error);
    return (
      <main className="min-h-screen" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Connection Error</h1>
          <p className="text-xl text-gray-600 mb-8">
            Unable to connect to Sanity CMS.
          </p>
          <div className="border border-red-200 rounded-lg p-4">
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
        </div>
      </main>
    );
  }
}
