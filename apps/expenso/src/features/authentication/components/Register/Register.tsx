import React from 'react'

import HrosInput from '@/components/common/HrosInput'
import type { ILoginRequest } from '@/services/models/authentication/ILoginRequest'
import { Button } from '@hros/ui'

type RegisterProps = {
  onRegister: (credentials: ILoginRequest) => void
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [formState, setFormState] = React.useState<ILoginRequest>({
    email: '',
    password: '',
  })

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }))

  return (
    <div>
      <h2>Login</h2>
      <div>
        <HrosInput
          onChange={handleChange}
          name='email'
          placeholder='Email'
          classes='mr-2'
        />
        <HrosInput
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='Password'
        />
      </div>

      <Button classes='mt-2' onClick={() => onRegister(formState)}>
        Login
      </Button>
    </div>
  )
}

export default Register
