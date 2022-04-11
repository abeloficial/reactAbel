import { createContext, useContext, useState } from "react";



 
 export const CartContext = createContext([])

 export const useCartContex = ()=> useContext(CartContext)

 function CartContextProvider ({children}){
     const [cartList, setCartList] = useState([])

    const addToCart = (item)=>{    // Funcion de agregar al carrito y detecta si tengo algun duplicado y no me vuelve a renderizar
       const inCart = cartList.find((product)=> product.id === item.id)
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


     
    
     const removeCart = () =>{
         setCartList([])
     }
     const removeItem = (item)=>{
        const removido = cartList.filter((prod)=> prod.id !== item)
        setCartList(cartList)}
//      const sinDuplicados = (item)=>{
// console.log(item)
//      const inCart = cartList.find((productoInCart)=> productoInCart.id === cartList.id);
//      if(inCart){
//          setCartList(cartList.map((productoInCart)=>{
//              if(productoInCart.id === cartList.id){
//                  return {...inCart, cantidad : inCart.cantidad + 1}
//              }else return addToCart()
//          }))
//      }else{console.log()}
      
//         }
      
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart,
            removeItem,
            
            // sinDuplicados
            
        }}>
            {children}
        </CartContext.Provider>
    )
 }

 export default CartContextProvider