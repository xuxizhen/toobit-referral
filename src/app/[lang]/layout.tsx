import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Language,
  supportedLanguages,
  isValidLanguage,
  t,
  localeMap,
  hreflangMap,
  generateStaticParams as generateLangParams,
} from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';

export function generateStaticParams() {
  return generateLangParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};

  const title = `Toobit - ${t('subtitle', lang as Language)}`;
  const description = t('heroDescription', lang as Language);
  const locale = localeMap[lang as Language];

  const alternates: Record<string, string> = {};
  for (const l of supportedLanguages) {
    alternates[hreflangMap[l]] = `https://www.toobit.guru/${l}`;
  }
  alternates['x-default'] = 'https://www.toobit.guru/en';

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.toobit.guru/${lang}`,
      languages: alternates,
    },
    openGraph: {
      title,
      description,
      url: `https://www.toobit.guru/${lang}`,
      siteName: 'Toobit Referral',
      locale,
      type: 'website',
      images: [
        {
          url: 'https://www.toobit.guru/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Toobit Referral',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.toobit.guru/og-image.jpg'],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) {
    notFound();
  }

  const validLang = lang as Language;
  const isRTL = validLang === 'ar' || validLang === 'fa';

  const navLinks = [
    { href: `/${lang}`, label: t('navHome', validLang) },
    { href: `/${lang}/review`, label: t('navReview', validLang) },
    { href: `/${lang}/fees`, label: t('navFees', validLang) },
    { href: `/${lang}/tutorial`, label: t('navTutorial', validLang) },
    { href: `/${lang}/referral`, label: t('navReferral', validLang) },
    { href: `/${lang}/faq`, label: t('navFAQ', validLang) },
    { href: `/${lang}/safety`, label: t('navSafety', validLang) },
    { href: `/${lang}/vs-competitors`, label: t('navVsCompetitors', validLang) },
  ];

  return (
    <div lang={lang} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-[#0B0E11] border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <span className="font-bold text-lg text-white">
              Too<span className="text-[#2483FF]">bit</span> <span className="text-gray-500 font-normal text-sm">Referral</span>
            </span>
          </Link>
          <div className="flex items-center gap-1 overflow-x-auto">
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white px-2 py-1 rounded-md hover:bg-[#1A1D26] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <LanguageSwitcher currentLang={validLang} />
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
