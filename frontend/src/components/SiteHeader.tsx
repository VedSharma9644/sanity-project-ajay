'use client'
import React, { useState, useEffect } from 'react'
import { urlFor } from '@/lib/sanity.client'
import { cleanColorValue } from '@/lib/colorUtils'
import { getButtonClasses, getPrimaryButtonWrapperClasses } from '@/lib/buttonStyles'
import type { ButtonStyle, ButtonSize } from '@/lib/buttonStyles'
import { validateHeaderSettings, applyHeaderSettings, removeHeaderSettings, HeaderSettings as HeaderSettingsType } from '@/lib/headerUtils'

type NavLink = {
  label: string
  url: string
}

type CTAButton = {
  name: string
  link: string
  icon?: string
  iconPosition?: 'left' | 'right'
  buttonStyle?: 'primary' | 'secondary' | 'outline' | 'ghost'
  buttonSize?: 'sm' | 'md' | 'lg'
}



type SiteHeaderProps = {
  logo?: any // Sanity image reference
  navLinks?: NavLink[]
  ctaButton?: CTAButton
  headerSettings?: HeaderSettingsType
}

export default function SiteHeader({ 
  logo, 
  navLinks, 
  ctaButton,
  headerSettings
}: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Handle scroll to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false)
      } else if (currentScrollY <= 100) {
        // Only show header when at the very top (within 100px)
        setIsVisible(true)
      }
      // Don't show header when scrolling up from middle/bottom of page
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  // Apply header settings to CSS custom properties
  useEffect(() => {
    // Validate and clean header settings
    const validatedSettings = validateHeaderSettings(headerSettings);
    
    // Apply validated settings
    if (validatedSettings) {
      applyHeaderSettings(validatedSettings);
    }

    // Cleanup function to remove custom properties when component unmounts or settings change
    return () => {
      removeHeaderSettings();
    };
  }, [headerSettings]);

  // Helper function to get button classes based on style and size
  const getLocalButtonClasses = (style: ButtonStyle = 'primary', size: ButtonSize = 'md') => {
    return getButtonClasses(style, size)
  }

  // Helper function to get font weight classes
  const getFontWeightClass = (weight: string = 'normal') => {
    const weightClasses = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    }
    return weightClasses[weight as keyof typeof weightClasses] || 'font-normal'
  }

  // Helper function to render icon
  const renderIcon = (icon: string, position: string = 'right') => {
    const iconClasses = position === 'left' ? 'mr-2' : 'ml-2'
    
    // You can expand this to support different icon types
    // For now, we'll use a simple arrow icon as an example
    return (
      <svg className={`h-4 w-4 ${iconClasses}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    )
  }

  return (
    <header className={`border-b  sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo ? (
              <img
                src={urlFor(logo).url()}
                alt="Brand logo"
                style={{
                  height: headerSettings?.logoSize ? `${headerSettings.logoSize}px` : 'var(--header-logo-size, 32px)',
                  width: 'auto'
                }}
                className="w-auto"
              />
            ) : (
              <h1 className="text-xl font-bold text-gray-900">Open Sauced</h1>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks && navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                style={{
                  fontSize: headerSettings?.menuFontSize ? `${headerSettings.menuFontSize}px` : 'var(--header-menu-font-size, 14px)',
                  color: cleanColorValue(headerSettings?.menuFontColor) || 'var(--header-menu-font-color, #374151)',
                  fontWeight: headerSettings?.menuFontWeight || 'var(--header-menu-font-weight, medium)'
                }}
                className={`px-3 py-2 rounded-md transition-colors duration-200 hover:opacity-80 ${getFontWeightClass(headerSettings?.menuFontWeight)}`}
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            {ctaButton && (
              <>
                {ctaButton.buttonStyle === 'primary' ? (
                  <div className={getPrimaryButtonWrapperClasses()}>
                    <a
                      href={ctaButton.link}
                      className={getLocalButtonClasses(ctaButton.buttonStyle, ctaButton.buttonSize)}
                    >
                      {ctaButton.icon && ctaButton.iconPosition === 'left' && renderIcon(ctaButton.icon, 'left')}
                      {ctaButton.name}
                      {ctaButton.icon && ctaButton.iconPosition !== 'left' && renderIcon(ctaButton.icon, 'right')}
                    </a>
                  </div>
                ) : (
                  <a
                    href={ctaButton.link}
                    className={getLocalButtonClasses(ctaButton.buttonStyle, ctaButton.buttonSize)}
                  >
                    {ctaButton.icon && ctaButton.iconPosition === 'left' && renderIcon(ctaButton.icon, 'left')}
                    {ctaButton.name}
                    {ctaButton.icon && ctaButton.iconPosition !== 'left' && renderIcon(ctaButton.icon, 'right')}
                  </a>
                )}
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navLinks && navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  style={{
                    fontSize: headerSettings?.menuFontSize ? `${headerSettings.menuFontSize}px` : 'var(--header-menu-font-size, 16px)',
                    color: cleanColorValue(headerSettings?.menuFontColor) || 'var(--header-menu-font-color, #374151)',
                    fontWeight: headerSettings?.menuFontWeight || 'var(--header-menu-font-weight, medium)'
                  }}
                  className={`block px-3 py-2 rounded-md ${getFontWeightClass(headerSettings?.menuFontWeight)}`}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CTA Button */}
              {ctaButton && (
                <div className="px-3 py-2">
                  {ctaButton.buttonStyle === 'primary' ? (
                    <div className={getPrimaryButtonWrapperClasses()}>
                      <a
                        href={ctaButton.link}
                        className={`block w-full text-center ${getLocalButtonClasses(ctaButton.buttonStyle, 'md')}`}
                      >
                        {ctaButton.icon && ctaButton.iconPosition === 'left' && renderIcon(ctaButton.icon, 'left')}
                        {ctaButton.name}
                        {ctaButton.icon && ctaButton.iconPosition !== 'left' && renderIcon(ctaButton.icon, 'right')}
                      </a>
                    </div>
                  ) : (
                    <a
                      href={ctaButton.link}
                      className={`block w-full text-center ${getLocalButtonClasses(ctaButton.buttonStyle, 'md')}`}
                    >
                      {ctaButton.icon && ctaButton.iconPosition === 'left' && renderIcon(ctaButton.icon, 'left')}
                      {ctaButton.name}
                      {ctaButton.icon && ctaButton.iconPosition !== 'left' && renderIcon(ctaButton.icon, 'right')}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>


    </header>
  )
}
