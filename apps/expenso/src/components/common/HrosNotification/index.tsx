import { Transition } from '@headlessui/react'
import React from 'react'

export type INotificationType = 'success' | 'error' | 'warning' | 'info'

export interface HrosNotificationProps {
  message: string
  type: INotificationType
  onClose?: () => void
}

const HrosNotification = ({
  message,
  type,
  onClose = () => {},
}: HrosNotificationProps) => {
  const getNotificationClass = () => {
    let classes = 'fixed top-4 right-4 px-4 py-2 rounded-md shadow-md'
    if (type === 'success') {
      classes += ' bg-green-500 text-white'
    } else if (type === 'error') {
      classes += ' bg-red-500 text-white'
    } else if (type === 'warning') {
      classes += ' bg-yellow-500 text-white'
    } else {
      classes += ' bg-blue-500 text-white'
    }
    return classes
  }

  return (
    <Transition
      show
      afterLeave={onClose}
      enter='transition ease-out duration-300'
      enterFrom='opacity-0 translate-y-4'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-300'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-4'
    >
      <div className={getNotificationClass()}>
        <p>{message}</p>
      </div>
    </Transition>
  )
}

export default HrosNotification
