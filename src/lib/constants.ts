export const SITE = {
  name: "Uzunsoy Çekici",
  tagline: "7/24 Yol Yardım",
  phone: "0555 123 4567",
  phoneHref: "tel:+905551234567",
  email: "info@uzunsoycekici.com",
  address: "Atatürk Cad. No: 12, Kadıköy / İstanbul",
  addressShort: "Kadıköy / İstanbul",
  workingHours: "7/24 Açık",
  copyrightYear: 2004,
  /** Mock konum — gerçek adres gelince güncellenir */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Kad%C4%B1k%C3%B6y%2C%20%C4%B0stanbul&z=14&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Kad%C4%B1k%C3%B6y%2C%20%C4%B0stanbul",
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
    "Uzunsoy Çekici olarak İstanbul ve çevresinde 7/24 acil çekici, yol yardım ve araç taşıma hizmeti sunuyoruz. Deneyimli ekibimiz ve modern filomuzla yolda kaldığınız her an güvenle ulaşabileceğiniz bir çözüm ortağıyız.",
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
