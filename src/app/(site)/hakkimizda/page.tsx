import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ABOUT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Hakkımızda | ${SITE.name}`,
  description:
    "Uzunsoy Çekici’nin hikâyesi, misyonu, vizyonu ve değerleri. 20 yıllık tecrübe ile 7/24 yol yardım.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={ABOUT.introTitle}
        description={ABOUT.intro}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-muted">
            <Image
              src="/images/team.png"
              alt="Uzunsoy Çekici profesyonel ekibi"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-brand sm:text-3xl">
              Güvenilir Yol Yardımın Adresi
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {ABOUT.story}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              İstanbul ve çevre illerde gece gündüz hizmet veriyor; acil çekici,
              lastik değişimi, akü takviyesi ve şehirler arası araç taşıma
              ihtiyaçlarınızda yanınızda oluyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Misyon
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-brand sm:text-2xl">
              {ABOUT.mission.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {ABOUT.mission.text}
            </p>
          </article>
          <article className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Vizyon
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-brand sm:text-2xl">
              {ABOUT.vision.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {ABOUT.vision.text}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-brand sm:text-3xl">
              Değerlerimiz
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Her işimizde aynı standartları koruruz.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {ABOUT.values.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-border bg-surface-muted/60 p-5"
              >
                <h3 className="text-lg font-bold text-brand">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <Image
            src="/images/fleet.png"
            alt="Uzunsoy Çekici filo aracı"
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand/75" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Yolda kaldığınızda bir telefon uzağınızdayız
            </h2>
            <p className="mt-3 text-white/75">
              7/24 acil çekici hattımızla hemen iletişime geçin.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  );
}
