
import { useCartContex } from '../../../context/cartContext'


function Cart() {

  const {cartList, removeCart,removeItem,precioTotal} = useCartContex()
  
  
  
  
  return (

    <>
    {cartList.length === 0 ? <h2>Tu carrito esta vacio</h2>:<div className='container d-flex flex-column '>

      
{cartList.map(prod => <div key={prod.id}> <img src= {prod.img} alt="imagen" />nombre:{prod.name}- cantidad : {prod.cantidad} - precio : {prod.price} <button onClick={()=>removeItem(prod.id)}>borrar item</button> </div>)}


{precioTotal()  !== 0 && <h2> El precio total es : $ {precioTotal()} </h2> }
<button className='btn btn-outline-success' onClick={removeCart}> Vaciar Carrito</button>
{/* <h2>Total :  $ {total}</h2> */}

</div>    }
</>
)
    
    
    

   
  }

export default Cart