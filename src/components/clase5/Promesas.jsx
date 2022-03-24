


import { useEffect,useState } from "react";
 import { getFetch } from "./getFetch";
import './promesas.css'
import ItemList from "../componentes/Itemlist/ItemList";






function Promesas() {
    
     const [loading, setLoading] = useState(true) 
    const [productos,setProductos] = useState([]) 
   useEffect(()=>{
    setTimeout(()=>{    
    getFetch
    .then(respuesta =>{ setProductos(respuesta)
     } )
    .catch(err => console.log(err))
   .finally(()=> setLoading(false))
},3000);
}, [])
    
  
 
    return (
                   <div>
                       
                            
                           {loading ? 
                           
                            <h2>Cargando...</h2>
                          //  <img  src="https://media2.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"/>
                           
                           :
                           
                            
                          <div className="container d-flex width:20px cardone ">
                           <br/>
                            
                            <ItemList productos={productos}/>
                          
                         
                            </div>
                   } 
                   </div>
              )
 
}


export default Promesas