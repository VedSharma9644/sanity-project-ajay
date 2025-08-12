'use client'

import { useEffect, useState } from 'react'

export default function DebugWebSocket() {
  const [wsStatus, setWsStatus] = useState<string>('Initializing...')
  const [envVars, setEnvVars] = useState<any>({})
  const [testResults, setTestResults] = useState<any[]>([])
  const [debugInfo, setDebugInfo] = useState<string>('')

  useEffect(() => {
    // Log environment variables
    const env = {
      NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
      NEXT_PUBLIC_SANITY_STUDIO_URL: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
      SANITY_API_TOKEN: process.env.SANITY_API_TOKEN ? 'Set' : 'Not Set',
      NODE_ENV: process.env.NODE_ENV
    }
    
    console.log('🔍 Environment Variables:', env)
    console.log('🔍 All process.env keys:', Object.keys(process.env).filter(key => key.includes('SANITY')))
    console.log('🔍 process.env.NEXT_PUBLIC_SANITY_PROJECT_ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
    console.log('🔍 process.env.SANITY_API_TOKEN length:', process.env.SANITY_API_TOKEN?.length || 0)
    
    setEnvVars(env)
    
    // Add debug info
    const debug = `
      Environment check:
      - NEXT_PUBLIC_SANITY_PROJECT_ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'undefined'}
      - NEXT_PUBLIC_SANITY_DATASET: ${process.env.NEXT_PUBLIC_SANITY_DATASET || 'undefined'}
      - NEXT_PUBLIC_SANITY_STUDIO_URL: ${process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'undefined'}
      - SANITY_API_TOKEN: ${process.env.SANITY_API_TOKEN ? 'Set (' + process.env.SANITY_API_TOKEN.length + ' chars)' : 'Not Set'}
      - NODE_ENV: ${process.env.NODE_ENV}
      
      Note: SANITY_API_TOKEN is server-side only and won't show in client-side debug.
      Check server console logs for token status.
    `
    setDebugInfo(debug)

    // Test different WebSocket URL formats with authentication
    const testUrls = [
      `wss://6omo2x0p.api.sanity.io/v2022-06-30/socket/production?tag=sanity.studio`,
      `wss://6omo2x0p.api.sanity.io/v2025-08-03/socket/production?tag=sanity.studio`,
      `wss://6omo2x0p.api.sanity.io/v2023-05-03/socket/production?tag=sanity.studio`,
      `wss://6omo2x0p.api.sanity.io/v2023-08-01/socket/production?tag=sanity.studio`
    ]

    const results: any[] = []

    testUrls.forEach((url, index) => {
      setTimeout(() => {
        console.log(`🧪 Testing WebSocket connection ${index + 1}:`, url)
        
        try {
          const ws = new WebSocket(url)
          
          ws.onopen = () => {
            console.log(`✅ Test ${index + 1} WebSocket Connected Successfully`)
            results.push({ url, status: 'Connected', index })
            setTestResults([...results])
            
            // Keep connection open longer to test stability
            setTimeout(() => {
              if (ws.readyState === WebSocket.OPEN) {
                ws.close()
              }
            }, 5000)
          }
          
          ws.onclose = (event) => {
            console.log(`❌ Test ${index + 1} WebSocket Closed:`, event.code, event.reason)
            const status = event.code === 1005 ? 'Closed: No Status (Auth Issue?)' : `Closed: ${event.code}`
            results.push({ url, status, index })
            setTestResults([...results])
          }
          
          ws.onerror = (error) => {
            console.log(`🚨 Test ${index + 1} WebSocket Error:`, error)
            results.push({ url, status: 'Error', index })
            setTestResults([...results])
          }
          
        } catch (error) {
          console.log(`🚨 Test ${index + 1} WebSocket Failed:`, error)
          results.push({ url, status: 'Failed', index })
          setTestResults([...results])
        }
      }, index * 1000) // Stagger tests by 1 second
    })

    // Set initial status
    setWsStatus('Testing multiple connections...')
  }, [])

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#000', 
      color: '#fff', 
      padding: '10px', 
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '500px',
      maxHeight: '80vh',
      overflow: 'auto'
    }}>
      <h4>🔧 WebSocket Debug</h4>
      <p><strong>Status:</strong> {wsStatus}</p>
      <p><strong>Project ID:</strong> {envVars.NEXT_PUBLIC_SANITY_PROJECT_ID || 'Not Set'}</p>
      <p><strong>Dataset:</strong> {envVars.NEXT_PUBLIC_SANITY_DATASET || 'Not Set'}</p>
      <p><strong>Studio URL:</strong> {envVars.NEXT_PUBLIC_SANITY_STUDIO_URL || 'Not Set'}</p>
      <p><strong>Token:</strong> {envVars.SANITY_API_TOKEN}</p>
      <p><strong>Environment:</strong> {envVars.NODE_ENV}</p>
      
      <div style={{ marginTop: '10px', padding: '5px', background: '#333', borderRadius: '3px' }}>
        <p style={{ fontSize: '10px', color: '#ff9800' }}>
          <strong>⚠️ Note:</strong> SANITY_API_TOKEN is server-side only. 
          Check server console logs for token status.
        </p>
      </div>
      
      <div style={{ marginTop: '10px', padding: '5px', background: '#222', borderRadius: '3px' }}>
        <h5 style={{ fontSize: '11px', margin: '0 0 5px 0' }}>Debug Info:</h5>
        <pre style={{ fontSize: '9px', margin: 0, whiteSpace: 'pre-wrap' }}>{debugInfo}</pre>
      </div>
      
      <h5>Test Results:</h5>
      {testResults.map((result, index) => (
        <div key={index} style={{ marginBottom: '5px', padding: '2px' }}>
          <div style={{ fontSize: '10px', color: '#ccc' }}>Test {result.index + 1}:</div>
          <div style={{ fontSize: '10px', wordBreak: 'break-all' }}>{result.url}</div>
          <div style={{ 
            fontSize: '10px', 
            color: result.status.includes('Connected') ? '#4CAF50' : 
                   result.status.includes('Error') ? '#f44336' : '#ff9800'
          }}>
            Status: {result.status}
          </div>
        </div>
      ))}
    </div>
  )
} 