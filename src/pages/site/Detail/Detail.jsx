import axios from 'axios'
import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router'

const Detail = () => {
  const [data,setData]=useState({})
  const{ id }= useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`).then(res => {
      setData(res.data)

    })
  })
  return (
 <div className='container'>
<div className='row'>
<div className='col-6'>
<img width={"250px"} src={data.image} alt="" />
</div>
<div className="col-6">
  <h3>Title:{data.title}</h3>
  <p>Price:{data.price}AZN</p>
  <button>add to basket</button>
</div>
</div>
 </div>
  )
}

export default Detail