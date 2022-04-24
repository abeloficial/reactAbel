
import { useCartContex } from '../../../context/cartContext'
import {addDoc, collection,  documentId, getDocs, getFirestore, query, where, writeBatch} from 'firebase/firestore'
import { useState } from 'react'
import Modal from './Modal'
import './cart.css'
import ItemCount from '../../ItemCount/ItemCount'

function Cart() {
  const [formData, setFormData]= useState({
    email: " ",
    phone: " ",
    name: "  ",

  })

  
  const {cartList, removeCart,removeItem,precioTotal} = useCartContex()
  
  const generarOrden = async (event)=>{
    event.preventDefault();
    // console.log("funcionando el generar orden")
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
  const queryCollection = collection(db,'orders')
  await addDoc(queryCollection, orden)
  .then(({id}) => alert('su numero de id es :' + id))
  // .catch(err => console.log('error'))
  // .finally()
  
  //update, modificar un archivo
  // const queryUpdate = doc(db , 'productos' , formData)
  // updateDoc(queryUpdate,{
  //   stock : 100
  // })
  // .then(resp => console.log(  resp))
  // // console.log(orden)

  // }
  // Actualizar el stock
  const queryCollectionStock = collection(db,'productos')

  const queryActualizarStock = await query (
    queryCollectionStock,
    where(documentId(),'in', cartList.map(it=> it.id))
  )
  const batch = writeBatch(db)
  await getDocs(queryActualizarStock)
  .then(resp => resp.docs.forEach(res=> batch.update(res.ref,{
    stock: res.data().stock - cartList.find(item=>item.id === res.id).cantidad
  })))
  .finally(()=> console.log('actualizado'))
  batch.commit()
}
const handleChange= (event)=>{
setFormData({
  ...formData,
  [event.target.name]: event.target.value
})
}
 
  console.log(formData)
  
  return (

        <div className='container d-flex flex-row col-md-12'>
                {cartList.length === 0 ? <h2 className='d-flex'>Tu carrito esta vacio</h2>:<div className='container  '>

                  
            {cartList.map(prod => 
           
           <div className='d-inline-flex divClase ' key={prod.id}> 
           
                <img src= {prod.img} className="imgCart"  alt="imagen" />
               <div> 
               <h2 className='clase1'> nombre:{prod.name}</h2> <h2 className='clase1'> cantidad : {prod.cantidad} </h2> <h2 className='clase1'>  Precio ${prod.price}  </h2>
               <ItemCount/>
               </div>
                -     
                <label  onClick={()=>removeItem(prod.id)}> 
                <img src='https://cdn-icons-png.flaticon.com/512/3221/3221897.png' alt='' className='iconDelete'/></label>
            </div>)}


                                          {precioTotal()  !== 0 && <h2> El precio total es : $ {precioTotal()} </h2> }
                                          <button className='btn btn-outline-info' onClick={removeCart} > Vaciar Carrito</button>
                                        <div className='container bg-dark form'>
                                          
                                        <form
                                        onSubmit={generarOrden}  >
                                          <input name='name' type='text'   placeholder='Ingrese nombre'  onChange={handleChange} value={formData.name} required className="container m-2"/>
                                          <input name='email' type='email' placeholder='Ingrese Email'  onChange={handleChange} value={formData.email} required         className="container m-2"/>
                                          <input name='phone' type='number'   placeholder='Ingrese telefono'  onChange={handleChange} value={formData.phone} required     className="container m-2"/>
                                         
                                          <button className='btn btn-outline-warning' > Generar orden</button>
                                        </form>
                                        <Modal />
                                        </div>  

                                          

                                  </div>    }
      </div>
)
    
    
    

   
  }

export default Cart