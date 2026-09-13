import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-12">
        <div className="space-y-2 text-sm text-white/85">
          <p>
            <span className="font-semibold text-white">Tel:</span>{" "}
            <a href={SITE.phoneHref} className="hover:text-accent">
              {SITE.phone}
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">Adres:</span>{" "}
            {SITE.addressShort}
          </p>
          <p>
            <span className="font-semibold text-white">E-posta:</span>{" "}
            <a href={`mailto:${SITE.email}`} className="hover:text-accent">
              {SITE.email}
            </a>
          </p>
          <p className="pt-1">
            <Link href="/iletisim" className="font-semibold text-accent hover:underline">
              İletişim sayfası →
            </Link>
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <Logo variant="light" />
          <div className="flex items-center gap-3">
            <SocialLink href="#" label="Facebook">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="#" label="Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="#" label="X">
              <XIcon />
            </SocialLink>
            <SocialLink href="#" label="YouTube">
              <YouTubeIcon />
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-white/60 sm:px-6 lg:px-8">
          © {SITE.copyrightYear} {SITE.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-accent"
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 4h4.2l4.1 5.8L17.3 4H20l-6.2 7.2L20 20h-4.2l-4.4-6.2L7 20H4l6.5-7.6L4 4z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12c0-2.2-.2-3.6-.4-4.4-.2-.8-.8-1.4-1.6-1.6C18.6 5.6 12 5.6 12 5.6s-6.6 0-8 .4c-.8.2-1.4.8-1.6 1.6C2.2 8.4 2 9.8 2 12s.2 3.6.4 4.4c.2.8.8 1.4 1.6 1.6 1.4.4 8 .4 8 .4s6.6 0 8-.4c.8-.2 1.4-.8 1.6-1.6.2-.8.4-2.2.4-4.4zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}
