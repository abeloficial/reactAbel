import { createContext, useContext, useState } from "react";
export const CartContext = createContext([])
export const useCartContex = ()=> useContext(CartContext)

 function CartContextProvider ({children}){
     const [cartList, setCartList] = useState([])

    const addToCart = (item)=>{    // Funcion de agregar al carrito y detecta si tengo algun duplicado y no me vuelve a renderizar
       
       const inCart = cartList.find(
           (product)=> product.id === item.id)
      
       if(inCart){
           setCartList(cartList.map((productInCart)=>{
            if(productInCart.id === item.id){
                return {...inCart, cantidad : inCart.cantidad + 1}
               
            }else return productInCart;
           }))
       }else{setCartList([ 
        ...cartList,
        item 
    ])
        }
         }

         const precioTotal = () => {
            return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)}
        const cantidadTotalItem = () => {
                return cartList.reduce((acum, prod) => acum += prod.cantidad , 0)}// acum = acum + cantidad
        
    
     
    
     const removeCart = () =>{ // Vaciar Carrito
         setCartList([])
     }
     const removeItem = (id)=>{// Funcion para eliminar el item del carrito
     setCartList  ( cartList.filter((prod)=>prod.id !== id) )
          }

        
      
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart,
            removeItem,
            precioTotal,
            cantidadTotalItem,
            
           
            
        }}>
            {children}
        </CartContext.Provider>
    )
 }

 export default CartContextProvider