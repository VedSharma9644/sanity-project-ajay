'use client'

type SocialLink = {
  platform: string
  url: string
}

type MenuLink = {
  title: string
  url: string
}

type SauceLink = {
  title: string
  url: string
}

type LegalLink = {
  label: string
  url: string
}

type Contact = {
  email: string
}

type SiteFooterProps = {
  logo?: { asset: { url: string } }
  socialLinks?: SocialLink[]
  menuLinks?: MenuLink[]
  moreSauce?: SauceLink[]
  contact?: Contact
  legalLinks?: LegalLink[]
  copyright?: string
}

export default function SiteFooter({ 
  logo, 
  socialLinks, 
  menuLinks, 
  moreSauce, 
  contact, 
  legalLinks, 
  copyright 
}: SiteFooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="lg:col-span-2">
            {logo && (
              <div className="mb-6">
                <img
                  src={logo.asset.url}
                  alt="Brand logo"
                  className="h-8 w-auto"
                />
              </div>
            )}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    title={link.platform}
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Menu Links */}
          {menuLinks && menuLinks.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2">
                {menuLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* More Sauce */}
          {moreSauce && moreSauce.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">🌶️ More Sauce</h3>
              <ul className="space-y-2">
                {moreSauce.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact */}
        {contact && contact.email && (
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-lg font-semibold mb-2">✉️ Contact</h3>
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {contact.email}
            </a>
          </div>
        )}

        {/* Legal Links and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {copyright && (
              <p className="text-gray-400 text-sm">{copyright}</p>
            )}
            {legalLinks && legalLinks.length > 0 && (
              <div className="flex space-x-6">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
