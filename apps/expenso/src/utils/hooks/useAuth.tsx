import type { INotificationType } from '@/components/common/HrosNotification'
import { useTypedSelector } from '@/stores/configureStore'

export interface INotifyOptions {
  message: string
  duration?: number
  type: INotificationType
}

const useAuth = () => {
  const { token } = useTypedSelector((state) => state.auth)

  const isAuthenticated = () => {
    return Boolean(token)
  }

  return {
    isAuthenticated: isAuthenticated(),
  }
}

export default useAuth
