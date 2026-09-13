import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "accent" | "brand" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  fullWidth?: boolean;
};

const variants: Record<Variant, string> = {
  accent:
    "bg-accent text-white hover:bg-accent-hover shadow-sm shadow-accent/20",
  brand: "bg-brand text-white hover:bg-brand-light",
  ghost:
    "bg-transparent text-brand border border-border hover:border-brand/40",
};

export function Button({
  variant = "accent",
  fullWidth,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
