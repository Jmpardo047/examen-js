import React, { useState } from 'react'
import { RowComponent } from './RowComponent'

export const TablesComponent = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [tables, setTable] = useState([])

    const onNameChange = (event) =>{
        setName(event.target.value)
    }

    const onAgeChange = (event) =>{
        setAge(event.target.value)
    }

    const onSubmit = () =>{
        setTable([...tables,{name:`${name}`,age:`${age}`}])
    }
    const deleteItemByName = (name) =>{
        setTable(tables.filter((item)=> item.name !== name))
    }
  return (
    <>
    <div className='table-container'>
        <div className="input-row">
        <input type="text" id="name-input" onChange={onNameChange} placeholder="Nombre"/>
        <input type="number" id="age-input" onChange={onAgeChange} placeholder="Edad"/>
        <button onClick={onSubmit} id="add-row">Agregar</button>
        </div>
        <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="">
            {tables.map((table, index) => (
                <RowComponent del={(event) => deleteItemByName(event)} key={index} name={table.name} age={table.age}/>
            ))}
        </tbody>
        </table>  
    </div>
    </>
  )
}

