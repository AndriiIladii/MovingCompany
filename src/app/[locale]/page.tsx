'use client'
import { useTranslations } from 'next-intl'

export default function Home() {

  const t = useTranslations('hero');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="mt-4 text-lg text-zinc-500">{t('subtitle')}</p>
    </div>
  );



}
