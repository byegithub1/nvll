'use client'

import { useTranslations } from 'next-intl'

const Footer = () => {
  const redL = useTranslations('Footer')
  const sourceUrl = 'https://github.com/rvnrstnsyh/nvll'

  return (
    <div className="footer-wrapper">
      <hr />
      <h2>
        &copy; {new Date().getFullYear()} NVLL.ME |&nbsp;
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer nofollow">
          {redL('source')}
        </a>
      </h2>
    </div>
  )
}

export default Footer
