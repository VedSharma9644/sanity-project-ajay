'use client'

import { urlFor } from '@/lib/sanity.client'
import { cleanColorValue } from '@/lib/colorUtils'


type Logo = {
  name: string
  image: any
  url?: string
}

type BrandsSectionProps = {
  label: string
  logos: Logo[]
  sideLine?: boolean
  sideLineString?: string
  previousSectionHasSideLine?: boolean
  imageResolution?: {
    width: number
    height: number
    unit: string
    gap?: number
  }
}

export default function BrandsSection({ label, logos, sideLine = false, sideLineString, previousSectionHasSideLine = false, imageResolution }: BrandsSectionProps) {
  
  if (!logos || logos.length === 0) {
    return null
  }

  // Handle both boolean and string values for sideLine
  const showSideLine = sideLine === true || sideLineString === 'true';

  return (
    <section>
      <div className="w-full max-w-[1256px] mx-auto px-6 h-fit flex justify-center flex-col items-center">
        <div className="flex w-full relative">
          {/* Left side line */}
          {showSideLine && (
            <div className="absolute left-0 top-0 bottom-0 w-[1.5px]">
              <div className="absolute inset-0 bg-[#F87216] blur-sm"></div>
              <div className="bg-[#F87216] h-full relative"></div>
            </div>
          )}
          
          {/* Main content */}
          <div className="w-full ml-6 lg:ml-12">
            <div className="text-center mb-12 mx-6">
              <h2 style={{ color: 'var(--heading-font-color, #171717)' }} className="text-3xl font-bold mb-4">
                {label}
              </h2>
            </div>
        
            <div 
              className="flex flex-wrap justify-center items-center mx-6"
              style={{
                gap: imageResolution?.gap ? `${imageResolution.gap}px` : '32px'
              }}
            >
              {logos.map((logo, index) => (
                <div key={index} className="group flex-shrink-0">
                  {logo.url ? (
                    <a 
                      href={logo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block transition-transform duration-200 hover:scale-105"
                    >
                      <img
                        src={urlFor(logo.image).url()}
                        alt={cleanColorValue(logo.name)}
                        style={{
                          width: imageResolution?.width ? `${imageResolution.width}${imageResolution.unit}` : 'auto',
                          height: imageResolution?.height ? `${imageResolution.height}${imageResolution.unit}` : '48px',
                          objectFit: 'contain',
                          minWidth: imageResolution?.width ? `${imageResolution.width}${imageResolution.unit}` : 'auto',
                          minHeight: imageResolution?.height ? `${imageResolution.height}${imageResolution.unit}` : '48px',
                          maxWidth: imageResolution?.width ? `${imageResolution.width}${imageResolution.unit}` : 'none',
                          maxHeight: imageResolution?.height ? `${imageResolution.height}${imageResolution.unit}` : 'none'
                        }}
                        className="filter grayscale hover:grayscale-0 transition-all duration-200"
                        title={cleanColorValue(logo.name)}
                      />
                    </a>
                  ) : (
                    <img
                      src={urlFor(logo.image).url()}
                      alt={cleanColorValue(logo.name)}
                      style={{
                        width: imageResolution?.width ? `${imageResolution.width}${imageResolution.unit}` : 'auto',
                        height: imageResolution?.height ? `${imageResolution.height}${imageResolution.unit}` : '48px',
                        objectFit: 'contain',
                        minWidth: imageResolution?.width ? `${imageResolution.width}${imageResolution.unit}` : 'auto',
                        minHeight: imageResolution?.height ? `${imageResolution.height}${imageResolution.unit}` : '48px',
                        maxWidth: imageResolution?.width ? `${imageResolution.width}${imageResolution.unit}` : 'none',
                        maxHeight: imageResolution?.height ? `${imageResolution.height}${imageResolution.unit}` : 'none'
                      }}
                      className="filter grayscale transition-all duration-200"
                      title={cleanColorValue(logo.name)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 