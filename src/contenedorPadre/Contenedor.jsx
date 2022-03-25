

// import Titulo from "../components/Titulo/Titulo"
import Promesas from "../components/clase5/Promesas"
import Input from "../components/input/Input"

import ItemCount from "../components/ItemCount/ItemCount"




import NavBar from '../components/Navbar/NavBar'











function Contenedor() {


    const handleConsole = ()=>{
        console.log('soy eveneto')
      
      }
      const fnSaludo = ()=>{
        console.log('estoy saludando')
      }
      
      
      // let tituloprops2 = 'Soy titulo de app'
     

      let arrayDeNombres = ['elena','paola','abel']


    return (
       
       <div className="App" onClick= { handleConsole } style={{backgroundColor:'pink'}}>
        
     
     <div>
       
                              <NavBar/>
                              
                                {/* <Route exact path = "/" elemnt ={<Titulo/>} */}
                              
                                 {/* <Titulo   tituloProps={ tituloprops2 } subProps='Soy subtitulo de app'/> */}
                                  
                                  
                                  <br/>
                                <ItemCount/>       
                                <Promesas/> 
                               
                                <Input placeholder='Ingrese el Alias' hellow = {fnSaludo} nombres={arrayDeNombres}/> 
                                  
                                   
                                
                                <br/>
                             
     
       
       
     </div>
     
    
  
 </div>
    )
  }
  
  export default Contenedor