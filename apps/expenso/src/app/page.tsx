'use client'

import { logout } from '@/features/authentication/authSlice'
import { ITheme } from '@/services/models/app/ITheme'
import { switchLanguage, switchMode, switchTheme } from '@/stores/appSlice'
import { useAppDispatch, useTypedSelector } from '@/stores/configureStore'
import i18n from '@/utils/config/i18n'
import { themes } from '@/utils/config/theme'
import { languages, modes } from '@/utils/constants'
import { Button } from '@hros/ui'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const dispatch = useAppDispatch()
  const { t, i18n } = useTranslation()
  const {
    app: { mode: currentMode },
    auth: { user },
  } = useTypedSelector((state) => state)

  const handleSwitchLanguage = (language: string) => {
    dispatch(switchLanguage(language))
  }

  const handleSwitchMode = (mode: string) => {
    dispatch(switchMode(mode))
  }

  const handleSelectTheme = (theme: ITheme) => {
    dispatch(switchTheme(theme))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <main className="p-4">
      <div>
        <div>
          <p>{t('app.header.chooseLanguage')}</p>
          <div className="flex gap-2">
            {languages.map((language) => (
              <div
                onClick={() => handleSwitchLanguage(language.key)}
                key={language.key}
                className={`border shadow rounded-lg px-2 py-1 cursor-pointer ${
                  i18n.resolvedLanguage === language.key
                    ? 'bg-primary-500 text-white'
                    : ''
                }`}
              >
                {language.label}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2">{t('app.header.chooseMode')}</p>
        <div className="flex gap-2">
          {modes.map((mode) => (
            <div
              onClick={() => handleSwitchMode(mode.key)}
              className={`border-2 shadow px-2 py-1 rounded-lg cursor-pointer ${
                currentMode === mode.key ? 'bg-primary-500 text-white' : ''
              }`}
              key={mode.key}
            >
              {mode.label}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2">
        <p>{t('app.header.chooseTheme')}</p>
        <div className="flex gap-2">
          {themes.map((theme) => (
            <div
              onClick={() => handleSelectTheme(theme)}
              style={{ background: theme.color }}
              key={theme.key}
              className="w-8 h-8 rounded cursor-pointer hover:opacity-95"
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div>
          Welcome back <span className="font-bold">{user?.legalName}</span>
        </div>
        <Button onClick={handleLogout} color="primary" variant="default">
          {t('app.logout')}
        </Button>
      </div>
    </main>
  )
}
