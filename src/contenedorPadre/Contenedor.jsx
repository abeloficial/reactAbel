

import Titulo from "../components/Navbar/NavBar"
import Input from "../components/input/Input"
import NavBar from "../components/Navbar/NavBar"






// import logo from './logo.svg';




function Contenedor() {


    const handleConsole = ()=>{
        console.log('soy eveneto')
      
      }
      const fnSaludo = ()=>{
        console.log('estoy saludando')
      }
      
      
      let tituloprops2 = 'Soy titulo de app'
     




    return (
        <div className="App" onClick= { handleConsole } style={{backgroundColor:'pink'}}>
        {/* <header className="App-header"> */}
     
     <div>
      {/* <NavBar/>  */}

     <componentes/>
       <Titulo   tituloProps={ tituloprops2 } subProps='Soy subtitulo de app'/> asi se llama una funcion en react
       <Input placeholder='Ingrese el Alias' hellow = {fnSaludo}/> 
       <br/>

       {/* <img src={logo} className="App-logo" alt="logo"  /> */}
       
       
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