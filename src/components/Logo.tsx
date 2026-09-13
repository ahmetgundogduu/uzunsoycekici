import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textClass = variant === "light" ? "text-white" : "text-brand";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${textClass} ${className}`}
      aria-label="Uzunsoy Çekici Anasayfa"
    >
      <svg
        width="42"
        height="32"
        viewBox="0 0 42 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M3 22.5h4.2l1.3-3.2h8.4l1.6 3.2H30c1.2 0 2.2-.9 2.2-2.1V14c0-1.2-1-2.2-2.2-2.2h-5.4l-2.1-4.3c-.4-.8-1.2-1.3-2.1-1.3H12.2c-.8 0-1.5.4-1.9 1.1L8.1 11.8H5.2C4 11.8 3 12.8 3 14v6.4c0 1.2 1 2.1 2.2 2.1H3z"
          className={variant === "light" ? "fill-white" : "fill-brand"}
        />
        <circle cx="11" cy="24.5" r="3.2" className="fill-accent" />
        <circle cx="26.5" cy="24.5" r="3.2" className="fill-accent" />
        <circle
          cx="11"
          cy="24.5"
          r="1.3"
          className={variant === "light" ? "fill-brand-dark" : "fill-white"}
        />
        <circle
          cx="26.5"
          cy="24.5"
          r="1.3"
          className={variant === "light" ? "fill-brand-dark" : "fill-white"}
        />
        <path
          d="M30.5 14.2h5.2c.7 0 1.3.4 1.6 1l2.1 4.2c.2.4 0 .9-.4 1.1l-3.2 1.4"
          className={variant === "light" ? "stroke-white" : "stroke-brand"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.2 8.2l1.8-2.4M35.4 9.4l2.2-1.4M36.2 11.6h2.8"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-tight">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] opacity-80">
          Uzunsoy
        </span>
        <span className="block text-base font-extrabold tracking-wide sm:text-lg">
          ÇEKİCİ
        </span>
      </span>
    </Link>
  );
}
