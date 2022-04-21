import { useEffect,useState } from "react";
//  import { getFetch } from "./getFetch";

import ItemList from "../componentes/Itemlist/ItemList"
// import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import  Carousel  from "react-bootstrap/Carousel";
import './Promesas.css'





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
<div className="bg-warning    ">
<div>
  <div>
    <h2 style={{color : "white",fontFamily:"Montserrat"}} className="bg-dark " >Mi Bebe Perfu</h2>
  </div>
</div>
<Carousel style={{width:"50rem",height:"20rem"}} className="container mt-3 bg-warning  carrusel ">
  {/* <div>
    <div>
      <h2 style={{color : "white"}} className="bg-dark d-block"> 6 cuotas sin interes</h2>
    </div>
  </div> */}
  <Carousel.Item>
    <img
      className="d-block w-100 carrusel"
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/wysiwyg/Brands/bmd_responsive_2_.jpg"
      alt="First slide"
    style={{height:"20rem", width:"20rem"}}/>
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/9202892/pexels-photo-9202892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Second slide"
      style={{height:"20rem",width:"20rem"}} />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.crello.com/api/media/small/315874482/stock-photo-panoramic-shot-makeup-artist-apply"
      alt="Third slide"
      style={{height:"20rem",width:"20rem"}}/>

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


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