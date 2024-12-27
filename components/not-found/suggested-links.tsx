import Link from 'next/link'

const links = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Our Products' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
]

export default function SuggestedLinks() {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">You might be looking for:</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
