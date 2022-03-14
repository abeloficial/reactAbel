import './Titulo.css'

function Titulo(props) {
 // console.log(props)
 const {tituloProps,subProps} = props; //destructuracion
  return (
    <div className='titulo'>
      
      <h1>{tituloProps}</h1>
      <h2>{subProps}</h2>
      </div>
  )
}

export default Titulo