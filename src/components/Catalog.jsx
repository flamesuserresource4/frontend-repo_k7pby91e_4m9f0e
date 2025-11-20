import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_BASE}/api/software`);
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="catalog" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Popular software</h2>
            <p className="text-blue-200/80 mt-1 text-sm">Carefully curated essentials for creators and professionals</p>
          </div>
        </div>

        {loading ? (
          <p className="text-blue-200/80">Loading catalog…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/10 bg-slate-900/50 overflow-hidden hover:translate-y-[-2px] transition">
                <div className="h-40 w-full bg-white/5">
                  {item.thumbnail_url ? (
                    <img src={item.thumbnail_url} alt={item.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full grid place-items-center text-blue-200/60">No image</div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-xs text-blue-200/70 mt-0.5">{item.vendor} · {item.version}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <p className="text-white font-semibold">${'{'}item.sale_price || item.price{'}'}</p>
                    {item.sale_price && (
                      <span className="text-xs text-blue-200/60 line-through">${'{'}item.price{'}'}</span>
                    )}
                  </div>
                  <a href={`#/product/${item.slug}`} className="mt-4 inline-flex rounded-xl border border-white/15 px-3.5 py-2 text-sm text-white/90 hover:bg-white/5 transition">
                    View details
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
