import { useState,useEffect } from "react"
import { getFetch } from "../../clase5/getFetch";

import ItemDetail from "../../ItemDetails/ItemDetail"



function ItemDetailContainer() {
  
  
  const [productos,setProductos] = useState({})
  
  
       
   useEffect(()=>{

    getFetch
    .then(resp => setProductos(resp.find(prod =>prod.id === "1")))
    .catch(err => console.log(err))
    // .finally(()setLoading(false))






   },[])
  
  
  
  
  
  return (
    <div> <ItemDetail productos={productos}/>    </div>  
    
    
    
    
  )
}

export default ItemDetailContainer