export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Yusuf. All rights reserved.</p>
        <div className="text-xs">Built with love and creativity.</div>
      </div>
    </footer>
  )
}
