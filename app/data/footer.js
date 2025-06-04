export const footerContent = {
  company: {
    name: 'Amer and Tas-heel Service',
    tagline: 'خدمات آمر و تسهيل',
    logoSrc: '/logo.svg',
  },
  contact: {
    address: {
      title: 'Al Rolla Rd, Al Raffa,',
      lines: [
        'Al Rolla Rd, Al Raffa',
        'Bur Dubai, Dubai',
        'United Arab Emirates'
      ],
      mapLink:
        'https://maps.app.goo.gl/XHmfD5bZUDTNKSbZA',
    },
    email: {
      label: 'amerandtasheel@gmail.com',
      link: 'mailto:amerandtasheel@gmail.com',
    },
    phone: {
      label: '+971 56 303 2309',
      link: 'tel:+971563032309',
    },
  },
  navigation: {
    main: [
      { label: 'Home', link: '/' },
      { label: 'About', link: '/about' },
      { label: 'Services', link: '/services' },
      { label: 'Blogs', link: '/blogs' },
      { label: 'Contact', link: '/contact' },
    ],
    popular: [
      { label: 'Amer Services', link: '/amer-services' },
      { label: 'Tas-heel Services', link: '/tasheel-services' },
      { label: 'Emirates ID', link: '/emirates-id' },
      { label: 'Medical Services', link: '/medical-services' },
      { label: 'Business Related Services', link: '/business-services' },
    ],
    others: [
      { label: 'Document and Legal Services', link: '/legal-services' },
      { label: 'Dubai Police Online Services', link: '/dubai-police' },
      { label: 'RTA Online Services', link: '/rta-services' },
      { label: 'MOFAIC Services', link: '/mofaic' },
      {
        label: 'Federal Authority for Identity and Citizenship (ICP)',
        link: '/icp',
      },
    ],
  },
  buttons: {
    applyOnline: 'Apply Online',
    messageUs: 'Message Us',
  },
  copyright:
    '© 2025 Amer and Tas-heel Services Assistance. All rights reserved.',
};

// data/footer.js
// export const footerContent = (lang) => ({ // Make it a function that accepts lang
//   company: {
//     name: { en: 'Amer and Tasheel Services', ar: 'خدمات عامر وتسهيل' },
//     tagline: { en: 'Your Gateway to Government Services in Dubai', ar: 'بوابتك للخدمات الحكومية في دبي' }, // More descriptive tagline for SEO
//     logoSrc: '/logo.svg',
//   },
//   contact: {
//     address: {
//       title: { en: 'Our Location:', ar: 'موقعنا:' },
//       lines: [
//         { en: 'Al Rolla Rd, Al Raffa,', ar: 'شارع الرولة، الرفاعة،' },
//         { en: 'Bur Dubai, Dubai', ar: 'بر دبي، دبي' },
//         { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' }
//       ],
//       mapLink: 'https://maps.app.goo.gl/YourActualGoogleMapsLinkHere', // <<< IMPORTANT: Replace with actual Google Maps URL
//     },
//     email: {
//       label: 'amerandtasheel@gmail.com',
//       link: 'mailto:amerandtasheel@gmail.com',
//     },
//     phone: {
//       label: { en: '+971 56 303 2309', ar: '+٩٧١ ٥٦ ٣٠٣ ٢٣٠٩' },
//       link: 'tel:+971563032309',
//     },
//   },
//   navigation: {
//     main: [
//       { label: { en: 'Home', ar: 'الرئيسية' }, link: '/' },
//       { label: { en: 'About Us', ar: 'عنا' }, link: '/about' },
//       { label: { en: 'Services', ar: 'الخدمات' }, link: '/services' },
//       { label: { en: 'Blogs', ar: 'المدونة' }, link: '/blogs' },
//       { label: { en: 'Contact Us', ar: 'اتصل بنا' }, link: '/contact' },
//     ],
//     popular: [
//       { label: { en: 'Amer Services', ar: 'خدمات آمر' }, link: '/services/amer-services' },
//       { label: { en: 'Tasheel Services', ar: 'خدمات تسهيل' }, link: '/services/tasheel-services' },
//       { label: { en: 'Emirates ID', ar: 'الهوية الإماراتية' }, link: '/services/emirates-id' },
//       { label: { en: 'Medical Services', ar: 'الخدمات الطبية' }, link: '/services/medical-services' },
//       { label: { en: 'Business Setup Services', ar: 'خدمات تأسيس الأعمال' }, link: '/services/business-setup-services' },
//     ],
//     others: [
//       { label: { en: 'Document and Legal Services', ar: 'خدمات الوثائق والقانونية' }, link: '/services/document-legal-services' },
//       { label: { en: 'Dubai Police Online Services', ar: 'خدمات شرطة دبي الإلكترونية' }, link: '/services/dubai-police-services' },
//       { label: { en: 'RTA Online Services', ar: 'خدمات هيئة الطرق والمواصلات الإلكترونية' }, link: '/services/rta-online-services' },
//       { label: { en: 'MOFAIC Services', ar: 'خدمات وزارة الخارجية' }, link: '/services/mofaic-services' },
//       {
//         label: { en: 'Federal Authority for Identity and Citizenship (ICP)', ar: 'الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (ICP)' },
//         link: '/services/icp-services',
//       },
//     ],
//   },
//   buttons: {
//     applyOnline: { en: 'Apply Online', ar: 'تقديم طلب إلكتروني' },
//     messageUs: { en: 'Message Us', ar: 'راسلنا' },
//   },
//   copyright: { en: '© 2025 Amer and Tasheel Services Assistance. All rights reserved.', ar: '© 2025 عامر وتسهيل للخدمات. جميع الحقوق محفوظة.' },
// });