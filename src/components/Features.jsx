import { ShieldCheck, Zap, BadgeCheck, Headphones } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <ShieldCheck className="text-emerald-400" size={22} />,
      title: "Genuine keys",
      desc: "We source authentic licenses with warranty and invoice for every purchase.",
    },
    {
      icon: <Zap className="text-yellow-300" size={22} />,
      title: "Instant delivery",
      desc: "Receive your license key in seconds via email and on the order page.",
    },
    {
      icon: <BadgeCheck className="text-blue-300" size={22} />,
      title: "Secure checkout",
      desc: "Encrypted payments and fraud protection for peace of mind.",
    },
    {
      icon: <Headphones className="text-pink-300" size={22} />,
      title: "Lifetime support",
      desc: "Friendly human support to guide activation and troubleshooting.",
    },
  ];

  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/5 grid place-items-center ring-1 ring-white/10">
                  {f.icon}
                </div>
                <div>
                  <p className="text-white font-medium">{f.title}</p>
                  <p className="text-sm text-blue-200/80 mt-1">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
