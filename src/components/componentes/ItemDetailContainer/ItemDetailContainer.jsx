import { useState,useEffect } from "react"
import { getFetch } from "../../clase5/getFetch"
import Intercambiabilidad from "../../Intercambiabilidad/Intercambiabilidad"


import {useParams} from "react-router-dom"
import ItemDetail from "../../ItemDetails/ItemDetail"
import ItemCount from "../../ItemCount/ItemCount"



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
                 {/* < ItemCount/>  */}
                    {/* <Intercambiabilidad/>    */}
          
          </div>  
    )
}
export default ItemDetailContainer