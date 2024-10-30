import { useEffect, useState } from "react"

const input__container = {
    // marginTop:"2rem",
    // background:"blue",
    // textAlign:"center"
    

}

const ic__label = {
    fontSize:"1.25rem",
    fontWeight:600,
    paddingRight:"1rem"
    

}

const ic__input = {
    padding:".5rem",
    borderRadius:".3rem",
    fontSize:"1rem",
    fontWeight:600,
    outline:"none",
    

}


export const InputComponent = ({getCategoria}) => {
    
    const [dato,setDato] = useState('')
    
    const handleChange = (e)=>{

      const valor = e.target.value.toLowerCase().trim()
      
      setDato(valor)
      
    }
    
    const handleClick = (e)=>{
        e.preventDefault()
        getCategoria(dato)
        setDato("")
    }

  return (
    <div style={input__container}>
        <form onSubmit={handleClick} >
        <label htmlFor="categoria" style={ic__label} >Categoria:</label>
        <input type="text" id="categoria" autoFocus required
        name="categoria"
        value={dato}
        placeholder="Ingrese categoria"
        onChange={handleChange}
        style={ic__input}
        />
        <input type="submit" value="Agregar categoria" disabled={dato.length === 0}  onClick={handleClick}
        style={{padding:".5rem",marginLeft:"1rem", fontSize:"1rem", fontWeight:700}}
        />

        </form>
    </div>
  )
}
