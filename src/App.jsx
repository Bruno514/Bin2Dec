import { useState } from 'react'
import './App.css'

function App() {
  const [binaryString, setBinaryString] = useState('')
  const [decimalNumber, setDecimalNumber] = useState(0)
  const [hasWarning, setHasWarning] = useState(false)

  function handleInputChange(e) {
    const input = e.target.value
    const last = input[input.length - 1]

    if (last >= 0 && last <= 1 || last == undefined) {
      setBinaryString(e.target.value)
      setHasWarning(false)
    }
    if (last != undefined && (last !== '1' && last !== '0'))
      setHasWarning(true)
  }

  function handleConversion(e) {
    e.preventDefault()
    let number = 0;

    for (let i = 0; i < binaryString.length; i++) {
      number += binaryString[i] * (2 ** i)
    }

    setDecimalNumber(number)
  }


  return (<>
    <header>Binary to Decimal Converter</header>


    <form onSubmit={handleConversion}>
      <label htmlFor="binary-string">Binary number: </label>
      <input id="binary-string" onChange={handleInputChange} value={binaryString} type="number" />

      <p>Decimal number: {decimalNumber}</p>
      <div className={hasWarning ? "warning" : "warning hide"}>Only 0 and 1 are allowed.</div>

      <button onClick={handleConversion}>Convert!</button>
    </form >
  </>)
}

export default App