import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifs"

export const useGifts = (categoria) => {
  const [isLoading, setIsLoading] = useState(true)
  const [items,setItems] = useState([])
    
  const handleGift = async()=>{
     const response = await getGift(categoria)   
     setItems(response)
     setIsLoading(false)
  } 

  useEffect(()=>{
      handleGift()
  },[])

    return { isLoading,items}
}
