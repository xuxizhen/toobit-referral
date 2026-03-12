import type { Metadata } from 'next';
import { Language, t, isValidLanguage, generateStaticParams as generateLangParams } from '@/lib/i18n';
import CTA from '@/components/CTA';

export function generateStaticParams() { return generateLangParams(); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  return {
    title: t('reviewTitle', lang as Language),
    description: t('reviewMetaDesc', lang as Language),
    alternates: { canonical: `https://www.toobit.guru/${lang}/review` },
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('reviewTitle', lang)}</h1>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">{t('reviewMetaDesc', lang)}</p>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-gray-300 leading-relaxed text-lg">{t('reviewIntro', lang)}</p>
        </section>

        {/* Platform Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🏛️ {t('reviewRegulation', lang)}</h2>
          <div className="bg-[#1A1D26] rounded-2xl p-6">
            <p className="text-gray-300 leading-relaxed">{t('reviewRegulationDesc', lang)}</p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">⚡ {t('reviewFeatures', lang)}</h2>
          <div className="bg-[#1A1D26] rounded-2xl p-6">
            <p className="text-gray-300 leading-relaxed mb-4">{t('reviewFeaturesDesc', lang)}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {['Spot Trading', 'Futures (150x)', 'Copy Trading', 'Demo Trading', 'Multiple Payment Methods', 'Mobile App'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 bg-[#0B0E11] rounded-lg p-3 border border-gray-800">
                  <span className="text-[#2483FF]">✓</span>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0B1A2E] rounded-2xl p-6 border border-blue-800">
              <h3 className="text-xl font-bold mb-4 text-[#2483FF]">✅ {t('reviewPros', lang)}</h3>
              <ul className="space-y-2">
                {[
                  { en: 'Intuitive and user-friendly interface', 'zh-cn': '直观易用的界面', 'zh-tw': '直觀易用的介面', ja: '直感的で使いやすいインターフェース', ko: '직관적이고 사용자 친화적인 인터페이스face' },
                  { en: 'Copy trading feature for beginners', 'zh-cn': '新手跟单交易功能', 'zh-tw': '新手跟單交易功能', ja: '初心者向けコピートレード機能', ko: '초보자를 위한 카피 트레이딩' },
                  { en: 'Competitive trading fees', 'zh-cn': '有竞争力的交易费用', 'zh-tw': '有競爭力的交易費用', ja: '競争力のある取引手数料', ko: '경쟁력 있는 거래 수수료' },
                  { en: 'Multiple language support', 'zh-cn': '多语言支持', 'zh-tw': '多語言支援', ja: '多言語サポート', ko: '다국어 지원' },
                  { en: 'Strong security measures', 'zh-cn': '强大的安全措施', 'zh-tw': '強大的安全措施', ja: '強力なセキュリティ対策', ko: '강력한 보안 조치' },
                ].map((item, i) => (
                  <li key={i} className="text-sm text-gray-300">• {item[lang as keyof typeof item] || item.en}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2E1B0B] rounded-2xl p-6 border border-amber-900">
              <h3 className="text-xl font-bold mb-4 text-amber-400">⚠️ {t('reviewCons', lang)}</h3>
              <ul className="space-y-2">
                {[
                  { en: 'Relatively newer exchange', 'zh-cn': '相对较新的交易所', 'zh-tw': '相對較新的交易所', ja: '比較的新しい取引所', ko: '비교적 새로운 거래소' },
                  { en: 'Limited fiat on-ramp options', 'zh-cn': '法币入金渠道有限', 'zh-tw': '法幣入金渠道有限', ja: '法定通貨のオンランプが限定的', ko: '제한된 법정화폐 온램프' },
                  { en: 'Growing token selection', 'zh-cn': '代币种类仍在增长中', 'zh-tw': '代幣種類仍在增長中', ja: 'トークン選択はまだ成長中', ko: '성장 중인 토큰 선택지' },
                ].map((item, i) => (
                  <li key={i} className="text-sm text-gray-300">• {item[lang as keyof typeof item] || item.en}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">🏆 {t('reviewVerdict', lang)}</h2>
          <div className="bg-gradient-to-r from-[#1A1D26] to-[#0B1A2E] rounded-2xl p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed text-lg">{t('reviewVerdictDesc', lang)}</p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#2483FF] to-blue-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-black">{t('readyTitle', lang)}</h2>
          <p className="text-lg mb-8 text-black/80">{t('readyDescription', lang)}</p>
          <CTA lang={lang} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
