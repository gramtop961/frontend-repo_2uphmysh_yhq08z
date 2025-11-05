export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-black flex items-center justify-center">
            <span className="text-white text-sm font-semibold">BB</span>
          </div>
          <span className="font-semibold">Blackbox Clone</span>
        </div>
        <p className="text-sm text-black/60">© {new Date().getFullYear()} Blackbox Clone. Built for demo purposes.</p>
      </div>
    </footer>
  );
}
