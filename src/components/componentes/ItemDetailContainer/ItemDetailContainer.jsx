import { useState,useEffect } from "react"
import { getFetch } from "../../clase5/getFetch"
import Intercambiabilidad from "../../Intercambiabilidad/Intercambiabilidad"


import {useParams} from "react-router-dom"
import ItemDetail from "../../ItemDetails/ItemDetail"



function ItemDetailContainer() {
const [producto,setProducto] = useState({})
const {detalleId}= useParams()
  
 
       
   useEffect(()=>{

    getFetch
    .then(resp => setProducto(resp.find(item=>item.id === detalleId)))
    .catch(err => console.log(err))
    // .finally(()setLoading(false))
    
},[])


return (
          <div>
              
                 <ItemDetail producto={producto}/>   
                    <Intercambiabilidad/>   
          
          </div>  
    )
}
export default ItemDetailContainer