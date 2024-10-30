
export const ItemComponent = ({id,img,title}) => {
  return (
    <figure style={{padding:"1rem"}}>
    <img style={{maxWidth:"250px", width:"100%", height:"250px"}} src={img} alt={id} />
    <figcaption style={{padding:"0 1rem", fontSize:".75rem"}} >{title}</figcaption>
   </figure>
  )
}
