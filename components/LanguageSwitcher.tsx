'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useState, useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const changeLocale = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Remove current locale from pathname and add new locale
      const pathWithoutLocale = pathname.replace(`/${locale}`, '');
      const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
      router.push(newPath);
      setIsOpen(false);
    });
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-all duration-300"
        aria-label="Change language"
        disabled={isPending}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="text-lg">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 w-48 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLocale(lang.code)}
                disabled={isPending}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                  locale === lang.code
                    ? 'bg-red-600 text-white'
                    : 'text-white hover:bg-white/10'
                } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {locale === lang.code && (
                  <svg
                    className="w-4 h-4 ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
