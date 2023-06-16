// components/Counter.tsx
import React from 'react'

import HrosButton from '@/components/common/HrosButton'

import AuthContainer from '../authentication/AuthContainer'

type CounterProps = {
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

const Counter: React.FC<CounterProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <HrosButton color='danger' onClick={onIncrement} classes='mr-4'>
        Increment
      </HrosButton>
      <HrosButton startIcon='-' onClick={onDecrement} variant='outlined'>
        Decrement
      </HrosButton>
      <AuthContainer />
    </div>
  )
}

export default Counter
