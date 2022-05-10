const DUUMY_PRODUCTS = [
  {
    id: 'e1',
    title: 'Apple MacBook Pro',
    description: 'With M1 cheap , fastest one in the world',
    image: 'images/MacPro.jpg',
    price: 2499,
    isFeatured: false,
    value: 'Apple',
  },
  {
    id: 'e2',
    title: 'Apple MacBook Air',
    description: 'With M1 cheap , fastest one in the world',
    image: 'images/MacAir.jpg',
    price: 1999,
    isFeatured: true,
    value: 'Apple',
  },
  {
    id: 'e3',
    title: 'Apple MacBook Air 2',
    description: 'With M1 cheap , fastest one in the world',
    image: 'images/MacAir2.jpg',
    price: 1999,
    isFeatured: true,
    value: 'Apple',
  },
  {
    id: 'e4',
    title: 'Lenovo Legion 5 ',
    description:
      'اقتصادی گیمینگ و قدرتمند مناسب اجرای بروزترین بازی ها و کارهای گرافیکی ',
    image: 'images/legion5.jpg',
    price: 1299,
    isFeatured: true,
    value: 'Lenovo',
  },
  {
    id: 'e5',
    title: 'Asus ROG strix G15',
    description:
      'لپ ‌تاپ ROG Strix G15 G513IE-AA از محصولات شرکت «ایسوس» محسوب می‌شود که با طراحی زیبا روانه بازار شده است. بدنه‌ شیک ROG Strix G15 G513IE-AA به‌ گونه‌ای طراحی شده که لپ‌ تاپی رده ‌بالا را نوید می‌‌دهد. این لپ تاپ و 2.1 کیلوگرم وزن دارد و برای جا‌به‌‌جایی دائمی آن مشکل خاصی نخواهید داشت. صفحه ‌نمایش 15.6 اینچی این محصول دارای وضوح تصویر FullHD است. پورت‌های USB و HDMI روی لبه ‌های این مدل از ایسوس دیده می‌‌شود ',
    image: 'images/AsusRog.jpg',
    price: 1799,
    isFeatured: true,
    value: 'Asus',
  },
  {
    id: 'e6',
    title: 'Msi GS72 Pro',
    description:
      'ا عرضه‌ی نسل ششم پردازنده‌های Core توسط اینتل، تولیدکنندگان کامپیوترهای شخصی، مدل‌های به‌روزشده‌ی محصولاتشان را با این پردازنده‌ها معرفی کردند. «ام‌اس‌آی» (MSI) هم در جریان نمایشگاه CES 2016، از لپ‌تاپ‌ها و کامپیوترهای جدیدش رونمایی کرد',
    image: 'images/MsiPro.jpg',
    price: 1699,
    isFeatured: true,
    value: 'Msi',
  },
];

export function getFeaturedProducts() {
  return DUUMY_PRODUCTS.filter((product) => product.isFeatured);
}

export function getProductById(id) {
  return DUUMY_PRODUCTS.find((product) => product.id === id);
}

export function getAllProducts() {
  return DUUMY_PRODUCTS;
}

export function getFilteredProducts(filteredData) {
  const { price, catagory } = filteredData;

  return DUUMY_PRODUCTS.filter(
    (product) => product.price <= price && product.value === catagory
  );
}
