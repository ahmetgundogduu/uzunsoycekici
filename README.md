# Uzunsoy Çekici

Uzunsoy Çekici markası için Next.js + Tailwind CSS ile hazırlanmış responsive tanıtım sitesi.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

Yerel ortamda `RESEND_API_KEY` yoksa formlar yine çalışır; mail gönderilmez, talep sunucu loguna yazılır.

## Ortam değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın:

| Değişken | Açıklama |
| --- | --- |
| `CONTACT_EMAIL` | “Sizi arayalım” ve iletişim formlarının gideceği adres |
| `MAIL_FROM` | Resend’de tanımlı gönderen adres |
| `RESEND_API_KEY` | [Resend](https://resend.com) API anahtarı |

Canlı ortamda bu üç değişken zorunludur. `CONTACT_EMAIL` istemciye gönderilmez.

## Vercel

1. Repoyu Vercel’e bağlayın. Framework Next.js olarak algılanır; ekstra `vercel.json` gerekmez.
2. Project Settings → Environment Variables içine yukarıdaki üç değeri ekleyin (Production / Preview).
3. Resend’de domain doğrulayın ve `MAIL_FROM` değerini o domaine ayarlayın. Test için `onboarding@resend.dev` yalnızca hesap e-postanıza gönderir.
4. Deploy edin. Node.js 20.9+ gerekir.

## Yapı

- `src/components` — Header, Hero, Forms, Footer ve ortak UI
- `src/lib/actions.ts` — fiyat ve iletişim formlarının sunucu aksiyonları
- `src/lib/constants.ts` — marka bilgileri, menü ve form seçenekleri
- `public/images` — hero ve ekip görselleri
- `design/` — referans tasarım mockupları
