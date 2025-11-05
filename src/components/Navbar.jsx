import { Rocket, Code, Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-black flex items-center justify-center">
            <span className="text-white text-sm font-semibold">BB</span>
          </div>
          <span className="font-semibold tracking-tight text-xl">Blackbox Clone</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
          <a className="hover:text-black transition" href="#features">Features</a>
          <a className="hover:text-black transition" href="#security">Security</a>
          <a className="hover:text-black transition" href="#pricing">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-black/10 hover:border-black/20 transition text-sm">
            <Shield size={16} />
            <span>Sign in</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white hover:bg-black/90 transition text-sm">
            <Rocket size={16} />
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
}
