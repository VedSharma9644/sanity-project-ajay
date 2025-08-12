'use client'

import { useEffect, useState } from 'react'

export default function EnvTest() {
  const [envData, setEnvData] = useState<any>({})

  useEffect(() => {
    // Test all possible environment variable access methods
    const data = {
      // Direct access
      direct: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
        NEXT_PUBLIC_SANITY_STUDIO_URL: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
        SANITY_API_TOKEN: process.env.SANITY_API_TOKEN ? 'Set' : 'Not Set',
        NODE_ENV: process.env.NODE_ENV
      },
      // All env keys containing SANITY
      allSanityKeys: Object.keys(process.env).filter(key => key.includes('SANITY')),
      // All env keys containing NEXT_PUBLIC
      allNextPublicKeys: Object.keys(process.env).filter(key => key.includes('NEXT_PUBLIC')),
      // All env keys
      allKeys: Object.keys(process.env).slice(0, 20) // First 20 keys
    }
    
    console.log('🔍 Environment Test Data:', data)
    setEnvData(data)
  }, [])

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      left: '10px', 
      background: '#000', 
      color: '#fff', 
      padding: '10px', 
      borderRadius: '5px',
      fontSize: '10px',
      zIndex: 9998,
      maxWidth: '400px',
      maxHeight: '80vh',
      overflow: 'auto'
    }}>
      <h4>🔍 Environment Test</h4>
      
      <h5>Direct Access:</h5>
      <pre style={{ fontSize: '8px', margin: '5px 0' }}>
        {JSON.stringify(envData.direct, null, 2)}
      </pre>
      
      <h5>All SANITY Keys:</h5>
      <pre style={{ fontSize: '8px', margin: '5px 0' }}>
        {JSON.stringify(envData.allSanityKeys, null, 2)}
      </pre>
      
      <h5>All NEXT_PUBLIC Keys:</h5>
      <pre style={{ fontSize: '8px', margin: '5px 0' }}>
        {JSON.stringify(envData.allNextPublicKeys, null, 2)}
      </pre>
      
      <h5>First 20 Env Keys:</h5>
      <pre style={{ fontSize: '8px', margin: '5px 0' }}>
        {JSON.stringify(envData.allKeys, null, 2)}
      </pre>
    </div>
  )
} 