"use server";

import { headers } from "next/headers";
import { VEHICLE_TYPES } from "@/lib/constants";
import { sendLeadEmail } from "@/lib/mail";
import { consumeRateLimit } from "@/lib/rate-limit";

export type ActionState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const VEHICLE_VALUES = new Set<string>(
  VEHICLE_TYPES.map((type) => type.value).filter(Boolean),
);

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function allowRequest() {
  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";

  return consumeRateLimit(`lead:${ip}`, 5, 10 * 60 * 1000);
}

export async function submitQuote(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    if (readString(formData, "website")) {
      return {
        status: "success",
        message: "Talebiniz alındı. En kısa sürede sizi arayacağız.",
      };
    }

    if (!(await allowRequest())) {
      return {
        status: "error",
        message:
          "Çok fazla deneme yaptınız. Lütfen biraz sonra tekrar deneyin.",
      };
    }

    const name = readString(formData, "name");
    const phone = readString(formData, "phone");
    const location = readString(formData, "location");
    const vehicleType = readString(formData, "vehicleType");

    if (name.length < 2 || name.length > 80) {
      return { status: "error", message: "Lütfen ad soyad girin." };
    }
    if (!isValidPhone(phone)) {
      return {
        status: "error",
        message: "Lütfen geçerli bir telefon numarası girin.",
      };
    }
    if (location.length < 2 || location.length > 200) {
      return { status: "error", message: "Lütfen konum bilgisini girin." };
    }
    if (!VEHICLE_VALUES.has(vehicleType)) {
      return { status: "error", message: "Lütfen araç tipini seçin." };
    }

    const vehicleLabel =
      VEHICLE_TYPES.find((type) => type.value === vehicleType)?.label ??
      vehicleType;

    const sent = await sendLeadEmail({
      subject: `Yeni çekici talebi — ${name}`,
      title: "Yeni çekici / fiyat talebi",
      fields: [
        { label: "Ad Soyad", value: name },
        { label: "Telefon", value: phone },
        { label: "Konum", value: location },
        { label: "Araç Tipi", value: vehicleLabel },
      ],
    });

    if (!sent.ok) {
      return {
        status: "error",
        message: "Talebiniz iletilemedi. Lütfen telefonla bize ulaşın.",
      };
    }

    return {
      status: "success",
      message: "Talebiniz alındı. En kısa sürede sizi arayacağız.",
    };
  } catch (error) {
    console.error("[submitQuote]", error);
    return {
      status: "error",
      message: "Talebiniz iletilemedi. Lütfen telefonla bize ulaşın.",
    };
  }
}

export async function submitContact(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    if (readString(formData, "website")) {
      return {
        status: "success",
        message: "Mesajınız alındı. En kısa sürede sizi arayacağız.",
      };
    }

    if (!(await allowRequest())) {
      return {
        status: "error",
        message:
          "Çok fazla deneme yaptınız. Lütfen biraz sonra tekrar deneyin.",
      };
    }

    const name = readString(formData, "name");
    const phone = readString(formData, "phone");
    const email = readString(formData, "email");
    const message = readString(formData, "message");

    if (name.length < 2 || name.length > 80) {
      return { status: "error", message: "Lütfen ad soyad girin." };
    }
    if (!isValidPhone(phone)) {
      return {
        status: "error",
        message: "Lütfen geçerli bir telefon numarası girin.",
      };
    }
    if (email && !isValidEmail(email)) {
      return { status: "error", message: "Lütfen geçerli bir e-posta girin." };
    }
    if (message.length < 5 || message.length > 2000) {
      return { status: "error", message: "Lütfen mesajınızı yazın." };
    }

    const sent = await sendLeadEmail({
      subject: `İletişim formu — ${name}`,
      title: "Yeni iletişim mesajı",
      replyTo: email || undefined,
      fields: [
        { label: "Ad Soyad", value: name },
        { label: "Telefon", value: phone },
        { label: "E-posta", value: email || "Belirtilmedi" },
        { label: "Mesaj", value: message },
      ],
    });

    if (!sent.ok) {
      return {
        status: "error",
        message: "Mesajınız iletilemedi. Lütfen telefonla bize ulaşın.",
      };
    }

    return {
      status: "success",
      message: "Mesajınız alındı. En kısa sürede sizi arayacağız.",
    };
  } catch (error) {
    console.error("[submitContact]", error);
    return {
      status: "error",
      message: "Mesajınız iletilemedi. Lütfen telefonla bize ulaşın.",
    };
  }
}
