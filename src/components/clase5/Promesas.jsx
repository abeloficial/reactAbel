


import { useEffect,useState } from "react";
 import { getFetch } from "./getFetch";
import './promesas.css'
import ItemList from "../componentes/Itemlist/ItemList";
// import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";






function Promesas() {
    

     const {categoriaId} = useParams()
     const [loading, setLoading] = useState(true) 
    const [productos,setProductos] = useState([]) 
   useEffect(()=>{
        if(categoriaId){ setTimeout(()=>{    
         getFetch
         .then(respuesta =>{ setProductos(respuesta.filter(item=>item.categoria === categoriaId))
          } )
         .catch(err => console.log(err))
        .finally(()=> setLoading(false))
     },2000);

        }
        
        
        else{ 
           setTimeout(()=>{    
         getFetch
         .then(respuesta =>{ setProductos(respuesta)
          } )
         .catch(err => console.log(err))
        .finally(()=> setLoading(false))
     },2000);
           
         
        }
         }, [ categoriaId,])

    console.log(categoriaId)
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