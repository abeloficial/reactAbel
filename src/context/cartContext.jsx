import { createContext, useContext, useState } from "react";



 
 export const CartContext = createContext([])

 export const useCartContex = ()=> useContext(CartContext)

 function CartContextProvider ({children}){
     const [cartList, setCartList] = useState([])

     const addToCart = (item)=>{
       
        
        setCartList([
             ...cartList,
             item 
         ])
         console.log(item)  }
    
     const removeCart = () =>{
         setCartList([])
     }

     const sinDuplicados = (item)=>{

      
       
        }
        
            
        
     

console.log(cartList)


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart
            
        }}>
            {children}
        </CartContext.Provider>
    )
 }

 export default CartContextProvider