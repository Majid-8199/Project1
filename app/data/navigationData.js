// data/navigationData.js
export const navigationLinks = (lang) => [
  {
    label: { en: 'Home', ar: 'الرئيسية' },
    href: '/',
  },
  {
    label: { en: 'About', ar: 'عنا' },
    href: '/about',
  },
  {
    label: { en: 'Services', ar: 'الخدمات' },
    href: '/services',
    isDropdown: true,
    subMenu: [
      {
        title: { en: 'Amer Services', ar: 'خدمات آمر' },
        sub: [
          { label: { en: 'Entry Permit', ar: 'تصريح دخول' }, href: '/services/amer-services/entry-permit' },
          { label: { en: 'Residency Visa', ar: 'إقامة' }, href: '/services/amer-services/residency-visa' },
          { label: { en: 'Family Visa', ar: 'تأشيرة عائلية' }, href: '/services/amer-services/family-visa' },
          { label: { en: 'Visit Visa', ar: 'تأشيرة زيارة' }, href: '/services/amer-services/visit-visa' },
          { label: { en: 'Golden Visa', ar: 'تأشيرة ذهبية' }, href: '/services/amer-services/golden-visa' },
          { label: { en: 'Status Change', ar: 'تعديل وضع' }, href: '/services/amer-services/status-change' },
          { label: { en: 'Data Modification', ar: 'تعديل بيانات' }, href: '/services/amer-services/data-modification' },
        ],
      },
      {
        title: { en: 'Tas-heel Services', ar: 'خدمات تسهيل' },
        sub: [
          { label: { en: 'Work Permit', ar: 'تصريح عمل' }, href: '/services/tas-heel-services/work-permit' },
          { label: { en: 'Labour Card', ar: 'بطاقة عمل' }, href: '/services/tas-heel-services/labour-card' },
          { label: { en: 'Employment Contract', ar: 'عقد عمل' }, href: '/services/tas-heel-services/employment-contract' },
          { label: { en: 'Sponsorship Transfer', ar: 'نقل كفالة' }, href: '/services/tas-heel-services/sponsorship-transfer' },
        ],
      },
      { title: { en: 'Emirates ID', ar: 'الهوية الإماراتية' }, href: '/services/emirates-id' },
      { title: { en: 'Medical Services', ar: 'الخدمات الطبية' }, href: '/services/medical-services' },
      { title: { en: 'Document and Legal Services', ar: 'خدمات الوثائق والقانونية' }, href: '/services/document-legal-services' },
      {
        title: { en: 'Business Setup Services', ar: 'خدمات تأسيس الأعمال' },
        sub: [
          { label: { en: 'Company Registration', ar: 'تسجيل شركات' }, href: '/services/business-setup-services/company-registration' },
          { label: { en: 'Trade License', ar: 'رخصة تجارية' }, href: '/services/business-setup-services/trade-license' },
          { label: { en: 'MOA', ar: 'عقد تأسيس' }, href: '/services/business-setup-services/moa' },
          { label: { en: 'PRO', ar: 'خدمات المندوب' }, href: '/services/business-setup-services/pro' },
          { label: { en: 'DED', ar: 'دائرة التنمية الاقتصادية' }, href: '/services/business-setup-services/ded' },
        ],
      },
      { title: { en: 'Police and RTA Services', ar: 'خدمات الشرطة وهيئة الطرق والمواصلات' }, href: '/services/police-rta-services' },
    ],
  },
  {
    label: { en: 'Blogs', ar: 'المدونة' },
    href: '/blogs',
  },
  {
    label: { en: 'Contact', ar: 'اتصل بنا' },
    href: '/contact',
  },
];

export const headerButtons = {
  applyOnline: { en: 'Apply Online', ar: 'تقديم طلب إلكتروني' },
  search: { en: 'Search', ar: 'بحث' },
};