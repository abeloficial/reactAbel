import './ItemCount.css'
import {useState} from 'react'


          

              
function ItemCount({stock,initial,lilu}) {
//  const [stock,setStock]=useState(true)
  

const  [contador,setContador] = useState(1)
 const fnsumar = ()=>{
setContador(contador + 1)
if(contador === 10){
  setContador(10 )
}else{console.log('todo ok')
 }
}
  
  const fnresta = ()=>{
    if (contador < 1){
      console.log('no se puede')
    }else
    setContador(contador - 1)
    
  }

  const fnreset = ()=>{
    setContador(1)
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
                  <br/>
                  
            </div>
        </div>
        <br/>
        <button onClick={fnreset}>Reset</button>
    </div>
  )
}

export default ItemCount