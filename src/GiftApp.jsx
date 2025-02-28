import { useState } from "react"
import { InputComponent } from "./components/InputComponent"
import { ListaComponent } from "./components/ListaComponent"

const section__gift = {
  textAlign:"center",

}

const section__titulo = {
    fontSize:"2rem",
    paddingBottom:"2rem"
}


export const GiftApp = () => {
  
   const [categorias,setCategorias] = useState(['perdon'])
  
   const getCategoria = (value)=>{

         const exist = categorias.includes(value)
        
         if( exist ){
          
            alert("Categoria ya existe")  
          
          }else{

            setCategorias([ ...categorias, value ])

          }
          
   }

   

   
   
  return (
    <section style={section__gift}>
        <h1 style={section__titulo}>GiftApp</h1>

        <InputComponent getCategoria={getCategoria} />
        
        <ListaComponent categorias={categorias} />

    </section>
  )
}
