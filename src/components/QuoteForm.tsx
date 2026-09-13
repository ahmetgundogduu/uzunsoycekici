"use client";

import { useActionState, useEffect, useRef } from "react";
import { FormStatus, HoneypotField } from "@/components/FormStatus";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { submitQuote, type ActionState } from "@/lib/actions";
import { VEHICLE_TYPES } from "@/lib/constants";

const initialState: ActionState = { status: "idle" };

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(submitQuote, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="relative grid grid-cols-1 gap-3 sm:grid-cols-2"
    >
      <HoneypotField />
      <Input
        name="name"
        placeholder="Ad Soyad"
        autoComplete="name"
        required
        maxLength={80}
        disabled={pending}
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Telefon No"
        autoComplete="tel"
        required
        maxLength={20}
        disabled={pending}
      />
      <Input
        name="location"
        placeholder="Konum"
        autoComplete="street-address"
        required
        maxLength={200}
        disabled={pending}
      />
      <Select
        name="vehicleType"
        required
        options={VEHICLE_TYPES}
        disabled={pending}
        defaultValue=""
      />
      <div className="space-y-2 sm:col-span-2">
        <Button
          type="submit"
          variant="accent"
          fullWidth
          className="py-3.5 text-base"
          disabled={pending}
        >
          {pending
            ? "Gönderiliyor..."
            : state.status === "success"
              ? "Talebiniz Alındı!"
              : "Hemen Fiyat Al"}
        </Button>
        <FormStatus state={state} variant="dark" />
      </div>
    </form>
  );
}
