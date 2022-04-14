


import { useEffect,useState } from "react";
//  import { getFetch } from "./getFetch";
import './promesas.css'
import ItemList from "../componentes/Itemlist/ItemList";
// import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"





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
        

    
      //    const querydb = getFirestore() //aca apunta a que voy a usar firestore
      //    const queryCollection = collection (querydb, "productos", categoriaId)// para decirle a firestore que me traiga toda la coleccion 
         
      //    getDocs(queryCollection)
      //    .then(resp => setProductos(  resp.docs.map(item=> ({ id: item.id , ...item.data()})) ))
   
   
      //    .catch(err => console.log(err))
      //   .finally(()=> setLoading(false))

      
     

   },[categoriaId])
   
   
 // useEffect(()=>{
   //      if(categoriaId){ setTimeout(()=>{    
   //       getFetch
   //       .then(respuesta =>{ setProductos(respuesta.filter(item=>item.categoria === categoriaId))
   //        } )
   //       .catch(err => console.log(err))
   //      .finally(()=> setLoading(false))
   //   },2000);

   //      }
        
        
   //      else{ 
   //         setTimeout(()=>{    
   //       getFetch
   //       .then(respuesta =>{ setProductos(respuesta)
   //        } )
   //       .catch(err => console.log(err))
   //      .finally(()=> setLoading(false))
   //   },2000);
           
         
   //      }
   //       }, [ categoriaId,])

   //  console.log(categoriaId)
    return (
                   <div className="divclass">
                       
                            
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