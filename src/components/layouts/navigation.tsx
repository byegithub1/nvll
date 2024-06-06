'use client'

import Link from 'next/link'
import LanguageSwitcher from '@/components/layouts/language-switcher'

import { usePathname } from 'next/navigation'
import { HomeOutlined, EditOutlined, CoffeeOutlined } from '@ant-design/icons'

const Navigation = () => {
  const currentPath = usePathname().split('/').pop()
  const navItems = [
    { path: `/`, icon: <HomeOutlined />, title: 'Home' },
    { path: `/write`, icon: <EditOutlined />, title: 'Write' },
    { path: `/buy-me-a-coffee`, icon: <CoffeeOutlined />, title: 'Buy Me a Coffee' }
  ]

  return (
    <nav className="navigation-wrapper">
      {navItems.map((item) => (
        <Link
          className={`no-print item ${(!currentPath && item.path === `/`) || currentPath === item.path.split('/').pop() ? 'item--active' : ''}`}
          key={item.path}
          title={item.title}
          href={item.path}
        >
          {item.icon}
        </Link>
      ))}
      <LanguageSwitcher />
    </nav>
  )
}

export default Navigation
