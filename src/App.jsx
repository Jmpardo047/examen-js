import React from 'react'
import { useState } from 'react'
import { ImcComponent } from './ImcComponent'
import { TablesComponent } from './TablesComponent'
import { GalleryComponent } from './GalleryComponent'
import { ApiComponent } from './ApiComponent'

export const App = () => {
    const [ej1, setEj1] = useState(false)
    const [ej2, setEj2] = useState(false)
    const [ej3, setEj3] = useState(false)
    const [ej4, setEj4] = useState(false)

    const toggleActive = (item) =>{
        switch(item){
            case '1':
                setEj1(!ej1)
                setEj2(false)
                setEj3(false)
                setEj4(false)
                return;
            case '2':
                setEj1(false)
                setEj2(!ej2)
                setEj3(false)
                setEj4(false)
                return;
            case '3':
                setEj1(false)
                setEj2(false)
                setEj3(!ej3)
                setEj4(false)
                return;
            case '4':
                setEj1(false)
                setEj2(false)
                setEj3(false)
                setEj4(!ej4)
                return;
        }
    }
  return (
    <>
        <div className="list-container">
            <ul className='ej-list'>
                <li onClick={() => toggleActive('1')} className='list-item'>ej1</li>
                <li onClick={() => toggleActive('2')} className='list-item'>ej2</li>
                <li onClick={() => toggleActive('3')} className='list-item'>ej3</li>
                <li onClick={() => toggleActive('4')} className='list-item'>ej4</li>
            </ul>
        </div>
        {ej1 && <ImcComponent/>}
        {ej2 && <GalleryComponent/>}
        {ej3 && <TablesComponent/>}
        {ej4 && <ApiComponent/>}
    </>
  )
}

