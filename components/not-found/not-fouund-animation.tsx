'use client'

import { useEffect, useRef } from 'react'

export default function NotFoundAnimation() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const animate = () => {
      const paths = svg.querySelectorAll('path')
      paths.forEach((path, index) => {
        const length = path.getTotalLength()
        path.style.strokeDasharray = `${length} ${length}`
        path.style.strokeDashoffset = `${length}`
        path.style.animation = `dash 1.5s ease-in-out ${index * 0.1}s forwards`
      })
    }

    animate()
  }, [])

  return (
    <svg ref={svgRef} width="200" height="200" viewBox="0 0 100 100" className="mb-8">
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      <path d="M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50 Z" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M50,30 L50,70" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M30,50 L70,50" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  )
}

