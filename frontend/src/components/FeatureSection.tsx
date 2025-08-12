import React from 'react'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import { GradientText } from '@/lib/gradientText'
import { cleanColorValue } from '@/lib/colorUtils'
import PillTag from './ui/PillTag'

type FeatureColumn = {
  columnTitle: string
  columnContent: string
}

type FeatureSectionProps = {
  icon?: any
  title?: string
  heading?: string
  content?: string
  columns?: FeatureColumn[]
  isActive?: boolean
  sideLine?: boolean
  previousSectionHasSideLine?: boolean
  fontSettings?: {
    columnTitleFontColor?: string
    columnContentFontColor?: string
    columnLayout?: string
  }
}

export default function FeatureSection({
  icon,
  title,
  heading,
  content,
  columns,
  isActive,
  sideLine,
  previousSectionHasSideLine,
  fontSettings
}: FeatureSectionProps) {

  // Helper function to clean text content (remove invisible characters)
  const cleanTextContent = (text: string | undefined): string => {
    if (!text || typeof text !== 'string') return '';
    return text
      .replace(/[\u200B-\u200D\uFEFF\u2060\u200E\u200F\u202A-\u202E]/g, '') // Remove Unicode control characters
      .replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, ' ') // Replace space characters
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
  };

  if (!isActive) return null;

  const getColumnLayout = () => {
    if (!fontSettings?.columnLayout) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

    const cleanedColumnLayout = cleanTextContent(fontSettings.columnLayout);
    const flexClasses = cleanedColumnLayout === 'flex' ? 'flex flex-col lg:flex-row gap-8' : '';

    if (flexClasses) return flexClasses;

    switch (cleanedColumnLayout) {
      case '1':
        return 'grid-cols-1';
      case '2':
        return 'grid-cols-1 md:grid-cols-2';
      case '3':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case '4':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  if (sideLine) {
    // Traditional side line layout
    return (
      <div className="w-full max-w-[1256px] mx-auto px-6 h-fit flex justify-center flex-col items-center">
        <div className="flex w-full relative">
          {/* Left side line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1.5px]">
            <div className="absolute inset-0 bg-[#F87216] blur-sm"></div>
            <div className="bg-[#F87216] h-full relative"></div>
            {icon && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-14 h-14">
                <img 
                  src={urlFor(icon).url()} 
                  alt="Feature icon"
                  className="w-14 h-14 object-contain"
                />
              </div>
            )}
          </div>

          {/* Main content area */}
          <div className="w-full ml-6 lg:ml-12">
            <div className="pb-14 largeTablet:mb-32">
              <div className="flex gap-y-24 py-10 flex-col-reverse largeTablet:flex-col">
                <div className="flex flex-col gap-y-12 mx-6">
                  {/* Section Title */}
                  {title && (
                    <div>
                      <PillTag>
                        {cleanTextContent(title)}
                      </PillTag>
                    </div>
                  )}

                  {/* Heading */}
                  <div className="relative largeTablet:max-w-[600px]">
                    {heading && (
                      <div>
                        <h2
                          style={{ textAlign: 'left', color: 'var(--heading-font-color, #171717)' }}
                          className="w-full font-bold tracking-[-0.02em] text-3xl largeTablet:text-5xl"
                        >
                          <GradientText text={heading} />
                        </h2>
                      </div>
                    )}
                  </div>

                  {/* Feature Section Content */}
                  {content && (
                    <div className="mt-6">
                      <p style={{ color: 'var(--content-font-color, #171717)' }} className="text-lg leading-relaxed">
                        {cleanTextContent(content)}
                      </p>
                    </div>
                  )}

                  {/* Feature Columns */}
                  {columns && columns.length > 0 && (
                    <div className="">
                      <div>
                        <div className={`flex gap-8 justify-between w-full ${
                          (cleanColorValue(fontSettings?.columnLayout) || 'row') === 'column'
                            ? 'flex-col'
                            : 'flex-row'
                        }`}>
                          {columns.map((column, index) => (
                            <section key={index} className="items-start flex flex-col gap-4">
                              <span
                                style={{ color: cleanColorValue(fontSettings?.columnTitleFontColor) || 'var(--heading-font-color, #171717)' }}
                                className="text-xl font-semibold"
                              >
                                <GradientText text={column.columnTitle} />
                              </span>
                              <span
                                style={{ color: cleanColorValue(fontSettings?.columnContentFontColor) || 'var(--content-font-color, #171717)' }}
                                className="text-start font-light max-w-lg text-lg"
                              >
                                {(() => {
                                  const cleanedContent = cleanTextContent(column.columnContent);
                                  return cleanedContent || 'No content available';
                                })()}
                              </span>
                            </section>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    // Alternative layout (when sideLine is false)
    return (
      <div className="w-full max-w-[1256px] mx-auto px-6 h-fit flex justify-center flex-col items-center">
        <div className="flex w-full relative">
          {/* "L" shaped line structure - horizontal line (only if previous section has sideline) */}
          {previousSectionHasSideLine && (
            <div className="absolute left-0 top-0 w-1/2 h-[1.5px] z-10">
              <div className="absolute inset-0 bg-[#F87216] blur-sm"></div>
              <div className="bg-[#F87216] h-full relative"></div>
            </div>
          )}

          {/* "L" shaped line structure - vertical line starting from center */}
          <div className="absolute top-0 w-[1.5px] z-10" style={{ height: '50%', left: '50%', transform: 'translateX(-50%)' }}>
            <div className="absolute inset-0 bg-[#F87216] blur-sm"></div>
            <div className="bg-[#F87216] h-full relative"></div>
          </div>

          {/* Glowing circle with quotation marks at the 50% mark */}
          {icon && (
            <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#F87216] rounded-full flex items-center justify-center shadow-lg z-20" style={{ left: '50%' }}>
              <span className="text-white text-xs font-bold">""</span>
            </div>
          )}

          {/* Main content area - positioned below the line structure */}
          <div className="w-full flex justify-center" style={{ minHeight: '300px', paddingTop: '300px' }}>
            <div className="text-center max-w-4xl">
              {/* Section Title */}
              {title && (
                <div className="mb-4">
                  <PillTag className="mx-auto">
                    {cleanTextContent(title)}
                  </PillTag>
                </div>
              )}

              {/* Heading */}
              {heading && (
                <div className="mb-6">
                  <h2 style={{ color: 'var(--heading-font-color, #171717)' }} className="text-4xl lg:text-6xl font-bold">
                    <GradientText text={heading} />
                  </h2>
                </div>
              )}

              {/* Content */}
              {content && (
                <div className="mb-8">
                  <p style={{ color: 'var(--content-font-color, #171717)' }} className="text-lg leading-relaxed">
                    {cleanTextContent(content)}
                  </p>
                </div>
              )}

              {/* Feature Columns */}
              {columns && columns.length > 0 && (
                <div className="mt-8">
                  <div className={`flex gap-8 justify-between w-full ${
                    (cleanColorValue(fontSettings?.columnLayout) || 'row') === 'column'
                      ? 'flex-col'
                      : 'flex-row'
                  }`}>
                    {columns.map((column, index) => (
                      <section key={index} className="items-start flex flex-col gap-4">
                        <span
                          style={{ color: cleanColorValue(fontSettings?.columnTitleFontColor) || 'var(--heading-font-color, #171717)' }}
                          className="text-xl font-semibold"
                        >
                          <GradientText text={column.columnTitle} />
                        </span>
                        <span
                          style={{ color: cleanColorValue(fontSettings?.columnContentFontColor) || 'var(--content-font-color, #171717)' }}
                          className="text-start font-light max-w-lg text-lg"
                        >
                          {(() => {
                            const cleanedContent = cleanTextContent(column.columnContent);
                            return cleanedContent || 'No content available';
                          })()}
                        </span>
                      </section>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
