import React, { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext'

function CounterPage() {

  const {counter, setCounter} = useContext(CounterContext);

  return (<>
    <h1>{counter}</h1>
    <button onClick={() => setCounter(counter + 1)}>Increase</button>
  </>
  )
}

export default CounterPage