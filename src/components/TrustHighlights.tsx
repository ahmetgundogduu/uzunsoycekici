import { HIGHLIGHTS } from "@/lib/constants";

export function TrustHighlights() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:gap-8 sm:px-6 sm:py-10 lg:px-8">
        {HIGHLIGHTS.map((item, index) => (
          <article
            key={item.title}
            className="flex items-start gap-3 sm:items-center sm:flex-col sm:text-center lg:flex-row lg:text-left"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-muted text-accent">
              {index === 0 ? <ClockIcon /> : null}
              {index === 1 ? <ShieldIcon /> : null}
              {index === 2 ? <TagIcon /> : null}
            </span>
            <div>
              <p className="text-sm font-extrabold text-brand sm:text-base">
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
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

function TagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 12.5V5.5H11.5L19.2 13.2a1.5 1.5 0 010 2.1l-4 4a1.5 1.5 0 01-2.1 0L4.5 12.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="8.2" cy="9.2" r="1.1" fill="currentColor" />
    </svg>
  );
}
