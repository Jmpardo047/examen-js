import React, { useState } from 'react'

export const ModalComponent = ({data,change}) => {
    const [current, setCurrent] = useState(0)

    const upCurrent = () => {
        if(current < data.length - 1){
            setCurrent(current+1)
        }   
    }

    const downCurrent = () =>{
        if(current > 0){
            setCurrent(current-1)
        }
    }

  return (
    <>
        <div className="modal-container">
            <img className='modal-image' src={data[current].img} alt="" />
            <div className="controllers">      
                <button onClick={downCurrent} className='modal-button'>prev</button>
                <button onClick={upCurrent} className='modal-button'>next</button>
            </div>
        </div>
    </>
  )
}

