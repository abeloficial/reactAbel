

// import Titulo from "../components/Titulo/Titulo"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Promesas from "../components/clase5/Promesas"
import Cart from "../components/componentes/Cart/Cart"
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
       <BrowserRouter>
                        <div className="App" onClick= { handleConsole } style={{backgroundColor:'white'}}>
                        <NavBar/> 
                        {/* <Promesas/> */}
                            
                        <Routes>
                            <Route  path="/" />  
                            <Route  path="/contador" element={<ItemCount/>}/>
                            <Route  path="/productos" element={<Promesas/>} />
                            <Route  path="/categoria/:categoriaId" element={<Promesas/>} />
                            <Route  path="/" element={<Input placeholder='Ingrese el Alias' hellow = {fnSaludo} nombres={arrayDeNombres}/>  } />                     
                            <Route  path="/cart" element={<Cart/>}/>                            
                        </Routes>
                        
                                              <>
                                                 
                                                   
                                                    <br/>
                                                </>
                            </div>
 </BrowserRouter> )
  }
  
  export default Contenedor