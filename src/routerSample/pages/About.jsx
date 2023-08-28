import React, { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext'

function About() {

 const {counter, setCounter} =  useContext(CounterContext)

  return (<>
  <h1 style={{color:'tomato'}}>{counter}</h1>
  <button onClick={() => setCounter(0)}>Empty</button>
  </>
  )
}

export default About