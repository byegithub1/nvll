'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition, ChangeEvent } from 'react'

const LanguageSwitcher = () => {
  const router = useRouter()
  const localeActive = useLocale()

  const [isPending, waitFor] = useTransition()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    document.cookie = `NEXT_LOCALE=${event.target.value}; path=/; max-age=31536000; SameSite=Lax`
    waitFor(() => router.refresh())
  }

  return (
    <select onChange={handleChange} value={localeActive} className="language-switcher no-print" disabled={isPending}>
      {['de', 'en', 'fr', 'id', 'jp', 'ru'].map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  )
}

export default LanguageSwitcher
