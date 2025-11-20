import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import Support from './components/Support';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Catalog />
      <Support />
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-blue-200/70">
          © {new Date().getFullYear()} SoftHub — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
