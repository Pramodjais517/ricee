'use client'
import React from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
  const pathname = usePathname()
  
  // Return null if pathname is not available (during build time)
  if (!pathname) return null
  
  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean)
    const breadcrumbs = [
      { name: 'Home', href: '/', current: pathname === '/' }
    ]
    
    if (paths.length > 0) {
      paths.forEach((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`
        const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
        breadcrumbs.push({
          name,
          href,
          current: index === paths.length - 1
        })
      })
    }
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  if (breadcrumbs.length <= 1) return null
  
  return (
    <nav className="flex py-4 px-4 bg-[#FFF8F2] border-b border-[#FFE6CE]" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 max-w-6xl mx-auto w-full">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <svg className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {breadcrumb.current ? (
              <span className="text-[#762023] font-medium" aria-current="page">
                {breadcrumb.name}
              </span>
            ) : (
              <NextLink
                href={breadcrumb.href}
                className="text-gray-600 hover:text-[#762023] transition-colors"
              >
                {breadcrumb.name}
              </NextLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
