import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <Link to='/cart' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir a cart') } 
            >Ir al Cart o Terminar compra</button>
        </Link>
    )
}



const ButtonCount= ({handleInter})=> {
    return <button 
                className="btn btn-outline-success" 
                onClick={handleInter}
            >Agregar Al carrito</button>

}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            <h2>Item Description</h2>
            
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad
