
import { useCartContex } from '../../../context/cartContext'
import {addDoc, collection, doc, getFirestore, updateDoc} from 'firebase/firestore'
import { useState } from 'react'

function Cart() {
  const [formData, setFormData]= useState({
    email: " ",
    phone: " ",
    name: "  ",

  })

  
  const {cartList, removeCart,removeItem,precioTotal} = useCartContex()
  
  const generarOrden = (e)=>{
    e.preventDefault();
    console.log("funcionando el generar orden")
   // Nuevo objeto de orders
   let orden = {}

   orden.buyer = formData
   orden.total = precioTotal()
 
   orden.items = cartList.map(cartItem => {
     const id = cartItem.id
     const nombre = cartItem.name
     const precio = cartItem.price * cartItem.cantidad
 
     return {id,nombre,precio}
 
     
   })
  // Creacion de un documento

  const db = getFirestore ()
  // const queryCollection = collection(db,'orders')
  // addDoc(queryCollection, orden)
  // .then(resp => console.log(resp))
  // .catch(error)
  // .finally()
  
  //update, modificar un archivo
  const queryUpdate = doc(db , 'productos' , formData)
  updateDoc(queryUpdate,{
    stock : 100
  })
  .then(resp => console.log('actualizado'))
  // console.log(orden)

  }
const handleChange= (event)=>{
setFormData({
  ...formData,
  [event.target.name]: event.target.value
})
}
 
  console.log(formData)
  
  return (

        <div className='container '>
                {cartList.length === 0 ? <h2>Tu carrito esta vacio</h2>:<div className='container d-flex flex-column  col-md-4'>

                  
            {cartList.map(prod => <div key={prod.id}> <img src= {prod.img} alt="imagen" />nombre:{prod.name}- cantidad : {prod.cantidad} - precio : {prod.price} <button onClick={()=>removeItem(prod.id)}>borrar item</button> </div>)}


                                          {precioTotal()  !== 0 && <h2> El precio total es : $ {precioTotal()} </h2> }
                                          <button className='btn btn-outline-success' onClick={removeCart}> Vaciar Carrito</button>
                                        <div className='container'>
                                        <form
                                        onSubmit={generarOrden} >
                                          <input name='name' type='text'   placeholder='Ingrese Nombre'  onChange={handleChange} value={formData.name} className="container m-2"/>
                                          <input name='email' type='email' placeholder='Ingrese Email'  onChange={handleChange} value={formData.email}className="container m-2"/>
                                          <input name='phone' type='tel'   placeholder='Ingrese Phone'  onChange={handleChange} value={formData.phone}className="container m-2"/>

                                          <button className='btn btn-outline-success' > Generar orden</button>
                                        </form>

                                        </div>  

                                          

                                  </div>    }
      </div>
)
    
    
    

   
  }

export default Cart