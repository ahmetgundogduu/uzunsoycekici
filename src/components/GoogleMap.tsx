import { SITE } from "@/lib/constants";

export function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface-muted shadow-sm">
      <iframe
        title={`${SITE.name} konum haritası`}
        src={SITE.mapEmbedUrl}
        className="h-[320px] w-full border-0 sm:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-white px-4 py-3">
        <p className="text-sm text-muted">{SITE.address}</p>
        <a
          href={SITE.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand hover:text-accent"
        >
          Google Maps’te aç
        </a>
      </div>
    </div>
  );
}
