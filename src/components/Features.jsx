import { Code, Sparkles, Search, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Code Search',
    desc: 'Find snippets across languages and frameworks with semantic search.'
  },
  {
    icon: Code,
    title: 'Generate Code',
    desc: 'Turn natural language into working functions, tests, and docs.'
  },
  {
    icon: Sparkles,
    title: 'Explain & Refactor',
    desc: 'Understand complex codebases and improve code quality with AI.'
  },
  {
    icon: ShieldCheck,
    title: 'Private & Secure',
    desc: 'Your code stays yours. We use secure infrastructure and controls.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What you can do</h2>
          <p className="mt-3 text-black/70">Everything you need to accelerate from idea to implementation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl border border-black/10 bg-white hover:shadow-lg transition">
              <div className="h-11 w-11 rounded-lg bg-black text-white flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-black/70 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
