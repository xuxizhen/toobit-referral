import type { Metadata } from 'next';
import { Language, t, isValidLanguage, generateStaticParams as generateLangParams } from '@/lib/i18n';
import CTA from '@/components/CTA';

export function generateStaticParams() { return generateLangParams(); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  return {
    title: t('faqTitle', lang as Language),
    description: t('faqMetaDesc', lang as Language),
    alternates: { canonical: `https://www.toobit.guru/${lang}/faq` },
  };
}

interface FAQItem {
  q: Record<string, string>;
  a: Record<string, string>;
}

const faqs: FAQItem[] = [
  {
    q: { en: 'Is Toobit safe?', 'zh-cn': 'Toobit安全吗？', 'zh-tw': 'Toobit安全嗎？', ja: 'Toobitは安全ですか？', ko: 'Toobit은 안전한가요?', es: '¿Es seguro Toobit?', ar: 'هل Toobit آمن؟' },
    a: { en: 'Yes. Toobit employs multi-layer security architecture including cold storage for the majority of user assets, two-factor authentication (2FA), and advanced risk management systems. The platform undergoes regular security audits to ensure user funds are protected.', 'zh-cn': '是的。Toobit采用多层安全架构，包括冷存储保管大部分用户资产、双重认证（2FA）和高级风险管理系统。平台定期进行安全审计以确保用户资金安全。', 'zh-tw': '是的。Toobit採用多層安全架構，包括冷儲存保管大部分用戶資產、雙重認證（2FA）和高級風險管理系統。', ja: 'はい。Toobitは多層セキュリティ、コールドストレージ、2FA、高度なリスク管理を備えています。', ko: '네. Toobit은 다층 보안, 콜드 스토리지, 2FA, 고급 리스크 관리를 갖추고 있습니다.' },
  },
  {
    q: { en: 'What are the trading fees?', 'zh-cn': '交易费用是多少？', 'zh-tw': '交易費用是多少？', ja: '取引手数料はいくらですか？', ko: '거래 수수료는 얼마인가요?' },
    a: { en: 'Toobit offers competitive fees: 0.1% maker and 0.1% taker for spot trading, and 0.02% maker and 0.06% taker for futures trading. VIP tiers offer even lower fees. Crypto deposits are free.', 'zh-cn': 'Toobit提供有竞争力的费用：现货交易0.1%挂单和0.1%吃单，合约交易0.02%挂单和0.06%吃单。VIP等级可享更低费用。加密货币充值免费。', 'zh-tw': 'Toobit提供有競爭力的費用：現貨交易0.1%掛單和0.1%吃單，合約交易0.02%掛單和0.06%吃單。VIP等級可享更低費用。', ja: 'Toobitは競争力のある手数料を提供：現物取引0.1%メイカー/テイカー、先物取引0.02%メイカー/0.06%テイカー。入金手数料は無料です。', ko: 'Toobit은 경쟁력 있는 수수료를 제공합니다: 현물 0.1%/0.1%, 선물 0.02%/0.06%. 입금 수수료는 무료입니다.' },
  },
  {
    q: { en: 'Which countries are supported?', 'zh-cn': '支持哪些国家？', 'zh-tw': '支援哪些國家？', ja: 'どの国がサポートされていますか？', ko: '어떤 국가가 지원되나요?' },
    a: { en: 'Toobit is available in most countries worldwide. The platform supports multiple languages and offers localized support for users across Asia, Europe, Middle East, and more. Some restrictions may apply based on local regulations.', 'zh-cn': 'Toobit在全球大多数国家可用。平台支持多种语言，为亚洲、欧洲、中东等地区的用户提供本地化支持。某些地区可能因当地法规而有限制。', 'zh-tw': 'Toobit在全球大多數國家可用。平台支持多種語言，為亞洲、歐洲、中東等地區的用戶提供本地化支援。', ja: 'Toobitは世界のほとんどの国で利用可能です。多言語対応で、アジア、ヨーロッパ、中東などの地域にローカライズされたサポートを提供しています。', ko: 'Toobit은 전 세계 대부분의 국가에서 이용 가능합니다. 다국어 지원과 지역별 맞춤 지원을 제공합니다.' },
  },
  {
    q: { en: 'Is KYC required?', 'zh-cn': '需要KYC认证吗？', 'zh-tw': '需要KYC認證嗎？', ja: 'KYCは必要ですか？', ko: 'KYC가 필요한가요?' },
    a: { en: 'KYC verification is required for full access to all features. The process is quick and typically approved within minutes. You need a government-issued ID and a selfie.', 'zh-cn': 'KYC验证是获得所有功能完整访问权限的必要条件。流程快速，通常几分钟内通过审核。您需要政府颁发的身份证件和自拍照。', 'zh-tw': 'KYC驗證是獲得所有功能完整訪問權限的必要條件。流程快速，通常幾分鐘內通過審核。', ja: 'KYC認証はすべての機能にアクセスするために必要です。プロセスは迅速で、通常数分で承認されます。', ko: 'KYC 인증은 모든 기능에 대한 전체 액세스를 위해 필요합니다. 과정은 빠르며 보통 몇 분 내에 승인됩니다.' },
  },
  {
    q: { en: 'What is copy trading?', 'zh-cn': '什么是跟单交易？', 'zh-tw': '什麼是跟單交易？', ja: 'コピートレードとは？', ko: '카피 트레이딩이란?' },
    a: { en: 'Copy trading allows you to automatically replicate the trades of experienced and successful traders. You can browse top traders on Toobit, see their performance history, and choose to copy their trades with your own funds. It\'s a great way for beginners to learn and earn.', 'zh-cn': '跟单交易允许您自动复制经验丰富且成功的交易者的交易。您可以在Toobit上浏览顶级交易者，查看他们的业绩历史，并选择用自己的资金复制他们的交易。这是初学者学习和赚钱的好方法。', 'zh-tw': '跟單交易允許您自動複製經驗豐富且成功的交易者的交易。您可以在Toobit上瀏覽頂級交易者並選擇跟單。', ja: 'コピートレードでは経験豊富なトレーダーの取引を自動的に複製できます。Toobitでトップトレーダーを確認し、自分の資金でコピーできます。', ko: '카피 트레이딩을 통해 경험 많은 트레이더의 거래를 자동으로 복제할 수 있습니다. Toobit에서 최고의 트레이더를 찾아 그들의 거래를 복사하세요.' },
  },
  {
    q: { en: 'How does the referral program work?', 'zh-cn': '推荐计划如何运作？', 'zh-tw': '推薦計劃如何運作？', ja: '紹介プログラムはどのように機能しますか？', ko: '추천 프로그램은 어떻게 작동하나요?' },
    a: { en: 'When you register through a referral link, you receive a 10% trading fee commission rebate. You also get your own referral code to share with friends, earning 10% of their trading fees automatically.', 'zh-cn': '通过邀请链接注册后，您将获得10%交易手续费佣金返还。您还会获得自己的邀请码，与朋友分享后自动获得他们交易手续费的10%。', 'zh-tw': '通過邀請連結註冊後，您將獲得10%交易手續費佣金返還。您還會獲得自己的邀請碼，與朋友分享後自動獲得他們交易手續費的10%。', ja: '紹介リンクで登録すると、取引手数料の10%コミッションリベートを受け取ります。友人と共有できる自分の紹介コードも取得できます。', ko: '추천 링크로 가입하면 거래 수수료 10% 커미션 리베이트를 받습니다. 친구와 공유할 수 있는 자신의 추천 코드도 받게 됩니다.' },
  },
  {
    q: { en: 'What deposit methods are available?', 'zh-cn': '有哪些充值方式？', 'zh-tw': '有哪些充值方式？', ja: 'どのような入金方法がありますか？', ko: '어떤 입금 방법이 있나요?' },
    a: { en: 'Toobit supports crypto deposits from all major blockchains with zero fees. You can deposit BTC, ETH, USDT, USDC, and many other cryptocurrencies. Fiat on-ramp options are also available for select currencies.', 'zh-cn': 'Toobit支持所有主要区块链的加密货币充值，零手续费。您可以充值BTC、ETH、USDT、USDC等多种加密货币。部分法币入金渠道也可用。', 'zh-tw': 'Toobit支持所有主要區塊鏈的加密貨幣充值，零手續費。您可以充值BTC、ETH、USDT、USDC等多種加密貨幣。', ja: 'Toobitは主要なブロックチェーンからの暗号通貨入金を手数料ゼロでサポートしています。BTC、ETH、USDT、USDCなど多くの暗号通貨を入金できます。', ko: 'Toobit은 모든 주요 블록체인에서 수수료 없이 암호화폐 입금을 지원합니다. BTC, ETH, USDT, USDC 등을 입금할 수 있습니다.' },
  },
  {
    q: { en: 'How can I contact customer support?', 'zh-cn': '如何联系客服？', 'zh-tw': '如何聯繫客服？', ja: 'カスタマーサポートに連絡するには？', ko: '고객 지원팀에 어떻게 연락하나요?' },
    a: { en: 'Toobit offers 24/7 customer support via live chat and email. Support is available in multiple languages. The help center also provides comprehensive guides and FAQs to help you resolve common issues quickly.', 'zh-cn': 'Toobit通过在线聊天和电子邮件提供24/7客户支持。支持多种语言。帮助中心还提供全面的指南和常见问题解答。', 'zh-tw': 'Toobit透過線上聊天和電子郵件提供24/7客戶支援。支援多種語言。幫助中心還提供全面的指南和常見問題解答。', ja: 'Toobitはライブチャットとメールで24時間365日のカスタマーサポートを提供しています。多言語対応です。', ko: 'Toobit은 실시간 채팅과 이메일을 통해 24/7 고객 지원을 제공합니다. 다국어 지원이 가능합니다.' },
  },
];

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q[lang] || faq.q.en,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a[lang] || faq.a.en },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('faqTitle', lang)}</h1>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">{t('faqMetaDesc', lang)}</p>

        <div className="space-y-6 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#1A1D26] rounded-2xl p-6 border border-gray-800">
              <h2 className="text-lg font-bold mb-3 flex items-start gap-2">
                <span className="text-[#2483FF] flex-shrink-0">Q{i + 1}.</span>
                {faq.q[lang] || faq.q.en}
              </h2>
              <p className="text-gray-400 leading-relaxed pl-8">{faq.a[lang] || faq.a.en}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-[#2483FF] to-blue-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-black">{t('readyTitle', lang)}</h2>
          <p className="text-lg mb-8 text-black/80">{t('readyDescription', lang)}</p>
          <CTA lang={lang} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
