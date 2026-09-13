import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMap } from "@/components/GoogleMap";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `İletişim | ${SITE.name}`,
  description:
    "Uzunsoy Çekici iletişim bilgileri, adres ve harita. 7/24 acil çekici hattı.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize Ulaşın"
        description="Acil çekici, fiyat teklifi veya genel sorularınız için 7/24 ulaşabilirsiniz."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
          <div>
            <h2 className="text-xl font-extrabold text-brand sm:text-2xl">
              İletişim Bilgileri
            </h2>
            <ul className="mt-6 space-y-5 text-sm sm:text-base">
              <li>
                <p className="text-xs font-bold uppercase tracking-wider text-muted">
                  Telefon
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-1 block text-lg font-bold text-brand hover:text-accent"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-wider text-muted">
                  E-posta
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 block font-semibold text-brand hover:text-accent"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-wider text-muted">
                  Adres
                </p>
                <p className="mt-1 font-semibold text-brand">{SITE.address}</p>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-wider text-muted">
                  Çalışma Saatleri
                </p>
                <p className="mt-1 font-semibold text-brand">{SITE.workingHours}</p>
              </li>
            </ul>

            <div className="mt-8 rounded-lg border border-border bg-surface-muted p-5">
              <h3 className="font-bold text-brand">Mesaj Gönderin</h3>
              <p className="mt-1 mb-4 text-sm text-muted">
                Formu doldurun, en kısa sürede sizi arayalım.
              </p>
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-extrabold text-brand sm:text-2xl">
              Konum
            </h2>
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
}
