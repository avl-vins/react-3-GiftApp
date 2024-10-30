
import { CardComponent } from "./CardComponent"


export const ListaComponent = ({categorias}) => {
        
    
  return (
    
       <>
         {
        categorias.map( (categoria,i)=>(
            <CardComponent categoria={categoria} key={i} />
            
        ))
        }
       
       </>
    
  )
}
