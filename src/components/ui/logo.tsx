'use client'

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  // Show a simple placeholder while mounting
  if (!mounted) {
    return <div className={cn('w-8 h-8 relative', className)} />
  }

  return (
    <div className={cn('w-8 h-8 relative', className)}>
      <img
        key={resolvedTheme} // Force remount when theme changes
        src={resolvedTheme === 'dark' ? '/logo-dark-new.svg' : '/logo-light-new.svg'}
        alt="ProFlow Logo"
        className="w-full h-full"
      />
    </div>
  )
}
