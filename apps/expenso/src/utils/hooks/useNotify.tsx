import type { INotificationType } from '@/components/common/HrosNotification'
import { hideNotify, showNotify } from '@/stores/appSlice'
import { useAppDispatch } from '@/stores/configureStore'

export interface INotifyOptions {
  message: string
  duration?: number
  type: INotificationType
}

const useNotify = () => {
  const dispatch = useAppDispatch()

  const show = (options: INotifyOptions) => {
    const { type = 'success', message = '', duration = 5000 } = options
    dispatch(showNotify({ message, type }))

    setTimeout(() => {
      hide()
    }, duration)
  }

  const hide = () => {
    dispatch(hideNotify())
  }

  return {
    show,
    hide,
  }
}

export default useNotify
