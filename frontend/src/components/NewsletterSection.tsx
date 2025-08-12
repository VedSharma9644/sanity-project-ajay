'use client'

import React from 'react'
import Button from './ui/Button'

type NewsletterSectionProps = {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function NewsletterSection({ 
  title, 
  description, 
  buttonText, 
  buttonLink 
}: NewsletterSectionProps) {
  // Function to apply gradient styling to "The fast track"
  const renderTitleWithGradient = (titleText: string) => {
    const parts = titleText.split('The fast track')
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
            The fast track
          </span>
          {parts[1]}
        </>
      )
    }
    return titleText
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
          {renderTitleWithGradient(title)}
        </h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>
        {buttonLink && (
          <Button
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  )
} 