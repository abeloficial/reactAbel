import './ItemCount.css'
import {useState} from 'react'


function ItemCount() {
 
  const  [contador,setContador] = useState(0)
 const fnsumar = ()=>{
setContador(contador + 1)
 }
  
  const fnresta = ()=>{
    setContador(contador - 1)
  }

  const fnreset = ()=>{
    setContador(0)
  }
  
  
  return (
    <div className='divo border border-dark rounded-pill bg-secondary container '>
        <div className="lola bg-succes d-flex">
            <div className='bg-succes container ' > 
                  <div>
                    {contador}
                  </div>
                  <div className='botones container d-flex justify-content-evenly'>
                  <button    onClick={fnsumar}          className='btn btn-info ' >+</button>
                  
                  
                  <button  onClick={fnresta} className='btn btn-danger '  >-</button>

                  </div>
            </div>
        </div>
        <br/>
        <button onClick={fnreset}>Reset</button>
    </div>
  )
}

export default ItemCount