import { useRef, useEffect } from 'react'

export function useRenderCount(componentName: string = 'Component') {
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current += 1
    console.log(`${componentName} rendered:`, renderCount.current, 'times')
  })

  // Don't return anything to avoid affecting renders
  return null
} 