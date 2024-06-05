import React from 'react'

export const ImgComponent = ({current,data,change}) => {
    const updState = (item) =>{
        current(item.id)
        change()
    }
  return (
    <>
        <div className="content-images">
            {
                data.map((item,index) => (
                    <img onClick={(item) => updState(item)} key={index} className='item-image' src={item.img}/>
                ))
            }
        </div>
    </>
  )
}


