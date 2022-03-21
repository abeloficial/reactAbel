

import Titulo from "../components/Navbar/NavBar"
import Input from "../components/input/Input"

import ItemCount from "../components/ItemCount/ItemCount"
import Promesas from "../components/clase5/Promesas"

import ItemList from "../components/clase5/ItemList"










function Contenedor() {


    const handleConsole = ()=>{
        console.log('soy eveneto')
      
      }
      const fnSaludo = ()=>{
        console.log('estoy saludando')
      }
      
      
      let tituloprops2 = 'Soy titulo de app'
     

      let arrayDeNombres = ['elena','paola','abel']


    return (
        <div className="App" onClick= { handleConsole } style={{backgroundColor:'pink'}}>
        
     
     <div>
    

     <componentes/>
      <Titulo   tituloProps={ tituloprops2 } subProps='Soy subtitulo de app'/>
         
         
         <br/>
      <ItemCount/>       
      <Promesas/> 
      {/* <ItemList/> */}
      <Input placeholder='Ingrese el Alias' hellow = {fnSaludo} nombres={arrayDeNombres}/> 
         
          asi se llama una funcion en react
       
       <br/>

      
       
       
     </div>
     
     {/* <p>
       hola <code>src/App.js</code> Hola mundo!.
     </p>
     <a
       className="App-link"
       href="https://reactjs.org"
       target="_blank"
       rel="noopener noreferrer"
     >
       Learn React
     </a>
   </header> */}
  
 </div>
    )
  }
  
  export default Contenedor