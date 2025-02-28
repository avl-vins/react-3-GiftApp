
import { ItemComponent } from "./ItemComponent"
import { useGifts } from "../hooks/useGifts"

const listcCategoria = {
    marginTop:"2rem",
    border:"2px solid #c9c9c9",
    borderRadius:".3rem",
    
}

const listc__titulo = {
    textAlign:"left",
    textTransform:"capitalize",
    margin:"1rem 0 0 1rem"
}



export const CardComponent = ({categoria, edit}) => {

   const {items , isLoading} = useGifts(categoria)

 
  
  return (
    <section style={listcCategoria}  >
        
                     <h2 style={listc__titulo} >{categoria}</h2>
                   {
                    isLoading ?<h2>...Cargando</h2> : <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-evenly"}} >
                    {
                         items.map((item)=>(
                            <ItemComponent key={item.id} {...item} />
 
                         ))
                      }
                         
                     </div>
                   }
                    
         
            </section>
  )
}
