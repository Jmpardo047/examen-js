import React, { useEffect, useState } from 'react'

const ImcResultComponent = ({imc}) => {
    const [image, setImage] = useState('')
    const defImage = (imc) =>{
        if(imc < 18){
            setImage('/imcBajo.png')
        }
        else if(imc >= 18 && imc<25){
            setImage('/imcNormal.png')
        }
        else if(imc >= 25 && imc<30){
            setImage('/imcSobrePeso.png')
        }
        else if(imc >= 30){
            setImage('/imcSobrePeso.png')
        }
    }
    useEffect(() => {
      defImage(imc)
    }, [imc])
    

  return (
    <div>
      <p>Su imc es de {imc}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default ImcResultComponent
