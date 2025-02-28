
export const ItemComponent = ({id,img,title}) => {

  const position = title.indexOf("GIF by")
  const frase = title.slice(0, position) 

  return (
    <figure style={{padding:"1rem"}}>
    <img style={{ width:"100%", height:"200px", maxWidth:"200px", borderRadius:".3rem"}} 
         src={img} alt={id} />
    <figcaption style={{padding:"0 1rem", fontSize:".75rem"}} >{frase}</figcaption>
   </figure>
  )
}
