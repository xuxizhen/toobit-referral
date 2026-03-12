import type { Metadata } from 'next';
import { Language, t, isValidLanguage, generateStaticParams as generateLangParams } from '@/lib/i18n';
import CTA from '@/components/CTA';

export function generateStaticParams() {
  return generateLangParams();
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  return {
    title: t('subtitle', lang as Language),
    description: t('heroDescription', lang as Language),
    alternates: { canonical: `https://www.toobit.guru/${lang}` },
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const trustBadges = [
    { icon: '🛡️', key: 'trustBadge1' },
    { icon: '🎧', key: 'trustBadge2' },
    { icon: '💸', key: 'trustBadge3' },
    { icon: '📋', key: 'trustBadge4' },
  ];

  const features = [
    { icon: '📊', titleKey: 'feature1Title', descKey: 'feature1Desc' },
    { icon: '📈', titleKey: 'feature2Title', descKey: 'feature2Desc' },
    { icon: '🤖', titleKey: 'feature3Title', descKey: 'feature3Desc' },
    { icon: '🔐', titleKey: 'feature4Title', descKey: 'feature4Desc' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B0E11] to-[#131722] py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('title', lang)} <span className="text-[#2483FF]">Exchange</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">{t('subtitle', lang)}</p>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">{t('heroDescription', lang)}</p>
          <CTA lang={lang} />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, i) => (
              <div key={i} className="text-center bg-[#1A1D26] rounded-2xl p-6">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="text-sm font-medium text-gray-300">{t(badge.key, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('whyTitle', lang)}</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">{t('whyDesc', lang)}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-[#1A1D26] rounded-2xl p-6 hover:border-[#2483FF] border border-gray-800 transition-colors">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{t(f.titleKey, lang)}</h3>
                <p className="text-sm text-gray-400">{t(f.descKey, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center bg-gradient-to-r from-[#2483FF] to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-black">{t('readyTitle', lang)}</h2>
            <p className="text-lg mb-8 text-black/80">{t('readyDescription', lang)}</p>
            <CTA lang={lang} variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
}
