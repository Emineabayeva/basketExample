import React, { useContext } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import MainContext from '../../context/context'

const Card = ({item}) => {
  const {addToBasket}= useContext(MainContext)

return(
    <div className='card'>
<img style={{width:"250px",height:"250px"}} src={item.image} alt="" />
<h4>{item.title} </h4>
<p>{item.price}</p>
<Link to={`details/${item.id}`}>Detail page</Link>
<button onClick={()=>{
  addToBasket(item)
}}>Add to basket</button>
    </div>
  )
}

export default Card