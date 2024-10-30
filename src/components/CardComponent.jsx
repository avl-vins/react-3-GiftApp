// import ItemComponent from './ItemComponent'

import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifs"
import { ItemComponent } from "./ItemComponent"
import { useGifts } from "../hooks/useGifts"

const listcCategoria = {
    marginTop:"2rem",
    padding:"1rem",
    border:"2px solid #c9c9c9",
    borderRadius:".3rem",
    
}

const listc__titulo = {
    textAlign:"left",
    textTransform:"capitalize"
}



export const CardComponent = ({categoria}) => {

   const {items,isLoading} = useGifts(categoria)

  
  return (
    <section style={listcCategoria}  >
        
                     <h2 style={listc__titulo} >{categoria}</h2>

                     
                   <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-evenly"}} >
                   {
                        items.map((item)=>(
                           <ItemComponent key={item.id} {...item} />

                        ))
                     }
                        
                    </div>
                    
              
         
            </section>
  )
}
