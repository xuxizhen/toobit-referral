import type { Metadata } from 'next';
import { Language, t, isValidLanguage, generateStaticParams as generateLangParams } from '@/lib/i18n';
import CTA from '@/components/CTA';

export function generateStaticParams() { return generateLangParams(); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  return {
    title: t('feesTitle', lang as Language),
    description: t('feesMetaDesc', lang as Language),
    alternates: { canonical: `https://www.toobit.guru/${lang}/fees` },
  };
}

export default async function FeesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const spotFees = [
    { tier: 'Base', maker: '0.1%', taker: '0.1%' },
    { tier: 'VIP 1', maker: '0.08%', taker: '0.08%' },
    { tier: 'VIP 2', maker: '0.06%', taker: '0.06%' },
    { tier: 'VIP 3', maker: '0.04%', taker: '0.04%' },
  ];

  const comparison = [
    { exchange: 'Toobit', maker: '0.1%', taker: '0.1%', highlight: true },
    { exchange: 'Bitunix', maker: '0.1%', taker: '0.1%', highlight: false },
    { exchange: 'BingX', maker: '0.1%', taker: '0.1%', highlight: false },
    { exchange: 'MEXC', maker: '0%', taker: '0.1%', highlight: false },
    { exchange: 'Binance', maker: '0.1%', taker: '0.1%', highlight: false },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('feesTitle', lang)}</h1>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">{t('feesMetaDesc', lang)}</p>

        {/* Spot Fees */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">📊 {t('feesSpotTitle', lang)}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1D26]">
                  <th className="text-left p-4 font-semibold">Tier</th>
                  <th className="text-left p-4 font-semibold">{t('maker', lang)}</th>
                  <th className="text-left p-4 font-semibold">{t('taker', lang)}</th>
                </tr>
              </thead>
              <tbody>
                {spotFees.map((fee, i) => (
                  <tr key={i} className={i === 0 ? 'bg-[#0B1A2E] font-semibold' : 'border-b border-gray-800'}>
                    <td className="p-4">{fee.tier}</td>
                    <td className="p-4 text-[#2483FF]">{fee.maker}</td>
                    <td className="p-4">{fee.taker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Futures Fees */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">📈 {t('feesFuturesTitle', lang)}</h2>
          <div className="bg-[#1A1D26] rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0B0E11] rounded-xl p-6 border border-gray-800">
                <p className="text-sm text-gray-400 mb-1">{t('maker', lang)}</p>
                <p className="text-3xl font-bold text-[#2483FF]">0.02%</p>
              </div>
              <div className="bg-[#0B0E11] rounded-xl p-6 border border-gray-800">
                <p className="text-sm text-gray-400 mb-1">{t('taker', lang)}</p>
                <p className="text-3xl font-bold">0.06%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deposit & Withdrawal */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">💰 {t('feesDepositTitle', lang)}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0B1A2E] rounded-2xl p-6 border border-blue-800">
              <h3 className="font-bold text-lg mb-3">
                {lang === 'zh-cn' ? '充值' : lang === 'zh-tw' ? '充值' : lang === 'ja' ? '入金' : lang === 'ko' ? '입금' : 'Deposits'}
              </h3>
              <p className="text-3xl font-bold text-[#2483FF] mb-2">
                {lang === 'zh-cn' ? '免费' : lang === 'zh-tw' ? '免費' : lang === 'ja' ? '無料' : lang === 'ko' ? '무료' : 'FREE'}
              </p>
              <p className="text-sm text-gray-400">
                {lang === 'zh-cn' ? '所有加密货币充值零手续费' : lang === 'zh-tw' ? '所有加密貨幣充值零手續費' : lang === 'ja' ? 'すべての暗号通貨入金手数料ゼロ' : 'Zero fees for all crypto deposits'}
              </p>
            </div>
            <div className="bg-[#1A1D26] rounded-2xl p-6 border border-gray-800">
              <h3 className="font-bold text-lg mb-3">
                {lang === 'zh-cn' ? '提现' : lang === 'zh-tw' ? '提現' : lang === 'ja' ? '出金' : lang === 'ko' ? '출금' : 'Withdrawals'}
              </h3>
              <p className="text-3xl font-bold text-white mb-2">
                {lang === 'zh-cn' ? '按网络收费' : lang === 'zh-tw' ? '按網路收費' : lang === 'ja' ? 'ネットワークにより異なる' : 'Varies by Network'}
              </p>
              <p className="text-sm text-gray-400">
                {lang === 'zh-cn' ? '提现费用因区块链网络而异' : lang === 'zh-tw' ? '提現費用因區塊鏈網路而異' : 'Withdrawal fees depend on the blockchain network used'}
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">⚖️ {t('feesComparison', lang)}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1D26]">
                  <th className="text-left p-4 font-semibold">Exchange</th>
                  <th className="text-left p-4 font-semibold">{t('maker', lang)}</th>
                  <th className="text-left p-4 font-semibold">{t('taker', lang)}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-[#0B1A2E] font-bold' : 'border-b border-gray-800'}>
                    <td className="p-4">{row.exchange} {row.highlight && '⭐'}</td>
                    <td className="p-4">{row.maker}</td>
                    <td className="p-4">{row.taker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
