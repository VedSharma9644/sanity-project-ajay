'use client'

import { urlFor } from '@/lib/sanity.client'

type TeamSectionProps = {
  label?: string
  title: string
  description?: string
  icon?: any
  mainImage?: any
}

export default function TeamSection({ 
  label, 
  title, 
  description, 
  icon, 
  mainImage 
}: TeamSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {label && (
              <div className="flex items-center gap-2">
                {icon && (
                  <img 
                    src={urlFor(icon).url()} 
                    alt={label} 
                    className="w-6 h-6"
                  />
                )}
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                  {label}
                </span>
              </div>
            )}
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            
            {description && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          
          {/* Right Image */}
          {mainImage && (
            <div className="relative">
              <img 
                src={urlFor(mainImage).url()} 
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
