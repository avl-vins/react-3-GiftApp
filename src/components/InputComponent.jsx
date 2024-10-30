import { useEffect, useState } from "react"

const input__container = {
    // marginTop:"2rem",
    // background:"blue",
    // textAlign:"center"
    // display:"flex",
    // justifyContent:"center",
    // flexWrap:"wrap",
    // gap:"2rem"

}

// const ic__label = {
//     fontSize:"1.25rem",
//     fontWeight:600,
//     paddingRight:"1rem"
    

// }

const ic__input = {
    margin:"1rem",
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
        <input type="text" id="categoria" autoFocus required
        name="categoria"
        value={dato}
        placeholder="Buscar Gift"
        onChange={handleChange}
        style={ic__input}
        />
        <input type="submit" value="Buscar" disabled={dato.length === 0}  onClick={handleClick}
        style={{padding:".5rem", fontSize:"1rem", fontWeight:700}}
        />

        </form>
    </div>
  )
}
