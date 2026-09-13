export const SITE = {
  name: "Uzunsoy Çekici",
  tagline: "7/24 Yol Yardım",
  phone: "0543 402 27 12",
  phoneHref: "tel:+905434022712",
  email: "info@uzunsoycekici.com",
  address: "Küçükbalıklı Mah. Şanlı Cad. No: 67, Osmangazi / Bursa",
  addressShort: "Osmangazi / Bursa",
  workingHours: "7/24 Açık",
  copyrightYear: 2004,
  mapEmbedUrl:
    "https://maps.google.com/maps?q=K%C3%BC%C3%A7%C3%BCkbal%C4%B1kl%C4%B1+Mahallesi+%C5%9Eanl%C4%B1+Caddesi+No:67+Osmangazi+Bursa&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=K%C3%BC%C3%A7%C3%BCkbal%C4%B1kl%C4%B1+Mahallesi+%C5%9Eanl%C4%B1+Caddesi+No:67+Osmangazi+Bursa",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const INSURANCE = {
  amount: "4.000.000 TL",
  short: "4 Milyon TL’ye Kadar Sigortalı",
  text: "Taşınan araçlarınız 4.000.000 TL’ye kadar sigortalıdır.",
} as const;

export const HIGHLIGHTS = [
  {
    title: "7/24 Hizmet",
    text: "Gece gündüz acil çekici ve yol yardım.",
  },
  {
    title: INSURANCE.short,
    text: INSURANCE.text,
  },
  {
    title: "Uygun Fiyatlar",
    text: "Net bilgilendirme, sürpriz ücret yok.",
  },
] as const;

export const VEHICLE_TYPES = [
  { value: "", label: "Araç Tipi" },
  { value: "otomobil", label: "Otomobil" },
  { value: "suv", label: "SUV / Jeep" },
  { value: "minibus", label: "Minibüs" },
  { value: "motosiklet", label: "Motosiklet" },
  { value: "ticari", label: "Ticari Araç" },
] as const;

export const ABOUT = {
  introTitle: "20 Yıllık Tecrübe ile Yanınızdayız",
  intro:
    "Uzunsoy Çekici olarak Bursa ve çevresinde 7/24 acil çekici, yol yardım ve araç taşıma hizmeti sunuyoruz. Deneyimli ekibimiz ve modern filomuzla yolda kaldığınız her an güvenle ulaşabileceğiniz bir çözüm ortağıyız.",
  story:
    "Kurulduğumuz günden bu yana binlerce sürücüye yol yardımında bulunduk. Hızlı müdahale, şeffaf fiyatlandırma ve hasarsız taşıma prensiplerimizle müşterilerimizin güvenini kazandık. Her çağrıda aynı özen ve profesyonellikle yanınızdayız.",
  mission: {
    title: "Misyonumuz",
    text: "Yolda kalan her sürücüye en kısa sürede, güvenli ve şeffaf bir hizmet sunmak; araçlarını hasarsız şekilde hedefe ulaştırmak ve zor anlarda güvenilir bir çözüm ortağı olmak.",
  },
  vision: {
    title: "Vizyonumuz",
    text: "Türkiye’nin her noktasında ulaşılabilir, teknolojisi güçlü ve müşteri memnuniyetini merkeze alan öncü yol yardım markası olmak.",
  },
  values: [
    {
      title: "Hız",
      text: "Acil çağrılara ortalama müdahale süremizi sürekli kısaltmayı hedefleriz.",
    },
    {
      title: "Güven",
      text: "Modern filo ve eğitimli ekiple hasarsız taşıma sunarız. Taşınan araçlarınız 4.000.000 TL’ye kadar sigortalıdır.",
    },
    {
      title: "Şeffaflık",
      text: "Fiyatlandırmada sürpriz yok; net bilgilendirme ile ilerleriz.",
    },
  ],
} as const;
