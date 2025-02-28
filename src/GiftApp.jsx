import { useState } from "react"
import { InputComponent } from "./components/InputComponent"
import { ListaComponent } from "./components/ListaComponent"

const section__gift = {
  textAlign:"center",

}

const section__title = {
    fontSize:"3rem",
    margin:"0"
}

const section__description = {
  fontSize:"1rem",
  margin:"2rem",
  fontWeight:"300"
}

export const GiftApp = () => {
  
   const [categorias,setCategorias] = useState(['perdon'])
  
   const getCategoria = (value)=>{

         const exist = categorias.includes(value)
        
         if( exist ){
          
            alert("Categoria ya existe")  
          
          }else{

            setCategorias([...categorias,value])

          }
          
   }

   

   
   
  return (
    <section style={section__gift}>
        <h1 style={section__title}>GiftApp</h1>
        <p style={section__description} >GiftApp es una aplicacion que permite buscar gifs por categorias.</p>

        <InputComponent getCategoria={getCategoria} />
        
        <ListaComponent categorias={categorias} />

    </section>
  )
}
