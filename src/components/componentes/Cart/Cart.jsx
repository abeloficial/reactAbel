
import { useCartContex } from '../../../context/cartContext'
import {addDoc, collection,  documentId, getDocs, getFirestore, query, where, writeBatch} from 'firebase/firestore'
import { useState } from 'react'
import Modal from './Modal'
import './cart.css'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'

function Cart() {
  const [formData, setFormData]= useState({
    email: " ",
    phone: " ",
    name: "  ",

  })
  const [cartChange, setCartChange] = useState(true)

  const handleCart = ()=>{
    setCartChange(false)
  }

  
  const {cartList, removeCart,removeItem,precioTotal} = useCartContex()
  
  const generarOrden = async (event)=>{
    event.preventDefault();
    event.target.reset();
    
    handleCart();
  
    emailjs.sendForm('service_do1jge3','template_8s3ije5',event.target,'TNj54klQHtchgYjsY').then(res =>{
      
      console.log(res)
    })
    
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
  const queryCollection = collection(db,'ordenes')
  await addDoc(queryCollection, orden)
  // .then(resp => resp.forEach(elemnt => <h2>Gracias por su compra el id de su orden es : {elemnt.id}</h2>))
  .then(({id}) => alert(`Gracias por tu compra : ${id}`))
  .catch(err => console.log('error'))
  .finally()
  
  //update, modificar un archivo
  // const queryUpdate = doc(db , 'productos' , formData)
  // updateDoc(queryUpdate,{
  //   stock : 100
  // })
  // .then(resp => console.log(  resp))
  // // console.log(orden)

  // }
  // Actualizar el stock
  // const queryCollectionStock = collection(db,'productos')

  // const queryActualizarStock = await query (
  //   queryCollectionStock,
  //   where(documentId(),'in', cartList.map(it=> it.id))
  // )
  // const batch = writeBatch(db)
  // await getDocs(queryActualizarStock)
  // .then(resp => resp.docs.forEach(res=> batch.update(res.ref,{
  //   stock: res.data().stock - cartList.find(item=>item.id === res.id).cantidad
  // })))
  // .finally(()=> console.log('actualizado'))
  // batch.commit()
}
const handleChange= (event)=>{
setFormData({
  ...formData,
  [event.target.name]: event.target.value
})
}


 
  console.log(formData)
  

  return (
          <> 
                   <h1 style={{fontFamily:"Nomark", background:"black", color: "white"}}>Mi Bebe Perfu</h1>

        <div className='container d-flex flex-row col-md-12'>

                {cartList.length === 0 ? <h2 className='d-flex clase1 container' >Tu carrito esta vacio</h2>:<div className='container  '>

                  
            {cartList.map(prod => 
           
           <div className='d-inline-flex divClase ' key={prod.id}> 
           
                <img src= {prod.img} className="imgCart"  alt="imagen" />
               <div> 
               <h2 className='clase1'> nombre:{prod.name}</h2> <h2 className='clase1'> cantidad : {prod.cantidad} </h2> <h2 className='clase1'>  Precio ${prod.price}  </h2>
               
               </div>
                -     
                <label  onClick={()=>removeItem(prod.id)}> 
                <img src='https://cdn-icons-png.flaticon.com/512/3221/3221897.png' alt='' className='iconDelete'/></label>
            </div>)}


                                          {precioTotal()  !== 0 && <h2> El precio total es : $ {precioTotal()} </h2> }
                                          <button className='btn btn-outline-info' onClick={removeCart} > Vaciar Carrito</button>
                                        <div className='container  form'>
                                        {cartChange === true ? <form
                                        onSubmit={generarOrden}  >
                                          
                                          <input  name='name'     placeholder='Ingrese nombre'  onChange={handleChange} value={formData.name}  required className="container m-2 input "/>
                                          <input name='email' type='email' placeholder='Ingrese Email'     onChange={handleChange} value={formData.email} required  className="container m-2 input"/>
                                          <input name='phone' type='number'placeholder='Ingrese telefono'  onChange={handleChange} value={formData.phone} required  className="container m-2 input"/>
                                          
                                           
                                            <button   className='btn btn-warning'  > Generar orden</button>   
                                           
                                          
                                          
                                       

                                         
                                         
                                        </form> : <h3 className='clase1'>Tu orden se genero exitosamente! <h2>{formData.name}  </h2> el total de compra es de ${precioTotal()}  </h3> }  
                                       
                                        <Link to={"/"}>
                                            <button onClick={removeCart} className="btn btn-warning m-2">Finalizar Compra e ir a home</button>
                                           </Link>
                                           
                                        <Modal />
                                        </div>  

                                          

                                  </div>    }
      </div>
      </> 
)
    
    
    

   
  }

export default Cart