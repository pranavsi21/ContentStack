'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },

]

interface NavLinkProps {
  href: string
  label: string
}

const NavLink: FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`transition-colors hover:text-primary ${
        isActive ? 'text-blue-600 font-semibold' : 'text-muted-foreground'
      }`}
    >
      {label}
    </Link>
  )
}

const NavBar: FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  )
}

export default NavBar
