// import ItemComponent from './ItemComponent'

import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifs"
import { ItemComponent } from "./ItemComponent"

const listcCategoria = {
    marginTop:"2rem",
    padding:"2rem",
    border:"2px solid #c9c9c9",
    borderRadius:".3rem",
    
}

const listc__titulo = {
    textAlign:"left",
    textTransform:"capitalize"
}



export const CardComponent = ({categoria}) => {

    const [items,setItems] = useState([])
    
    const handleGift = async()=>{
       const response = await getGift(categoria)   
       setItems(response)
    }
    console.log(items);
    

    useEffect(()=>{
        handleGift()
    },[])

  
  return (
    <section style={listcCategoria}  >
        
                     <h2 style={listc__titulo} >{categoria}</h2>

                     
                   <div style={{display:"flex",flexWrap:"wrap"}} >
                   {
                        items.map((item)=>(
                           <ItemComponent key={item.id} {...item} />

                        ))
                     }
                        
                    </div>
                    
              
         
            </section>
  )
}
