import { type InputHTMLAttributes, type SelectHTMLAttributes } from "react";

const fieldClass =
  "w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-brand-dark placeholder:text-muted/80 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, id, className = "", ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <label className="block w-full">
      {label ? (
        <span className="mb-1.5 block text-xs font-medium text-white/80">
          {label}
        </span>
      ) : null}
      <input id={inputId} className={`${fieldClass} ${className}`} {...props} />
    </label>
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: readonly { value: string; label: string }[];
};

export function Select({
  label,
  id,
  options,
  className = "",
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;
  return (
    <label className="block w-full">
      {label ? (
        <span className="mb-1.5 block text-xs font-medium text-white/80">
          {label}
        </span>
      ) : null}
      <select
        id={selectId}
        className={`${fieldClass} appearance-none bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-9 ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        }}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value || "empty"} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
