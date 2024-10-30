export const getGift = async (categoria)=>{
    
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=vlMZ5plu7WTHCYpwH7WUeKzDfcTVAfVW&q=${categoria}&limit=5`)
    const {data} = await response.json()
   
    
    const res = data.map((item)=>{
        return {id:item.id, img:item.images.original.url,title:item.title}
         
    })
    
    return res
    
}