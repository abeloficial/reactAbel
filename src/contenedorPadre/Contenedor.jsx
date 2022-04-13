

// import Titulo from "../components/Titulo/Titulo"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Promesas from "../components/clase5/Promesas"
import Cart from "../components/componentes/Cart/Cart"
// import Item from "../components/componentes/Item"
import ItemDetailContainer from "../components/componentes/ItemDetailContainer/ItemDetailContainer"
import Input from "../components/input/Input"
import ItemCount from "../components/ItemCount/ItemCount"
import NavBar from '../components/Navbar/NavBar'
import CartContextProvider from "../context/cartContext"


function Contenedor() {


    // const handleConsole = ()=>{
    //     console.log('soy eveneto')
      
    //   }
      const fnSaludo = ()=>{
        console.log('estoy saludando')
      }
      // let tituloprops2 = 'Soy titulo de app'
     let arrayDeNombres = ['elena','paola','abel']
    return (
       <BrowserRouter>
       



          <CartContextProvider> 
                        <div className="App"  style={{backgroundColor:'white'}}>
                            <NavBar/> 
                            
                            <Routes>
                                
                                <Route  
                                  path="/contador"
                                  element={<ItemCount/>}
                                  />
                                <Route 
                                       path="/" 
                                       element={<Promesas/>} />
                                <Route  path="/categoria/:categoriaId" element={<Promesas/>} />
                                <Route  path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
                                <Route path="/*" element={<Navigate to='/' replace/> } />
                                
                                <Route  path="/" element={<Input placeholder='Ingrese el Alias' hellow = {fnSaludo} nombres={arrayDeNombres}/>  } />                     
                                <Route  path="/cart" element={<Cart/>}/> 
                                                    
                            </Routes>
                         </div>
            </CartContextProvider>               
        </BrowserRouter> )
  }
  
  export default Contenedor