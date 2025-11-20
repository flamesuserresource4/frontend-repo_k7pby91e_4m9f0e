import { ShoppingCart, Menu, Store, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 grid place-items-center shadow ring-1 ring-white/20">
                <Store className="text-white" size={20} />
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold">SoftHub</p>
                <p className="text-xs text-blue-200/80">Trusted digital licenses</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100/80">
              <a className="hover:text-white transition" href="#features">Why us</a>
              <a className="hover:text-white transition" href="#catalog">Catalog</a>
              <a className="hover:text-white transition" href="#support">Support</a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-xs text-blue-200/80">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Instant delivery</span>
              </div>
              <button className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2 text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/20 hover:from-blue-500 hover:to-indigo-500 transition">
                <ShoppingCart size={18} />
                <span className="text-sm font-medium">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-pink-500 text-[11px] grid place-items-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="md:hidden ml-1 rounded-xl border border-white/10 p-2 text-white/80 hover:text-white" onClick={() => setOpen(!open)}>
                <Menu size={20} />
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 text-sm text-blue-100/80">
              <a className="block py-2 hover:text-white" href="#features">Why us</a>
              <a className="block py-2 hover:text-white" href="#catalog">Catalog</a>
              <a className="block py-2 hover:text-white" href="#support">Support</a>
              <a className="block py-2 hover:text-white flex items-center gap-2" href="tel:+1000000000">
                <Phone size={16} /> +1 000 000 0000
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
