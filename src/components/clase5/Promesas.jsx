import { useEffect,useState } from "react";
//  import { getFetch } from "./getFetch";

import ItemList from "../componentes/Itemlist/ItemList"
// import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import  Carousel  from "react-bootstrap/Carousel";
import './promesas.css'





function Promesas() {
    

     const {categoriaId} = useParams()
     const [loading, setLoading] = useState(true) 
    const [productos,setProductos] = useState([]) 
   
   
   
   
   useEffect(()=>{
      if(categoriaId){

         const querydb = getFirestore() //aca apunta a que voy a usar firestore
         const queryCollection = collection (querydb, "productos")// para decirle a firestore que me traiga toda la coleccion
         const queryFilter = query(queryCollection, where('categoria', '==',`${categoriaId}`)) 
         
         getDocs(queryFilter)
         .then(resp => setProductos(  resp.docs.map(item=> ({ id: item.id, ...item.data()})) ))
   
   
         .catch(err => console.log(err))
        .finally(()=> setLoading(false))


      }else{
         const querydb = getFirestore() //aca apunta a que voy a usar firestore
         const queryCollection = collection (querydb, "productos")// para decirle a firestore que me traiga toda la coleccion
         getDocs(queryCollection)
         .then(resp=> setProductos(  resp.docs.map(item=> ({ id: item.id, ...item.data()})) ))
         .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        


      }
  
   },[categoriaId])
   
   
 
    return (
                   <div className="divclass ">
<div className="bgCarrusel    ">
<div>
  <div>
    <h1 style={{color : "white"}} className="bg-dark m-5 " >Mi Bebe Perfu</h1>
  </div>
</div>

</div>

                    <div className="container-fluid d-flex justify-content-evenly carNegra ">
                      <div className="bg-dark m-3 control" >
                        <h2 style={{color: "white"}} className="clase2">6 cuotas Sin Interes</h2>
                      </div>
                      <div className="bg-dark m-3 control">
                        <h2  style={{color: "white"}}className="clase2">Todo Para Tu Salon De Belleza</h2>
                      </div>
                      <div className="bg-dark m-3 control">
                        <h2 style={{color: "white"}}className="clase2">Envios Gratis</h2>
                      </div>
                    </div>
                            
                           {loading ? 
                           
                            <h2>Cargando...</h2>
                           // <img  src="https://media2.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"/>
                           
                           :
                           
                            
                          <div className="container d-flex flex-wrap width:20px cardone col-xs 12 ">
                           <br/>
                            
                            <ItemList productos={productos}/>
                            
                          
                         
                            </div>
                           
                   } 
                   {/* <ItemDetailContainer/>  */}
                   </div>
              )
 
}


export default Promesas