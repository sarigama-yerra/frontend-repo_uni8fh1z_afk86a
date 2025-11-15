import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-gray-900">Ahmad Chikal</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-gray-900 transition-colors">{l.label}</a>
            ))}
          </nav>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-700" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-gray-700">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
