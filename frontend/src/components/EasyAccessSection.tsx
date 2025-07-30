'use client'

type Feature = {
  title: string
  description: string
}

type EasyAccessSectionProps = {
  title: string
  icon: { asset: { url: string } }
  features: Feature[]
  bottomImage?: { asset: { url: string } }
}

export default function EasyAccessSection({ 
  title, 
  icon, 
  features, 
  bottomImage 
}: EasyAccessSectionProps) {
  // Function to apply gradient styling to "open source data"
  const renderTitleWithGradient = (titleText: string) => {
    const parts = titleText.split('open source data')
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            open source data
          </span>
          {parts[1]}
        </>
      )
    }
    return titleText
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Icon and Title */}
        <div className="text-center mb-16">
          {icon && (
            <div className="flex justify-center mb-6">
              <img
                src={icon.asset.url}
                alt="Easy Access Icon"
                className="h-16 w-16 object-contain"
              />
            </div>
          )}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {renderTitleWithGradient(title)}
          </h2>
        </div>

        {/* Features Grid */}
        {features && features.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Image */}
        {bottomImage && (
          <div className="flex justify-center">
            <img
              src={bottomImage.asset.url}
              alt="Easy Access Screenshot"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  )
} 