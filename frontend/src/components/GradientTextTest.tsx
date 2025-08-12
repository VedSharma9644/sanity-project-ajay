import React from 'react'
import { GradientText } from '@/lib/gradientText'

export default function GradientTextTest() {
  const testCases = [
    "Easy access to all your $open source data$",
    "$Streamlined Access$",
    "Normal text with $highlighted$ words",
    "Multiple $gradient$ sections in $one$ sentence",
    "No gradient markers here",
    "$Start$ with gradient and $end$ with gradient"
  ]

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Gradient Text Feature Test</h1>
      
      <div className="space-y-6">
        {testCases.map((testCase, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Test Case {index + 1}:</h3>
            <p className="text-sm text-gray-600 mb-2">Input: "{testCase}"</p>
            <div className="text-xl">
              <GradientText text={testCase} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Usage Instructions:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Wrap text with $ symbols to apply gradient styling</li>
          <li>Example: "Easy access to all your $open source data$"</li>
          <li>You can have multiple gradient sections in one text</li>
          <li>If no $ markers are found, text renders normally</li>
        </ul>
      </div>
    </div>
  )
}
