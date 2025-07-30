'use client'

type HeroSectionProps = {
  headline: string
  subtext?: string
}

export default function HeroSection({ headline, subtext }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          {headline}
        </h1>
        {subtext && (
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {subtext}
          </p>
        )}
      </div>
    </section>
  )
}
