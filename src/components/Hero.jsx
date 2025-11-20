import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600 blur-[120px] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/90">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Instant digital delivery
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Premium software licenses at fair prices
            </h1>
            <p className="mt-4 text-base sm:text-lg text-blue-100/90">
              Shop genuine keys for Microsoft, Adobe, Autodesk and more. Secure checkout, lifetime support, and instant email delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#catalog" className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow-md shadow-blue-600/30 ring-1 ring-white/20 hover:from-blue-500 hover:to-indigo-500 transition">
                Browse catalog
              </a>
              <a href="#support" className="rounded-xl border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5 transition">
                How it works
              </a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl border border-white/10 bg-slate-900/50 overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
