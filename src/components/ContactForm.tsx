"use client";

import { useActionState, useEffect, useRef } from "react";
import { FormStatus, HoneypotField } from "@/components/FormStatus";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { submitContact, type ActionState } from "@/lib/actions";

const initialState: ActionState = { status: "idle" };

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="relative space-y-3">
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
        name="email"
        type="email"
        placeholder="E-posta"
        autoComplete="email"
        maxLength={120}
        disabled={pending}
      />
      <label className="block w-full">
        <textarea
          name="message"
          placeholder="Mesajınız"
          required
          rows={5}
          maxLength={2000}
          disabled={pending}
          className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-brand-dark placeholder:text-muted/80 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </label>
      <Button type="submit" variant="accent" fullWidth className="py-3.5" disabled={pending}>
        {pending
          ? "Gönderiliyor..."
          : state.status === "success"
            ? "Mesajınız Gönderildi!"
            : "Gönder"}
      </Button>
      <FormStatus state={state} />
    </form>
  );
}
