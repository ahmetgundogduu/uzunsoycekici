import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";
import { INSURANCE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/hero-truck.png"
            alt="Uzunsoy Çekici yol yardım aracı"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-brand/40 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-brand" />
          <div className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-6 sm:left-6 sm:right-auto">
            <p className="inline-flex max-w-full items-center gap-2.5 rounded-md bg-white/95 px-3.5 py-2.5 shadow-lg">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <ShieldIcon />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-accent">
                  Sigortalı Taşıma
                </span>
                <span className="block text-sm font-extrabold leading-tight text-brand">
                  {INSURANCE.amount}’ye kadar
                </span>
              </span>
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center px-4 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_right,rgba(26,68,120,0.45),transparent_55%)] lg:block" />
          <div className="relative max-w-xl">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
              Yolda Mı Kaldınız? En Hızlı ve Güvenilir Çekici Hizmeti
            </h1>
            <p className="mt-3 text-base text-white/75 sm:text-lg">
              Fiyat Al ve Biz Sizi Arayalım
            </p>
            <p className="mt-2 text-sm font-semibold text-white/90 sm:text-base">
              {INSURANCE.text}
            </p>
            <div className="mt-7 sm:mt-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5l7 3v5.2c0 4.2-2.8 7.9-7 9.3-4.2-1.4-7-5.1-7-9.3V6.5l7-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2l2 2 4-4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
