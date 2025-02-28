
import { useEffect, useState } from "react";
import { CardComponent } from "./CardComponent"


export const ListaComponent = ({categorias}) => {
  
  const [ list , setList ] = useState([])
  
  useEffect(()=>{

    setList(categorias)

  },[ categorias ])

  
        
  return (
    
       <>
        {
        list.map( (categoria,i)=>(

            <CardComponent categoria={categoria} key={i} />
            
        ))
        }
       
       </>
    
  )
}
