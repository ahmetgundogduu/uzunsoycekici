import type { ActionState } from "@/lib/actions";

type FormStatusProps = {
  state: ActionState;
  variant?: "light" | "dark";
};

export function FormStatus({ state, variant = "light" }: FormStatusProps) {
  if (state.status === "idle") {
    return null;
  }

  const isError = state.status === "error";
  const color =
    variant === "dark"
      ? isError
        ? "text-red-200"
        : "text-emerald-200"
      : isError
        ? "text-red-700"
        : "text-green-700";

  return (
    <p
      role={isError ? "alert" : "status"}
      className={`text-sm font-medium ${color}`}
    >
      {state.message}
    </p>
  );
}

export function HoneypotField() {
  return (
    <input
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      className="hidden"
      aria-hidden="true"
    />
  );
}
