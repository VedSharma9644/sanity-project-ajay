import React from 'react';

interface GradientTextProps {
  text: string;
  gradientClasses?: string;
  className?: string;
}

/**
 * Renders text with gradient styling for content wrapped in $ symbols
 * Example: "Easy access to all your $open source data$" 
 * will render "open source data" with gradient styling
 */
export function GradientText({ 
  text, 
  gradientClasses = "bg-gradient-to-r from-[#ed5332] to-[#fcb60a] text-transparent bg-clip-text",
  className = ""
}: GradientTextProps) {
  // Split text by $ markers
  const parts = text.split('$');
  
  if (parts.length === 1) {
    // No gradient markers found, return plain text
    return <span className={className}>{text}</span>;
  }

  // Process parts: even indices are regular text, odd indices are gradient text
  const elements: React.ReactNode[] = [];
  
  parts.forEach((part, index) => {
    if (index % 2 === 0) {
      // Regular text
      if (part) {
        elements.push(
          <span key={index} className={className}>
            {part}
          </span>
        );
      }
    } else {
      // Gradient text
      if (part) {
        elements.push(
          <span key={index} className={`${gradientClasses} ${className}`}>
            {part}
          </span>
        );
      }
    }
  });

  return <>{elements}</>;
}

/**
 * Alternative function that uses different gradient styles
 * Useful for different sections that need different gradient colors
 */
export function GradientTextAlt({ 
  text, 
  gradientClasses = "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text",
  className = ""
}: GradientTextProps) {
  return GradientText({ text, gradientClasses, className });
}

/**
 * Function to check if text contains gradient markers
 */
export function hasGradientMarkers(text: string): boolean {
  return text.includes('$');
}

/**
 * Function to strip gradient markers for plain text display
 */
export function stripGradientMarkers(text: string): string {
  return text.replace(/\$/g, '');
}
