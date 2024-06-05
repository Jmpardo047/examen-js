import React, { useState } from 'react'
import ImcResultComponent from './ImcResultComponent'

export const ImcComponent = () => {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [result, setResult] = useState(0)
    const [active, setActive] = useState(false)
    const onAlturaChange = (event) =>{
        setAltura(event.target.value)
    }
    const onPesoChange = (event) =>{
        setPeso(event.target.value)
    }
    const CalcImc = () =>{
        const imc = peso / (altura * altura)
        setResult(imc)
        setActive(true)
    }
  return (
    <>
        <div className="imc-container">
            <div>
                <input type="number" name='peso' onChange={onPesoChange} placeholder='Ingrese su peso'/>
                <input type="number" name='altura' onChange={onAlturaChange} placeholder='Ingrese su altura'/>
                <button onClick={CalcImc}>Calcular</button>
            </div>
            {active && <ImcResultComponent imc={result}/>}
        </div>
    </>
  )
}

