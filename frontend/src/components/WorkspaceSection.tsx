'use client'

import { urlFor } from '@/lib/sanity.client'

type WorkspaceSectionProps = {
  badgeLabel: string
  title: string
  icon: any
  description: string
  image: any
}

export default function WorkspaceSection({ 
  badgeLabel, 
  title, 
  icon, 
  description, 
  image 
}: WorkspaceSectionProps) {
  // Function to apply gradient styling to "Share key information"
  const renderTitleWithGradient = (titleText: string) => {
    const parts = titleText.split('Share key information')
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-semibold">
            Share key information
          </span>
          {parts[1]}
        </>
      )
    }
    return titleText
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {badgeLabel}
          </span>
        </div>

        {/* Header with Icon and Title */}
        <div className="text-center mb-12">
          {icon && (
            <div className="flex justify-center mb-6">
              <img
                src={urlFor(icon).url()}
                alt="Workspace Icon"
                className="h-16 w-16 object-contain"
              />
            </div>
          )}
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {renderTitleWithGradient(title)}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Main Image */}
        {image && (
          <div className="flex justify-center">
            <img
              src={urlFor(image).url()}
              alt="Workspace Screenshot"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>
    </section>
  )
} 