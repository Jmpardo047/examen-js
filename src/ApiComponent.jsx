import {useState,useEffect} from 'react'
import { AddComponent } from './AddComponent';

export const ApiComponent = () => {
    const [data, setData] = useState([]);
    const [aditional, setAditional] = useState([]);
    const [show, setShow] = useState(false)

    const getInfo = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const info = await response.json();
            setData(info)
          } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() =>{
        getInfo();
        
    },[])

    const showMore = (item) =>{
        setAditional(JSON.stringify(item));
        console.log(aditional)
        setShow(true)
    }

  return (
    <>
        <div className="data-list">
            <ul className='items-list'>
                {data.map(item => (
                    <li onClick={() => showMore(item)} className='data-item' key={item.id}>{item.name}</li>
                ))}
                <button onClick={()=>getInfo}>Actualizar</button>
            </ul>
        </div>
        {show?<AddComponent data={aditional}/>:null}
    </>
  )
}
