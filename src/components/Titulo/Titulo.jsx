import './Titulo.css'
import {useState,useEffect} from 'react'

function Titulo(props,children) {
 const [contador,setContador]=useState(0)
 const [datos, setDatos]= useState(Date())

 useEffect(()=>{
   //acciones,llamadas a apis
   console.log('llamada a api 1')
 })
  // console.log(props)
//  let contador = 0
 const manejarcontador = ()=>{
  
  //  contador ++
//    console.log(contador)
      setContador(contador + 1)
      setDatos(Date())
 }
 
 const {tituloProps,subProps} = props; //destructuracion
  console.log('montado y renderizado')
  return (
    <div className='titulo'>
      
      
      <h1>{tituloProps}</h1>
      <h2>{subProps}</h2>
      
      
      
      <label>{datos}</label>
      
      

      <button  onClick={manejarcontador} className="bg-danger ">Click</button>
      <label>{contador}</label>
      
      </div>
  ) 
  
}

export default Titulo