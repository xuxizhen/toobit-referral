import type { Metadata } from 'next';
import { Language, t, isValidLanguage, generateStaticParams as generateLangParams } from '@/lib/i18n';
import CTA from '@/components/CTA';

export function generateStaticParams() { return generateLangParams(); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  return {
    title: t('referralTitle', lang as Language),
    description: t('referralMetaDesc', lang as Language),
    alternates: { canonical: `https://www.toobit.guru/${lang}/referral` },
  };
}

export default async function ReferralPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const howItWorks = [
    { step: 1, icon: '📝',
      title: { en: 'Sign Up with Referral Link', 'zh-cn': '通过邀请链接注册', 'zh-tw': '透過邀請連結註冊', ja: '紹介リンクで登録', ko: '추천 링크로 가입', es: 'Regístrate con el enlace', ar: 'سجّل عبر رابط الإحالة' },
      desc: { en: 'Register on Toobit using our referral link to activate the 10% commission bonus for both you and the person who referred you.', 'zh-cn': '使用我们的邀请链接在Toobit注册，为您和推荐人激活10%佣金奖励。', 'zh-tw': '使用我們的邀請連結在Toobit註冊，為您和推薦人激活10%佣金獎勵。', ja: '紹介リンクを使ってToobitに登録し、10%コミッションボーナスを有効にします。', ko: '추천 링크를 사용하여 Toobit에 가입하고 10% 커미션 보너스를 활성화하세요.', es: 'Regístrate en Toobit usando nuestro enlace para activar el bono del 10%.', ar: 'سجّل في Toobit عبر رابط الإحالة لتفعيل مكافأة 10٪.' } },
    { step: 2, icon: '💱',
      title: { en: 'Trade on the Platform', 'zh-cn': '在平台上交易', 'zh-tw': '在平台上交易', ja: 'プラットフォームで取引', ko: '플랫폼에서 거래', es: 'Opera en la plataforma', ar: 'تداول على المنصة' },
      desc: { en: 'Every trade you make generates trading fees. With the referral program, 10% of those fees are returned to you as a commission rebate.', 'zh-cn': '您的每笔交易都会产生交易手续费。通过推荐计划，其中10%将作为佣金返还给您。', 'zh-tw': '您的每筆交易都會產生交易手續費。透過推薦計劃，其中10%將作為佣金返還給您。', ja: '取引するたびに取引手数料が発生します。紹介プログラムでは、その10%がコミッションとして還元されます。', ko: '모든 거래에서 거래 수수료가 발생합니다. 추천 프로그램을 통해 수수료의 10%가 커미션으로 환급됩니다.', es: 'Cada operación genera comisiones. Con el programa de referidos, el 10% te es devuelto.', ar: 'كل صفقة تولّد رسوم تداول. مع برنامج الإحالة، يتم إرجاع 10٪ إليك.' } },
    { step: 3, icon: '🔗',
      title: { en: 'Share Your Own Code', 'zh-cn': '分享您的邀请码', 'zh-tw': '分享您的邀請碼', ja: '自分のコードを共有', ko: '자신의 코드 공유', es: 'Comparte tu código', ar: 'شارك رمزك الخاص' },
      desc: { en: 'Once registered, get your own referral code from the dashboard. Share it with friends and earn 10% commission on all their trading fees, paid out automatically.', 'zh-cn': '注册后，从仪表板获取您自己的邀请码。与朋友分享，自动获得他们所有交易手续费的10%佣金。', 'zh-tw': '註冊後，從儀表板獲取您自己的邀請碼。與朋友分享，自動獲得他們所有交易手續費的10%佣金。', ja: '登録後、ダッシュボードから自分の紹介コードを取得します。友人と共有して10%コミッションを獲得しましょう。', ko: '가입 후 대시보드에서 자신의 추천 코드를 받으세요. 친구와 공유하고 10% 커미션을 획득하세요.', es: 'Tras registrarte, obtén tu código de referido y compártelo para ganar 10% de comisión.', ar: 'بعد التسجيل، احصل على رمز الإحالة الخاص بك وشاركه لكسب 10٪ عمولة.' } },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('referralTitle', lang)}</h1>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">{t('referralMetaDesc', lang)}</p>

        {/* Commission Highlight */}
        <div className="bg-gradient-to-r from-[#0B2E1B] to-[#0B0E11] rounded-2xl p-8 text-center mb-12 border border-green-900">
          <p className="text-6xl font-bold text-[#00D26A] mb-2">10%</p>
          <p className="text-xl font-semibold">{t('referralEarn', lang)}</p>
          <p className="text-gray-400 mt-2">
            {lang === 'zh-cn' ? '终身享受您推荐人每笔交易的佣金' : lang === 'zh-tw' ? '終身享受您推薦人每筆交易的佣金' : lang === 'ja' ? '紹介者の取引に対して永続的にコミッションを獲得' : lang === 'ko' ? '추천인의 모든 거래에서 평생 커미션' : 'On every trade your referrals make — for life'}
          </p>
        </div>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">{t('referralHowItWorks', lang)}</h2>
          <div className="space-y-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#00D26A] to-emerald-500 rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <span className="text-sm font-bold text-[#00D26A] bg-[#0B2E1B] px-3 py-1 rounded-full">
                    {lang === 'zh-cn' || lang === 'zh-tw' ? `第${item.step}步` : lang === 'ja' ? `ステップ ${item.step}` : lang === 'ko' ? `${item.step}단계` : `Step ${item.step}`}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{item.title[lang as keyof typeof item.title] || item.title.en}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc[lang as keyof typeof item.desc] || item.desc.en}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: { en: 'Passive Income', 'zh-cn': '被动收入', 'zh-tw': '被動收入', ja: '不労所得', ko: '패시브 인컴' }, desc: { en: 'Earn while you sleep. Your referrals trade, you earn 10%.', 'zh-cn': '睡觉时也能赚钱。推荐人交易，您赚取10%。', 'zh-tw': '睡覺時也能賺錢。推薦人交易，您賺取10%。', ja: '寝ている間にも稼げます。紹介者が取引すると10%獲得。', ko: '잠자는 동안에도 수익을 올리세요. 추천인이 거래하면 10%를 획득합니다.' } },
              { icon: '🔄', title: { en: 'Automatic Payouts', 'zh-cn': '自动支付', 'zh-tw': '自動支付', ja: '自動支払い', ko: '자동 지급' }, desc: { en: 'Commissions are credited to your account automatically.', 'zh-cn': '佣金自动计入您的账户。', 'zh-tw': '佣金自動計入您的帳戶。', ja: 'コミッションは自動的にアカウントに付与されます。', ko: '커미션은 자동으로 계정에 적립됩니다.' } },
              { icon: '♾️', title: { en: 'No Limits', 'zh-cn': '无上限', 'zh-tw': '無上限', ja: '上限なし', ko: '제한 없음' }, desc: { en: 'No cap on referrals or earnings. The more you share, the more you earn.', 'zh-cn': '推荐人数和收益无上限。分享越多，赚得越多。', 'zh-tw': '推薦人數和收益無上限。分享越多，賺得越多。', ja: '紹介人数や収益に上限はありません。', ko: '추천 인원이나 수익에 제한이 없습니다.' } },
            ].map((benefit, i) => (
              <div key={i} className="bg-[#1A1D26] rounded-2xl p-6 text-center border border-gray-800">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title[lang as keyof typeof benefit.title] || benefit.title.en}</h3>
                <p className="text-sm text-gray-400">{benefit.desc[lang as keyof typeof benefit.desc] || benefit.desc.en}</p>
              </div>
            ))}
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
