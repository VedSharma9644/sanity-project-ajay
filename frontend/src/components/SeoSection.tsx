'use client'

type SeoSectionProps = {
  metaDescription?: string
  metaKeywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: { asset: { url: string } }
}

export default function SeoSection({ 
  metaDescription, 
  metaKeywords, 
  ogTitle, 
  ogDescription, 
  ogImage 
}: SeoSectionProps) {
  // This component handles SEO metadata
  // In a real implementation, this would set meta tags
  // For now, we'll just render a summary for development
  
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-3">SEO Settings</h3>
      <div className="space-y-2 text-sm">
        {metaDescription && (
          <div>
            <span className="font-medium text-gray-700">Meta Description:</span>
            <p className="text-gray-600">{metaDescription}</p>
          </div>
        )}
        {ogTitle && (
          <div>
            <span className="font-medium text-gray-700">OG Title:</span>
            <p className="text-gray-600">{ogTitle}</p>
          </div>
        )}
        {ogDescription && (
          <div>
            <span className="font-medium text-gray-700">OG Description:</span>
            <p className="text-gray-600">{ogDescription}</p>
          </div>
        )}
        {ogImage?.asset?.url && (
          <div>
            <span className="font-medium text-gray-700">OG Image:</span>
            <img 
              src={ogImage.asset.url} 
              alt="OG Image" 
              className="w-20 h-20 object-cover rounded mt-1"
            />
          </div>
        )}
      </div>
    </div>
  )
} 