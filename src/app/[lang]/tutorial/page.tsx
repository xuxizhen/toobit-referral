import type { Metadata } from 'next';
import { Language, t, isValidLanguage, generateStaticParams as generateLangParams } from '@/lib/i18n';
import CTA from '@/components/CTA';

export function generateStaticParams() { return generateLangParams(); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  return {
    title: t('tutorialTitle', lang as Language),
    description: t('tutorialMetaDesc', lang as Language),
    alternates: { canonical: `https://www.toobit.guru/${lang}/tutorial` },
  };
}

export default async function TutorialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const steps = [
    { number: 1, title: t('tutorialStep1', lang), icon: '🔗',
      description: { en: 'Click our exclusive referral link below to open the Toobit registration page. This ensures you automatically receive the 10% trading fee bonus.', 'zh-cn': '点击下方我们的专属邀请链接，打开Toobit注册页面。这确保您自动获得10%交易手续费奖励。', 'zh-tw': '點擊下方我們的專屬邀請連結，打開Toobit註冊頁面。這確保您自動獲得10%交易手續費獎勵。', ja: '下の専用紹介リンクをクリックしてToobitの登録ページを開きます。10%取引手数料ボーナスが自動的に適用されます。', ko: '아래의 전용 추천 링크를 클릭하여 Toobit 등록 페이지를 엽니다. 10% 거래 수수료 보너스가 자동 적용됩니다.' } },
    { number: 2, title: t('tutorialStep2', lang), icon: '📧',
      description: { en: 'Enter your email address or phone number in the registration form. You will receive a verification code to confirm your identity.', 'zh-cn': '在注册表单中输入您的电子邮件地址或手机号码。您将收到一个验证码来确认您的身份。', 'zh-tw': '在註冊表單中輸入您的電子郵件地址或手機號碼。您將收到一個驗證碼來確認您的身份。', ja: '登録フォームにメールアドレスまたは電話番号を入力します。確認コードが送信されます。', ko: '등록 양식에 이메일 주소 또는 전화번호를 입력하세요. 확인 코드를 받게 됩니다.' } },
    { number: 3, title: t('tutorialStep3', lang), icon: '🔒',
      description: { en: 'Create a strong password with at least 8 characters, including uppercase, lowercase, numbers, and special characters. Enable 2FA for extra security.', 'zh-cn': '创建一个强密码，至少8个字符，包含大写字母、小写字母、数字和特殊字符。启用双重认证以提高安全性。', 'zh-tw': '創建一個強密碼，至少8個字符，包含大寫字母、小寫字母、數字和特殊字符。啟用雙重認證以提高安全性。', ja: '大文字、小文字、数字、特殊文字を含む8文字以上の強力なパスワードを作成します。', ko: '대문자, 소문자, 숫자, 특수 문자를 포함한 8자 이상의 강력한 비밀번호를 만드세요.' } },
    { number: 4, title: t('tutorialStep4', lang), icon: '🪪',
      description: { en: 'Upload your government-issued ID (passport, driver\'s license, or national ID) and a selfie for identity verification. KYC is typically approved within minutes.', 'zh-cn': '上传您的政府颁发的身份证件和自拍照进行身份验证。KYC通常在几分钟内通过审核。', 'zh-tw': '上傳您的政府頒發的身份證件和自拍照進行身份驗證。KYC通常在幾分鐘內通過審核。', ja: '政府発行の身分証明書と自撮り写真をアップロードして本人確認を行います。', ko: '정부 발행 신분증과 셀피를 업로드하여 신원 확인을 완료하세요.' } },
    { number: 5, title: t('tutorialStep5', lang), icon: '💰',
      description: { en: 'Deposit crypto from another wallet or exchange. Toobit supports all major cryptocurrencies with zero deposit fees.', 'zh-cn': '从其他钱包或交易所充值加密货币。Toobit支持所有主要加密货币，充值零手续费。', 'zh-tw': '從其他錢包或交易所充值加密貨幣。Toobit支持所有主要加密貨幣，充值零手續費。', ja: '他のウォレットや取引所から暗号通貨を入金します。入金手数料はゼロです。', ko: '다른 지갑이나 거래소에서 암호화폐를 입금하세요. 입금 수수료는 무료입니다.' } },
    { number: 6, title: t('tutorialStep6', lang), icon: '🎉',
      description: { en: 'You\'re all set! Start trading spot, futures, or use copy trading to follow top traders. Enjoy your 10% fee discount on every trade.', 'zh-cn': '一切准备就绪！开始现货交易、合约交易，或使用跟单交易跟随顶级交易者。每笔交易享受10%手续费折扣。', 'zh-tw': '一切準備就緒！開始現貨交易、合約交易，或使用跟單交易跟隨頂級交易者。每筆交易享受10%手續費折扣。', ja: '準備完了です！スポット、先物取引やコピートレードを始めましょう。10%の手数料割引をお楽しみください。', ko: '모든 준비가 완료되었습니다! 현물, 선물 거래 또는 카피 트레이딩을 시작하세요. 10% 수수료 할인을 즐기세요.' } },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('tutorialTitle', lang)}</h1>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">{t('tutorialMetaDesc', lang)}</p>

        <div className="space-y-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#2483FF] to-blue-500 rounded-full flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="flex-1">
                <span className="text-sm font-bold text-[#2483FF] bg-[#0B1A2E] px-3 py-1 rounded-full">
                  {lang === 'zh-cn' || lang === 'zh-tw' ? `第${step.number}步` : lang === 'ja' ? `ステップ ${step.number}` : lang === 'ko' ? `${step.number}단계` : `Step ${step.number}`}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description[lang as keyof typeof step.description] || step.description.en}</p>
              </div>
            </div>
          ))}
        </div>

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
