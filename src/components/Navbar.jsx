import { useState } from 'react'
import { Menu, X, Github, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 text-sm md:text-base text-zinc-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-white font-semibold tracking-tight">
            Yusuf<span className="text-pink-400">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <a
              href="mailto:abdullahyusuf@example.com"
              className="ml-3 inline-flex items-center gap-2 text-xs md:text-sm text-white bg-pink-500/90 hover:bg-pink-500 px-3 py-2 rounded-md shadow transition-colors"
            >
              <Mail size={16} /> Contact
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-2 text-xs md:text-sm text-zinc-200 hover:text-white px-3 py-2 rounded-md transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
          </nav>

          <button
            className="md:hidden text-zinc-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#home" onClick={close}>Home</NavLink>
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#portfolio" onClick={close}>Portfolio</NavLink>
            <a
              href="mailto:abdullahyusuf@example.com"
              className="mt-2 inline-flex items-center gap-2 text-sm text-white bg-pink-500/90 hover:bg-pink-500 px-3 py-2 rounded-md shadow transition-colors w-max"
              onClick={close}
            >
              <Mail size={16} /> Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
