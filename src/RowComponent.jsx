import React from 'react'

export const RowComponent = ({del,name,age}) => {

  return (
    <>
    <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td><button onClick={() => del(name)}>Eliminar</button></td>
    </tr>
    </>
  )
}

