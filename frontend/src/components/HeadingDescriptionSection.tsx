'use client'
import { GradientText } from '@/lib/gradientText'

type HeadingDescriptionSectionProps = {
  title: string
  description?: string
}

export default function HeadingDescriptionSection({ 
  title, 
  description 
}: HeadingDescriptionSectionProps) {

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          <GradientText text={title} />
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