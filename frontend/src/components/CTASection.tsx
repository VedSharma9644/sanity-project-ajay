'use client'
import React from 'react'
import { urlFor } from '@/lib/sanity.client'
import { cleanColorValue } from '@/lib/colorUtils'
import { GradientText } from '@/lib/gradientText'
import { getCTAButtonClasses, getPrimaryButtonWrapperClasses } from '@/lib/buttonStyles'
import type { ButtonStyle, ButtonSize } from '@/lib/buttonStyles'

type CTAButton = {
  text: string
  link: string
  style: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'small' | 'medium' | 'large'
}

type CTASettings = {
  titleColor?: string
  headingColor?: string
  contentColor?: string
  customBackgroundColor?: string
}

type CTASectionProps = {
  icon?: any
  text: string
  subheading?: string
  button: CTAButton
  textAlignment?: 'left' | 'center' | 'right'
  isActive?: boolean
  sideLine?: boolean
  previousSectionHasSideLine?: boolean
  ctaSettings?: CTASettings
  backgroundColor?: string
}

export default function CTASection({
  icon,
  text,
  subheading,
  button,
  textAlignment = 'center',
  isActive = true,
  sideLine = false,
  previousSectionHasSideLine = false,
  ctaSettings,
  backgroundColor
}: CTASectionProps) {
  if (!isActive) return null

  // Helper function to clean text content (remove invisible characters)
  const cleanTextContent = (text: string | undefined): string => {
    if (!text || typeof text !== 'string') return '';
    
    const cleaned = text
      .replace(/[\u200B-\u200D\uFEFF\u2060\u200E\u200F\u202A-\u202E]/g, '') // Remove Unicode control characters
      .replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, ' ') // Replace various space characters with regular space
      .replace(/[\u2000-\u200F\u2028-\u202F\u205F-\u206F]/g, '') // Remove additional Unicode spaces and formatting
      .replace(/[\u2060-\u206F\u200B-\u200F\u2028-\u202F]/g, '')
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
    
    return cleaned;
  };

  // Get button style classes
  const getButtonClasses = () => {
    // Safely get size and style with fallbacks
    const buttonSize = button.size || 'medium';
    const buttonStyle = button.style || 'primary';
    
    // Convert size to ButtonSize type
    const sizeMap: Record<string, ButtonSize> = {
      'small': 'sm',
      'medium': 'md', 
      'large': 'lg'
    };
    
    const mappedSize = sizeMap[buttonSize] || 'md';
    const mappedStyle = buttonStyle as ButtonStyle;
    
    return getCTAButtonClasses(mappedStyle, mappedSize);
  }

  // Get text alignment class
  const getTextAlignmentClass = () => {
    switch (textAlignment) {
      case 'left':
        return 'text-left'
      case 'right':
        return 'text-right'
      default:
        return 'text-center'
    }
  }

  // Get color styles for text elements
  const getTitleStyle = () => {
    if (ctaSettings?.titleColor) {
      return { color: cleanColorValue(ctaSettings.titleColor) };
    }
    return {};
  };

  const getHeadingStyle = () => {
    if (ctaSettings?.headingColor) {
      return { color: cleanColorValue(ctaSettings.headingColor) };
    }
    return {};
  };

  const getContentStyle = () => {
    if (ctaSettings?.contentColor) {
      return { color: cleanColorValue(ctaSettings.contentColor) };
    }
    return {};
  };

  // Get background color style
  const getBackgroundStyle = () => {
    if (ctaSettings?.customBackgroundColor) {
      return { backgroundColor: cleanColorValue(ctaSettings.customBackgroundColor) };
    }
    if (backgroundColor && backgroundColor !== 'default') {
      const colorMap: Record<string, string> = {
        'primary': '#F87216', // Orange
        'secondary': '#EAB308', // Yellow
        'dark': '#111827', // Gray-900
        'light': '#F3F4F6' // Gray-100
      };
      
      if (colorMap[backgroundColor]) {
        return { backgroundColor: colorMap[backgroundColor] };
      }
      
      // If it's a custom color value, use it directly
      return { backgroundColor: cleanColorValue(backgroundColor) };
    }
    return {};
  };

  return (
    <section className="w-full py-16" style={getBackgroundStyle()}>
      <div className="w-full max-w-[1256px] mx-auto px-6">
        <div className="flex w-full relative">
          {/* Side line decoration */}
          {sideLine && (
            <div className="absolute left-0 top-0 w-[1.5px] h-full z-10">
              <div className="absolute inset-0 bg-[#F87216] blur-sm"></div>
              <div className="bg-[#F87216] h-full relative"></div>
              {icon && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-14 h-14">
                  <img 
                    src={urlFor(icon).url()} 
                    alt="CTA icon"
                    className="w-14 h-14 object-contain"
                  />
                </div>
              )}
            </div>
          )}
          
          {/* Main content area */}
          <div className={`w-full ${sideLine ? 'ml-6 lg:ml-12' : ''}`}>
            <div className={`${getTextAlignmentClass()} max-w-4xl mx-auto`}>
              {/* Icon */}
              {icon && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={urlFor(icon).url()}
                    alt="CTA Icon"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              )}
              
              {/* Main Text */}
              <h2 
                className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900"
                style={getTitleStyle()}
              >
                <GradientText text={cleanTextContent(text)} />
              </h2>
              
              {/* Subheading */}
              {subheading && (
                <p 
                  className="text-xl lg:text-2xl mb-8 leading-relaxed text-gray-700 opacity-90"
                  style={getHeadingStyle()}
                >
                  <GradientText text={cleanTextContent(subheading)} />
                </p>
              )}
              
              {/* CTA Button */}
              <div className="flex justify-center">
                {(cleanTextContent(button.style) === 'primary' || !button.style) ? (
                  <div className={getPrimaryButtonWrapperClasses()}>
                    <a
                      href={button.link}
                      className={getButtonClasses()}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={getContentStyle()}
                    >
                      <GradientText text={cleanTextContent(button.text)} />
                    </a>
                  </div>
                ) : (
                  <a
                    href={button.link}
                    className={getButtonClasses()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={getContentStyle()}
                  >
                    <GradientText text={cleanTextContent(button.text)} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
