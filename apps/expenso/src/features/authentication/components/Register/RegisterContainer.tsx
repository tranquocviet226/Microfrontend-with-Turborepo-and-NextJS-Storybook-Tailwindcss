'use client'

import type { ILoginRequest } from '@/services/models/authentication/ILoginRequest'
import useNotify from '@/utils/hooks/useNotify'

import Register from './Register'

const RegisterContainer = () => {
  const { show } = useNotify()
  const handleRegister = async (credentials: ILoginRequest) => {
    // handle register
    show({ type: 'info', message: `Email: ${credentials.email}` })
  }

  return (
    <div>
      <Register onRegister={handleRegister} />
    </div>
  )
}

export default RegisterContainer
