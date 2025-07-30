'use client'

type HeadingDescriptionSectionProps = {
  title: string
  description?: string
}

export default function HeadingDescriptionSection({ 
  title, 
  description 
}: HeadingDescriptionSectionProps) {
  // Function to apply gradient styling to "Supercharge"
  const renderTitleWithGradient = (titleText: string) => {
    const parts = titleText.split('Supercharge')
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-semibold">
            Supercharge
          </span>
          {parts[1]}
        </>
      )
    }
    return titleText
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {renderTitleWithGradient(title)}
        </h2>
        {description && (
          <p className="text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
} 