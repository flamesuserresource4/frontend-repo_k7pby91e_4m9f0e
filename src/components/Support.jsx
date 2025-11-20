import { LifeBuoy, Mail, FileCheck } from "lucide-react";

export default function Support() {
  return (
    <section id="support" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 grid place-items-center ring-1 ring-white/10">
                <LifeBuoy className="text-blue-300" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold">Activation help</p>
                <p className="text-sm text-blue-200/80">Step-by-step guidance to activate your product key</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 grid place-items-center ring-1 ring-white/10">
                <Mail className="text-emerald-300" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold">Email delivery</p>
                <p className="text-sm text-blue-200/80">Keys arrive instantly via email after successful payment</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 grid place-items-center ring-1 ring-white/10">
                <FileCheck className="text-pink-300" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold">Warranty included</p>
                <p className="text-sm text-blue-200/80">Every purchase covered with replacement guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
