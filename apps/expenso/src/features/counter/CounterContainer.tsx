// containers/CounterContainer.tsx

'use client'

import { useAppDispatch, useTypedSelector } from '@/stores/configureStore'

import Counter from './Counter'
import { decrement, increment } from './counterSlice'

const CounterContainer = () => {
  const count = useTypedSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <Counter
      count={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
}

export default CounterContainer
