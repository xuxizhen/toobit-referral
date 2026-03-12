import type { Metadata } from 'next';
import { Language, t, isValidLanguage, generateStaticParams as generateLangParams } from '@/lib/i18n';
import CTA from '@/components/CTA';

export function generateStaticParams() { return generateLangParams(); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  return {
    title: t('safetyTitle', lang as Language),
    description: t('safetyMetaDesc', lang as Language),
    alternates: { canonical: `https://www.toobit.guru/${lang}/safety` },
  };
}

export default async function SafetyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('safetyTitle', lang)}</h1>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">{t('safetyMetaDesc', lang)}</p>

        {/* Safety Confirmation */}
        <div className="bg-gradient-to-r from-[#0B2E1B] to-[#0B0E11] rounded-2xl p-8 text-center mb-12 border border-green-900">
          <p className="text-6xl font-bold text-[#00D26A] mb-2">✅</p>
          <p className="text-2xl font-bold">
            {lang === 'zh-cn' ? '是的，Toobit是安全的。' : lang === 'zh-tw' ? '是的，Toobit是安全的。' : lang === 'ja' ? 'はい、Toobitは安全です。' : lang === 'ko' ? '네, Toobit은 안전합니다.' : lang === 'es' ? 'Sí, Toobit es seguro.' : lang === 'ar' ? 'نعم، Toobit آمن.' : lang === 'fa' ? 'بله، Toobit امن است.' : 'Yes, Toobit is safe.'}
          </p>
          <p className="text-gray-400 mt-2">
            {lang === 'zh-cn' ? '多层安全架构、冷存储、24/7风控' : lang === 'zh-tw' ? '多層安全架構、冷儲存、24/7風控' : lang === 'ja' ? '多層セキュリティ、コールドストレージ、24/7リスク管理' : lang === 'ko' ? '다층 보안, 콜드 스토리지, 24/7 리스크 관리' : 'Multi-layer security, cold storage, 24/7 risk management'}
          </p>
        </div>

        {/* Regulatory Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🏛️ {t('safetyRegulation', lang)}</h2>
          <div className="bg-[#1A1D26] rounded-2xl p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed">
              {lang === 'zh-cn' ? 'Toobit作为全球加密货币交易所运营，遵守适用的法律法规。平台实施严格的KYC/AML政策，确保合规运营，为全球用户提供安全可靠的交易环境。' : lang === 'zh-tw' ? 'Toobit作為全球加密貨幣交易所運營，遵守適用的法律法規。平台實施嚴格的KYC/AML政策，確保合規運營。' : lang === 'ja' ? 'Toobitはグローバルな暗号通貨取引所として、適用される法令を遵守して運営しています。厳格なKYC/AMLポリシーを実施し、安全で信頼性の高い取引環境を提供しています。' : 'Toobit operates as a global cryptocurrency exchange in compliance with applicable laws and regulations. The platform implements strict KYC/AML policies to ensure regulatory compliance and provide a safe, reliable trading environment for users worldwide.'}
            </p>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🔒 {t('safetySecurity', lang)}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🧊', title: { en: 'Cold Storage', 'zh-cn': '冷存储', 'zh-tw': '冷儲存', ja: 'コールドストレージ', ko: '콜드 스토리지' }, desc: { en: 'Majority of user assets stored in air-gapped cold wallets, protected from online threats.', 'zh-cn': '大部分用户资产存储在隔离的冷钱包中，免受在线威胁。', 'zh-tw': '大部分用戶資產存儲在隔離的冷錢包中，免受線上威脅。', ja: 'ユーザー資産の大部分をエアギャップのコールドウォレットに保管。', ko: '사용자 자산의 대부분을 에어갭 콜드 월렛에 보관.' } },
              { icon: '🔐', title: { en: '2FA Authentication', 'zh-cn': '双重认证', 'zh-tw': '雙重認證', ja: '2FA認証', ko: '2FA 인증' }, desc: { en: 'Two-factor authentication supported via authenticator apps for enhanced account security.', 'zh-cn': '支持通过认证器应用进行双重认证，增强账户安全性。', 'zh-tw': '支持通過認證器應用進行雙重認證，增強帳戶安全性。', ja: '認証アプリによる二要素認証でアカウントセキュリティを強化。', ko: '인증 앱을 통한 이중 인증으로 계정 보안 강화.' } },
              { icon: '🛡️', title: { en: 'Risk Management', 'zh-cn': '风险管理', 'zh-tw': '風險管理', ja: 'リスク管理', ko: '리스크 관리' }, desc: { en: 'Advanced risk management systems monitor transactions 24/7 to detect and prevent suspicious activities.', 'zh-cn': '高级风险管理系统全天候监控交易，检测和防止可疑活动。', 'zh-tw': '高級風險管理系統全天候監控交易，檢測和防止可疑活動。', ja: '高度なリスク管理システムが24時間取引を監視し、不審な活動を検出・防止します。', ko: '고급 리스크 관리 시스템이 24/7 거래를 모니터링하여 의심스러운 활동을 감지합니다.' } },
            ].map((item, i) => (
              <div key={i} className="bg-[#1A1D26] rounded-2xl p-6 text-center border border-gray-800">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title[lang as keyof typeof item.title] || item.title.en}</h3>
                <p className="text-sm text-gray-400">{item.desc[lang as keyof typeof item.desc] || item.desc.en}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Background */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">👔 {t('safetyLeadership', lang)}</h2>
          <div className="bg-[#1A1D26] rounded-2xl p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed">
              {lang === 'zh-cn' ? 'Toobit由经验丰富的金融科技和区块链专业人士团队创建，致力于为全球用户提供安全、高效、易用的加密货币交易平台。团队在交易技术、安全系统和用户体验方面拥有深厚的专业知识。' : lang === 'zh-tw' ? 'Toobit由經驗豐富的金融科技和區塊鏈專業人士團隊創建，致力於為全球用戶提供安全、高效、易用的加密貨幣交易平台。' : lang === 'ja' ? 'Toobitは経験豊富なフィンテック・ブロックチェーンの専門家チームによって設立され、安全で効率的で使いやすい暗号通貨取引プラットフォームの提供に取り組んでいます。' : 'Toobit was founded by a team of experienced fintech and blockchain professionals dedicated to providing a secure, efficient, and user-friendly cryptocurrency trading platform. The team brings deep expertise in trading technology, security systems, and user experience design.'}
            </p>
          </div>
        </section>

        {/* Asset Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🤝 {t('safetyFTX', lang)}</h2>
          <div className="bg-[#1A1D26] rounded-2xl p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed">
              {lang === 'zh-cn' ? 'Toobit采用严格的资产隔离制度，用户资产与公司运营资金完全分离。通过冷热钱包分离策略、多签名技术和定期储备金证明，确保用户资产的安全性和透明度。' : lang === 'zh-tw' ? 'Toobit採用嚴格的資產隔離制度，用戶資產與公司運營資金完全分離。通過冷熱錢包分離策略和多簽名技術，確保用戶資產的安全性。' : lang === 'ja' ? 'Toobitは厳格な資産分離制度を採用し、ユーザー資産と会社運営資金を完全に分離しています。コールド/ホットウォレット分離、マルチシグ技術により資産の安全性を確保しています。' : 'Toobit implements strict asset segregation policies, keeping user assets completely separate from company operational funds. Through cold/hot wallet separation strategies, multi-signature technology, and regular reserve attestations, user asset safety and transparency are ensured.'}
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#00D26A] to-emerald-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-black">{t('readyTitle', lang)}</h2>
          <p className="text-lg mb-8 text-black/80">{t('readyDescription', lang)}</p>
          <CTA lang={lang} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
