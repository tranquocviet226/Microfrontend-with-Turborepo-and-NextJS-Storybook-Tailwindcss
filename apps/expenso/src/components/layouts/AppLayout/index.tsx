'use client'

import React, { useEffect } from 'react'

import LoginPage from '@/app/login/page'
import HrosNotification from '@/components/common/HrosNotification'
import { hideNotify } from '@/stores/appSlice'
import { useAppDispatch, useTypedSelector } from '@/stores/configureStore'
import useAuth from '@/utils/hooks/useAuth'

import Footer from '../Footer'
import Header from '../Header'
import { useTranslation } from 'react-i18next'

interface AppLayoutProps {
  children: React.ReactNode
}
const AppLayout = ({ children }: AppLayoutProps) => {
  const dispatch = useAppDispatch()
  const { i18n } = useTranslation()
  const { isAuthenticated } = useAuth()
  const { notification, language, theme, mode } = useTypedSelector(
    (state) => state.app,
  )

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.setAttribute('data-mode', 'dark')
    } else document.documentElement.setAttribute('data-mode', 'light')
  }, [mode])

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme.value)
    }
  }, [theme])

  return (
    <div className="bg-bg-primary dark:text-white">
      <Header />
      <div className="min-h-[calc(100vh-48px)] pt-14">
        {notification && (
          <HrosNotification
            message={notification.message}
            type={notification.type}
            onClose={() => dispatch(hideNotify())}
          />
        )}
        {isAuthenticated ? children : <LoginPage />}
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
