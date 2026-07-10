'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // You can send this to your analytics service
    console.log(metric)
  })

  return null
}
