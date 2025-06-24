import { useReducer } from 'react'
import Count from './Count'
import CountButton from './CountButton'
import countReducer from './countReducer'


function CountDispay() {

    const [count , countDispatch] = useReducer(countReducer , 0);

  return (
    <>
        <Count count = {count} />
        <CountButton countDispatch = { countDispatch } />
    </>
  )
}

export default CountDispay;