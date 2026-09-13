import Image from "next/image";
import Link from "next/link";
import { ABOUT } from "@/lib/constants";

export function AboutTeaser() {
  return (
    <section className="bg-surface-muted py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-lg bg-brand/10 lg:mx-0 lg:max-w-none">
          <Image
            src="/images/team.png"
            alt="Uzunsoy Çekici ekibi"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 90vw, 480px"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
            Hakkımızda
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-brand sm:text-3xl">
            {ABOUT.introTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {ABOUT.intro}
          </p>
          <Link
            href="/hakkimizda"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            Devamını Oku
          </Link>
        </div>
      </div>
    </section>
  );
}
