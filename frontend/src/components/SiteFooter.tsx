'use client'

type SocialLink = {
  platform: string
  url: string
  icon?: {
    asset: {
      url: string
    }
  }
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
  logo?: { 
    asset: { 
      url: string 
    } 
  }
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
    <footer className="w-full min-h-[200px] bg-footerBG pb-10">
      <div style={{ paddingBottom: '0px', paddingTop: '0px' }} className="w-full max-w-[1256px] mx-auto px-6 h-fit flex justify-center flex-col items-center">
        {/* Logo Section */}
        <div className="w-full pt-10 pb-16 largeTablet:pt-12 mb-[30px]">
          <div className="w-[140px] h-6 relative">
            {logo?.asset?.url ? (
              <img 
                alt="Brand logo" 
                loading="lazy" 
                width="140" 
                height="24" 
                decoding="async" 
                style={{ color: 'transparent' }} 
                src={logo.asset.url}
              />
            ) : (
              <img 
                alt="OpenSauced logo" 
                loading="lazy" 
                width="140" 
                height="24" 
                decoding="async" 
                style={{ color: 'transparent' }} 
                src="/_next/static/media/brandLogo.4259030a.svg"
              />
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="w-full flex flex-row">
          {/* Socials Section */}
          <div className="w-1/4">
            <p className="font-bold text-textPrimary opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8">SOCIALS</p>
            <div className="flex flex-wrap relative gap-x-3 pr-2">
              {socialLinks && socialLinks.length > 0 ? (
                socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center cursor-pointer">
                    <a href={link.url} target="_blank" className="opacity-70">
                      {link.icon?.asset?.url ? (
                        <img 
                          alt={link.platform} 
                          loading="lazy" 
                          width="18" 
                          height="18" 
                          decoding="async" 
                          style={{ color: 'transparent' }} 
                          src={link.icon.asset.url}
                        />
                      ) : (
                        <div className="w-[18px] h-[18px] bg-gray-400 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{link.platform.charAt(0).toUpperCase()}</span>
                        </div>
                      )}
                    </a>
                  </div>
                ))
              ) : (
                // Fallback social icons if no CMS data
                <>
                  <div className="flex items-center cursor-pointer">
                    <a href="https://twitter.com/saucedopen" target="_blank" className="opacity-70">
                      <img 
                        alt="X" 
                        loading="lazy" 
                        width="18" 
                        height="18" 
                        decoding="async" 
                        style={{ color: 'transparent' }} 
                        src="/_next/static/media/xLogoW.1d9b0312.svg"
                      />
                    </a>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <a href="https://github.com/open-sauced" target="_blank" className="opacity-70">
                      <img 
                        alt="Github" 
                        loading="lazy" 
                        width="18" 
                        height="18" 
                        decoding="async" 
                        style={{ color: 'transparent' }} 
                        src="/_next/static/media/githubLogoW.c4f317d4.svg"
                      />
                    </a>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <a href="https://instagram.com/opensauced" target="_blank" className="opacity-70">
                      <img 
                        alt="Instagram" 
                        loading="lazy" 
                        width="18" 
                        height="18" 
                        decoding="async" 
                        style={{ color: 'transparent' }} 
                        src="/_next/static/media/instagramLogoW.c2ad9424.svg"
                      />
                    </a>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <a href="https://youtube.com/opensauced" target="_blank" className="opacity-70">
                      <img 
                        alt="Youtube" 
                        loading="lazy" 
                        width="18" 
                        height="18" 
                        decoding="async" 
                        style={{ color: 'transparent' }} 
                        src="/_next/static/media/youtubeLogoW.7cc0879e.svg"
                      />
                    </a>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <a href="https://dev.to/opensauced" target="_blank" className="opacity-70">
                      <img 
                        alt="Dev" 
                        loading="lazy" 
                        width="18" 
                        height="18" 
                        decoding="async" 
                        style={{ color: 'transparent' }} 
                        src="/_next/static/media/devLogoW.591a09a5.svg"
                      />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Menu Section */}
          <div className="w-1/4">
            <p className="font-bold text-textPrimary opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8">MENU</p>
            <div className="w-full flex flex-col">
              <div className="cursor-pointer">
                <a href="/about">
                  <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3">About</p>
                </a>
              </div>
              <div className="cursor-pointer">
                <a href="/blog">
                  <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3">Blog</p>
                </a>
              </div>
              <div className="cursor-pointer">
                <a href="/changelog">
                  <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3">Changelog</p>
                </a>
              </div>
              <div className="cursor-pointer">
                <a href="/cli">
                  <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3">CLI</p>
                </a>
              </div>
            </div>
          </div>

          {/* More Sauce Section */}
          <div className="w-1/4">
            <p className="font-bold text-textPrimary opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8">More Sauce</p>
            <div className="w-full flex flex-col">
              <a href="https://opensauced.pizza/docs" target="_blank">
                <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3">opensauced.pizza/docs</p>
              </a>
              <a href="https://news.opensauced.pizza" target="_blank">
                <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3">news.opensauced.pizza</p>
              </a>
              <a href="https://opensauced.pizza/learn" target="_blank">
                <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3">opensauced.pizza/learn</p>
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="w-1/4">
            <p className="font-bold text-textPrimary opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8">Contact Us</p>
            <div className="w-full flex flex-col">
              <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                <a href="mailto:hello@opensauced.pizza">hello@opensauced.pizza</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="w-full pt-9 mt-7 flex flex-col-reverse border-t-[0.5px] border-gray-700 largeTablet:flex-row largeTablet:mt-12">
          <div className="flex-grow">
            <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.35]">
              © 2025 Open Sauced, INC. All rights reserved.
            </p>
          </div>
          <div className="flex mb-5 largeTablet:mb-0">
            <div className="flex">
              <a href="https://app.termly.io/document/privacy-policy/5e303854-d262-468a-80ec-54b645d01c2e" target="_blank">
                <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.35]">Privacy</p>
              </a>
              <div className="mx-2">
                <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.35]">•</p>
              </div>
            </div>
            <div className="flex">
              <a href="https://app.termly.io/document/terms-of-use-for-saas/03e4e1c1-53ad-4fc4-b415-5c3f0e8c25ef" target="_blank">
                <p className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.35]">Terms</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
