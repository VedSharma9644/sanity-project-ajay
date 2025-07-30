'use client'

type Logo = {
  name: string
  image: { asset: { url: string } }
  url?: string
}

type BrandsSectionProps = {
  label: string
  logos: Logo[]
}

export default function BrandsSection({ label, logos }: BrandsSectionProps) {
  if (!logos || logos.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {label}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="group">
              {logo.url ? (
                <a 
                  href={logo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transition-transform duration-200 hover:scale-105"
                >
                  <img
                    src={logo.image.asset.url}
                    alt={logo.name}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                    title={logo.name}
                  />
                </a>
              ) : (
                <img
                  src={logo.image.asset.url}
                  alt={logo.name}
                  className="h-12 w-auto object-contain filter grayscale transition-all duration-200"
                  title={logo.name}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 