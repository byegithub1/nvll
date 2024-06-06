'use server'

import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
type Locale = (typeof locales)[number]
const locales = ['de', 'en', 'fr', 'id', 'jp', 'ru'] as const

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound()
  return { messages: (await import(`@/language/${locale}.json`)).default }
})
