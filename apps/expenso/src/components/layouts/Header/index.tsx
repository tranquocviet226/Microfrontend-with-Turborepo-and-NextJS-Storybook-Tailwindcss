import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="fixed inset-x-0 top-0 flex h-14 items-center bg-primary-500 text-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-lg font-bold text-primary">Hros</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">
                {t('app.menu.home')}
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                {t('app.menu.about')}
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                {t('app.menu.contact')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
