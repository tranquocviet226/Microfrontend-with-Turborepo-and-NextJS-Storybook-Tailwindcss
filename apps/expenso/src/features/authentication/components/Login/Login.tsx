import React from 'react'

import HrosInput from '@/components/common/HrosInput'
import type { ILoginRequest } from '@/services/models/authentication/ILoginRequest'
import loginSchema from '@/services/schema-validation/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@hros/ui'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

type LoginProps = {
  onLogin: (credentials: ILoginRequest) => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })
  const { t } = useTranslation()

  return (
    <div>
      <h2 className="font-bold">{t('authentication.login')}</h2>
      <form onSubmit={handleSubmit(onLogin)}>
        <div className="flex gap-2">
          <div>
            <HrosInput
              register={register('email')}
              placeholder="Email"
            />
            <p className='text-red-500 text-xs ml-2'>{errors.email?.message}</p>
          </div>
          <div>
            <HrosInput
              register={register('password')}
              type="password"
              placeholder="Password"
            />
            <p className='text-red-500 text-xs ml-2'>{errors.password?.message}</p>
          </div>
        </div>
        <Button classes="mt-2" type="submit">
          {t('authentication.login')}
        </Button>
      </form>
    </div>
  )
}

export default Login
