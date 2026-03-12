import type { Metadata } from 'next';
import { Language, t, isValidLanguage, generateStaticParams as generateLangParams } from '@/lib/i18n';
import CTA from '@/components/CTA';

export function generateStaticParams() { return generateLangParams(); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  return {
    title: t('vsTitle', lang as Language),
    description: t('vsMetaDesc', lang as Language),
    alternates: { canonical: `https://www.toobit.guru/${lang}/vs-competitors` },
  };
}

export default async function VsCompetitorsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const comparisonRows = [
    { feature: { en: 'Spot Fees (Maker/Taker)', 'zh-cn': '现货费用', 'zh-tw': '現貨費用', ja: '現物手数料', ko: '현물 수수료' }, toobit: '0.1%/0.1%', bitunix: '0.1%/0.1%', bingx: '0.1%/0.1%', mexc: '0%/0.1%' },
    { feature: { en: 'Futures Fees', 'zh-cn': '合约费用', 'zh-tw': '合約費用', ja: '先物手数料', ko: '선물 수수료' }, toobit: '0.02%/0.06%', bitunix: '0.02%/0.06%', bingx: '0.02%/0.05%', mexc: '0%/0.02%' },
    { feature: { en: 'Max Leverage', 'zh-cn': '最大杠杆', 'zh-tw': '最大槓桿', ja: '最大レバレッジ', ko: '최대 레버리지' }, toobit: '150x', bitunix: '125x', bingx: '150x', mexc: '200x' },
    { feature: { en: 'Copy Trading', 'zh-cn': '跟单交易', 'zh-tw': '跟單交易', ja: 'コピートレード', ko: '카피 트레이딩' }, toobit: '✅', bitunix: '❌', bingx: '✅', mexc: '❌' },
    { feature: { en: 'Demo Trading', 'zh-cn': '模拟交易', 'zh-tw': '模擬交易', ja: 'デモ取引', ko: '데모 거래' }, toobit: '✅', bitunix: '✅', bingx: '✅', mexc: '❌' },
    { feature: { en: 'Mobile App', 'zh-cn': '手机App', 'zh-tw': '手機App', ja: 'モバイルアプリ', ko: '모바일 앱' }, toobit: '✅', bitunix: '✅', bingx: '✅', mexc: '✅' },
    { feature: { en: '24/7 Support', 'zh-cn': '24/7客服', 'zh-tw': '24/7客服', ja: '24/7サポート', ko: '24/7 지원' }, toobit: '✅', bitunix: '✅', bingx: '✅', mexc: '✅' },
  ];

  const detailedComparisons = [
    {
      title: 'Toobit vs Bitunix',
      points: [
        { en: 'Both offer competitive futures fees (0.02% maker)', 'zh-cn': '两者都提供有竞争力的合约费用', ja: '両方とも競争力のある先物手数料を提供' },
        { en: 'Toobit has copy trading advantage', 'zh-cn': 'Toobit具有跟单交易优势', ja: 'Toobitにはコピートレードの優位性あり' },
        { en: 'Toobit offers more user-friendly interface', 'zh-cn': 'Toobit提供更用户友好的界面', ja: 'Toobitはより使いやすいインターフェース' },
        { en: 'Bitunix focuses more on derivatives', 'zh-cn': 'Bitunix更专注于衍生品交易', ja: 'Bitunixはデリバティブに注力' },
      ],
    },
    {
      title: 'Toobit vs BingX',
      points: [
        { en: 'Both offer copy trading feature', 'zh-cn': '两者都提供跟单交易功能', ja: '両方ともコピートレード機能を提供' },
        { en: 'Similar fee structures', 'zh-cn': '费用结构相似', ja: '類似の手数料体系' },
        { en: 'Toobit has competitive 10% referral program', 'zh-cn': 'Toobit具有10%邀请返佣计划', ja: 'Toobitには10%紹介プログラムあり' },
        { en: 'BingX has larger established user base', 'zh-cn': 'BingX拥有更大的现有用户群', ja: 'BingXはより大きな既存ユーザーベース' },
      ],
    },
    {
      title: 'Toobit vs MEXC',
      points: [
        { en: 'MEXC has zero maker fees advantage', 'zh-cn': 'MEXC具有零挂单费优势', ja: 'MEXCにはメイカー手数料ゼロの優位性あり' },
        { en: 'Toobit has copy trading while MEXC does not', 'zh-cn': 'Toobit有跟单交易而MEXC没有', ja: 'ToobitにはコピートレードがありMEXCにはない' },
        { en: 'MEXC has larger token selection', 'zh-cn': 'MEXC有更多的代币种类', ja: 'MEXCはより多くのトークンを取り扱い' },
        { en: 'Toobit has more beginner-friendly interface', 'zh-cn': 'Toobit对初学者更友好的界面', ja: 'Toobitは初心者にやさしいインターフェース' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('vsTitle', lang)}</h1>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">{t('vsIntro', lang)}</p>

        {/* Comparison Table */}
        <section className="mb-12">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1D26]">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-left p-4 font-semibold text-[#2483FF]">Toobit ⭐</th>
                  <th className="text-left p-4 font-semibold">Bitunix</th>
                  <th className="text-left p-4 font-semibold">BingX</th>
                  <th className="text-left p-4 font-semibold">MEXC</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="p-4 text-sm font-medium">{row.feature[lang as keyof typeof row.feature] || row.feature.en}</td>
                    <td className="p-4 text-sm text-[#2483FF] font-semibold bg-[#0B1A2E]/30">{row.toobit}</td>
                    <td className="p-4 text-sm">{row.bitunix}</td>
                    <td className="p-4 text-sm">{row.bingx}</td>
                    <td className="p-4 text-sm">{row.mexc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Comparisons */}
        <section className="mb-12 space-y-8">
          {detailedComparisons.map((comp, i) => (
            <div key={i} className="bg-[#1A1D26] rounded-2xl p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4 text-[#2483FF]">⚔️ {comp.title}</h2>
              <ul className="space-y-2">
                {comp.points.map((point, j) => (
                  <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-[#2483FF] mt-0.5">•</span>
                    {point[lang as keyof typeof point] || point.en}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Verdict */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">🏆 {t('vsVerdict', lang)}</h2>
          <div className="bg-gradient-to-r from-[#1A1D26] to-[#0B1A2E] rounded-2xl p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed text-lg">{t('vsVerdictDesc', lang)}</p>
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
