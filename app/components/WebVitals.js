'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { useState } from 'react'

export function WebVitals() {
  const [metrics, setMetrics] = useState({})

  useReportWebVitals((metric) => {
    console.log(metric)
    setMetrics((prev) => ({
      ...prev,
      [metric.name]: metric.value
    }))
  })

  // Only show in development or if explicitly requested
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      width: '200px',
      minHeight: '120px',
      background: 'rgba(0,0,0,0.8)',
      color: '#fff',
      padding: '10px',
      borderRadius: '8px',
      zIndex: 9999,
      fontSize: '12px',
      fontFamily: 'monospace'
    }}>
      <b>Web Vitals:</b>
      {Object.entries(metrics).map(([key, val]) => {
        let color = 'lightgreen';
        if (key === 'LCP' && val > 2500) color = 'red';
        else if (key === 'LCP' && val > 1500) color = 'orange';
        
        if (key === 'CLS' && val > 0.1) color = 'red';
        
        return (
          <div key={key} style={{ color }}>
            {key}: {val.toFixed(2)} {key === 'CLS' ? '' : 'ms'}
          </div>
        )
      })}
    </div>
  )
}
