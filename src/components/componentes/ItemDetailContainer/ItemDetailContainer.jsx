import {  doc, getDoc,  getFirestore,  } from "firebase/firestore"
import { useState,useEffect } from "react"
// import { getFetch } from "../../clase5/getFetch"
// import Intercambiabilidad from "../../Intercambiabilidad/Intercambiabilidad"


import {useParams} from "react-router-dom"
import ItemDetail from "../../ItemDetails/ItemDetail"
// import ItemCount from "../../ItemCount/ItemCount"



function ItemDetailContainer() {
const [loading,setLoading] = useState(true)
const [producto,setProducto] = useState({})
const {detalleId}= useParams()
  
 
       
   useEffect(()=>{
    setTimeout(()=>{

// const querydb = getFirestore()
// const queryCollection = collection(querydb ,"productos")
// // const queryFilter = query(queryCollection,
// //      where("categoria","==",'liquidacion')) 
// // getFetch
//         getDocs(queryCollection)
//         .then(resp => setProducto(resp.docs.map(item => ( {id: item.id, ...item.data()})))) 

    const querydb = getFirestore() 
    const queryProd = doc(querydb, 'productos', detalleId)

    getDoc(queryProd)
    .then(resp => setProducto(  { id: resp.id, ...resp.data() }  ))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
        
    },1000)


    },[detalleId])
   


return (

    <>
    {loading ? <h2>Cargando productos..</h2>: 
          <div>
              
              
              
                 <ItemDetail producto={producto}/>  
                 {/* < ItemCount/>  */}
                    {/* <Intercambiabilidad/>    */}
          
                </div>  
    } </>    
    )
}
export default ItemDetailContainer