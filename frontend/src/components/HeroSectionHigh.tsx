import React from 'react'
import { urlFor } from '@/lib/sanity.client'
import { GradientText } from '@/lib/gradientText'

type HeroSectionHighProps = {
  title: string
  heading: string
  subheading?: string
  sideLine?: boolean
  image?: any
  icon?: any
  previousSectionHasSideLine?: boolean
}

export default function HeroSectionHigh({ 
  title, 
  heading, 
  subheading, 
  sideLine = false,
  image,
  icon,
  previousSectionHasSideLine = false
}: HeroSectionHighProps) {
  return (
    <div 
      style={{ paddingBottom: '0px', paddingTop: '115px' }} 
      className="w-full max-w-[1256px] mx-auto px-6 h-fit flex justify-center flex-col items-center"
    >
              <div className="flex w-full">
          {/* Left side line with icon */}
          {sideLine && (
            <div className="relative w-[1.5px]">
              <div className="absolute inset-0 bg-[#F87216] blur-sm"></div>
              <div className="bg-[#F87216] h-full relative"></div>
              {icon && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-14 h-14">
                  <img 
                    src={urlFor(icon).url()} 
                    alt="Hero icon"
                    className="w-14 h-14 object-contain"
                  />
                </div>
              )}
            </div>
          )}
          
          {/* Main content area */}
          <div className="w-full ml-6 lg:ml-12">
          <main>
            <div className="flex items-center h-full flex-col gap-6 lg:flex-row lg:gap-12 mx-6">
              {/* Left side - Text content */}
              <div className="flex-1 w-full lg:w-1/2">
                {title && (
                  <p 
                    style={{ textAlign: 'left', color: 'var(--title-font-color, #171717)' }} 
                    className="w-full font-bold text-xs tracking-[0.2em] opacity-70 uppercase mb-4 leading-normal"
                  >
                    <GradientText text={title} />
                  </p>
                )}
                <div className="relative">
                  <h1 
                    style={{ textAlign: 'left', color: 'var(--heading-font-color, #171717)' }} 
                    className="w-full font-bold tracking-[-0.02em] text-3xl lg:text-6xl lg:tracking-[-0.03em]"
                  >
                    <GradientText text={heading} />
                  </h1>
                </div>
                {subheading && (
                  <div className="py-10">
                    <p 
                      style={{ textAlign: 'left', color: 'var(--content-font-color, #171717)' }} 
                      className="w-full text-sm opacity-70 lg:text-base leading-normal tracking-normal"
                    >
                      <GradientText text={subheading} />
                    </p>
                  </div>
                )}
              </div>
              
              {/* Right side - Image */}
              {image && (
                <div className="flex-1 w-full lg:w-1/2">
                  <div className="relative">
                    <img
                      src={urlFor(image).url()}
                      alt="Hero Dashboard"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
