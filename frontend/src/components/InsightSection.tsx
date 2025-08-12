'use client'

import { urlFor } from '@/lib/sanity.client'

type InsightSectionProps = {
  badgeLabel: string
  title: string
  icon: any
  description: string
  image: any
}

export default function InsightSection({ 
  badgeLabel, 
  title, 
  icon, 
  description, 
  image 
}: InsightSectionProps) {
  // Function to apply gradient styling to "Deep Insights"
  const renderTitleWithGradient = (titleText: string) => {
    const parts = titleText.split('Deep Insights')
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            Deep Insights
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {badgeLabel}
          </span>
        </div>

        {/* Header with Icon and Title */}
        <div className="text-center mb-12">
          {icon && (
            <div className="flex justify-center mb-6">
              <img
                src={urlFor(icon).url()}
                alt="Insight Icon"
                className="h-16 w-16 object-contain"
              />
            </div>
          )}
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {renderTitleWithGradient(title)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Main Image */}
        {image && (
          <div className="flex justify-center">
            <img
              src={urlFor(image).url()}
              alt="Insight Screenshot"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>
    </section>
  )
} 