import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[80vh] sm:h-[85vh] md:h-[90vh]">
        <Spline
          scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs sm:text-sm mb-4">
              <span className="opacity-80">Interactive 3D</span>
              <span className="opacity-80">•</span>
              <span className="opacity-80">AI Coding Assistant</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Code faster with an AI pair programmer
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black/70">
              Search, generate, and explain code in seconds. A modern, playful experience inspired by Blackbox AI.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-black text-white hover:bg-black/90 transition">
                <span>Start for free</span>
                <ArrowRight size={16} />
              </button>
              <button className="px-5 py-3 rounded-md border border-black/10 hover:border-black/20 transition bg-white/70 backdrop-blur">
                Live demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
