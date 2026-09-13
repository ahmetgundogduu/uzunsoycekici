import { Resend } from "resend";

export type LeadField = {
  label: string;
  value: string;
};

export type LeadEmail = {
  subject: string;
  title: string;
  fields: LeadField[];
  replyTo?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function renderText(payload: LeadEmail) {
  return [
    payload.title,
    "",
    ...payload.fields.map((field) => `${field.label}: ${field.value}`),
  ].join("\n");
}

function renderHtml(payload: LeadEmail) {
  const rows = payload.fields
    .map(
      (field) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #d5dbe3;font-weight:700;width:140px;color:#13345f">${escapeHtml(field.label)}</td>
          <td style="padding:8px 12px;border:1px solid #d5dbe3;color:#0d2040">${escapeHtml(field.value)}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#0d2040">
      <h2 style="margin:0 0 16px;font-size:20px;color:#13345f">${escapeHtml(payload.title)}</h2>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
    </div>
  `;
}

export async function sendLeadEmail(
  payload: LeadEmail,
): Promise<{ ok: true } | { ok: false }> {
  const to = process.env.CONTACT_EMAIL?.trim();
  const from = process.env.MAIL_FROM?.trim();
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const isProduction = process.env.NODE_ENV === "production";

  if (!to || !isEmail(to)) {
    console.error("[mail] CONTACT_EMAIL eksik veya geçersiz");
    if (!isProduction) {
      console.info("[mail] geliştirme ortamında gönderim atlandı", payload);
      return { ok: true };
    }
    return { ok: false };
  }

  if (!apiKey || !from) {
    console.error("[mail] RESEND_API_KEY veya MAIL_FROM eksik");
    if (!isProduction) {
      console.info("[mail] geliştirme ortamında gönderim atlandı", {
        to,
        payload,
      });
      return { ok: true };
    }
    return { ok: false };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: payload.subject,
    text: renderText(payload),
    html: renderHtml(payload),
    ...(payload.replyTo && isEmail(payload.replyTo)
      ? { replyTo: payload.replyTo }
      : {}),
  });

  if (error) {
    console.error("[mail] Resend hatası", error);
    return { ok: false };
  }

  return { ok: true };
}
