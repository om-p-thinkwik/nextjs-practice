'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../global.css'

export default function AuthLayout() {
  const navLinks = [
    {
      name: 'Register',
      href: '/register',
    },
    {
      name: 'Login',
      href: '/login',
    },
    {
      name: 'Forgot Password',
      href: '/forgot-password',
    },
  ]
  const pathname = usePathname()
  return (
    <>
      <h1>Auth Layout Page</h1>
      <div>
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')
          return (
            <Link className={isActive ? 'font-bold text-red-600' : 'text-blue-800'} href={link.href} key={link.name}>
              {link.name + ' '}
            </Link>
          )
        })}
      </div>
    </>
  )
}
