import React from 'react'

interface PageBuilderInputProps {
  children: React.ReactNode
}

export function PageBuilderInput(props: PageBuilderInputProps) {
  return (
    <div className="page-builder">
      <div className="page-builder-header">
        <h3>Page Builder</h3>
        <p className="text-sm text-gray-600">
          Add and reorder sections to build your page. Drag sections to change their order.
        </p>
      </div>
      {/* Use the default array input with custom styling */}
      <div className="page-builder-content">
        {props.children}
      </div>
    </div>
  )
} 