export type Language = 'en' | 'zh-cn' | 'zh-tw' | 'fr' | 'pt' | 'it' | 'de' | 'ja' | 'ko' | 'fa' | 'es' | 'vi' | 'tr' | 'ar';

export const supportedLanguages: Language[] = ['en', 'zh-cn', 'zh-tw', 'fr', 'pt', 'it', 'de', 'ja', 'ko', 'fa', 'es', 'vi', 'tr', 'ar'];

export const languageNames: Record<Language, string> = {
  en: 'English',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
  fr: 'Français',
  pt: 'Português',
  it: 'Italiano',
  de: 'Deutsch',
  ja: '日本語',
  ko: '한국어',
  fa: 'فارسی',
  es: 'Español',
  vi: 'Tiếng Việt',
  tr: 'Türkçe',
  ar: 'العربية',
};

export const languageFlags: Record<Language, string> = {
  en: '🇺🇸',
  'zh-cn': '🇨🇳',
  'zh-tw': '🇹🇼',
  fr: '🇫🇷',
  pt: '🇵🇹',
  it: '🇮🇹',
  de: '🇩🇪',
  ja: '🇯🇵',
  ko: '🇰🇷',
  fa: '🇮🇷',
  es: '🇪🇸',
  vi: '🇻🇳',
  tr: '🇹🇷',
  ar: '🇸🇦',
};

export const localeMap: Record<Language, string> = {
  en: 'en_US',
  'zh-cn': 'zh_CN',
  'zh-tw': 'zh_TW',
  fr: 'fr_FR',
  pt: 'pt_BR',
  it: 'it_IT',
  de: 'de_DE',
  ja: 'ja_JP',
  ko: 'ko_KR',
  fa: 'fa_IR',
  es: 'es_ES',
  vi: 'vi_VN',
  tr: 'tr_TR',
  ar: 'ar_SA',
};

export const hreflangMap: Record<Language, string> = {
  en: 'en',
  'zh-cn': 'zh-Hans',
  'zh-tw': 'zh-Hant',
  fr: 'fr',
  pt: 'pt',
  it: 'it',
  de: 'de',
  ja: 'ja',
  ko: 'ko',
  fa: 'fa',
  es: 'es',
  vi: 'vi',
  tr: 'tr',
  ar: 'ar',
};

export const rtlLanguages: Language[] = ['fa', 'ar'];

export function isRtl(lang: Language): boolean {
  return rtlLanguages.includes(lang);
}

import { translations } from './translations';

export function t(key: string, lang: Language): string {
  return translations[key]?.[lang] || translations[key]?.en || key;
}

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export function isValidLanguage(lang: string): lang is Language {
  return supportedLanguages.includes(lang as Language);
}
