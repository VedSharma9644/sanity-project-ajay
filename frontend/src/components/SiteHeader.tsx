'use client'
import { useState } from 'react'

type NavLink = {
  label: string
  url: string
}

type SiteHeaderProps = {
  logo?: { asset: { url: string } }
  navLinks?: NavLink[]
  mobileMenuIcon?: { asset: { url: string } }
  useCasesButtonLabel?: string
}

export default function SiteHeader({ 
  logo, 
  navLinks, 
  mobileMenuIcon, 
  useCasesButtonLabel 
}: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUseCasesDropdownOpen, setIsUseCasesDropdownOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo ? (
              <img
                src={logo.asset.url}
                alt="Brand logo"
                className="h-8 w-auto"
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
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            
            {/* Use Cases Button */}
            {useCasesButtonLabel && (
              <div className="relative">
                <button
                  onClick={() => setIsUseCasesDropdownOpen(!isUseCasesDropdownOpen)}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  {useCasesButtonLabel}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isUseCasesDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <a href="/use-cases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Use Case 1
                    </a>
                    <a href="/use-cases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Use Case 2
                    </a>
                    <a href="/use-cases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Use Case 3
                    </a>
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {mobileMenuIcon ? (
                <img
                  src={mobileMenuIcon.asset.url}
                  alt="Menu"
                  className="h-6 w-6"
                />
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navLinks && navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              
              {useCasesButtonLabel && (
                <div className="px-3 py-2">
                  <span className="text-gray-700 text-base font-medium">
                    {useCasesButtonLabel}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Overlay for dropdown */}
      {isUseCasesDropdownOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsUseCasesDropdownOpen(false)}
        />
      )}
    </header>
  )
}
