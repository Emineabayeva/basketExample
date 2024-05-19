import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainContext from './context/context'
import ROUTES from './routes/routes'
import axios from 'axios'
function App() {
  const router= createBrowserRouter(ROUTES)
  const [data,setData]=useState([])
const[BasketItems,setBasketItems] =useState([])

  const addToBasket = (item) =>{
    const target = BasketItems.find(x => x.id ==item.id)
    if(target){

target.count+=1,
target.totalPrice+= item.price
setBasketItems([...BasketItems])
console.log(BasketItems)
    } else{
      const newBasketItem = {
        item:item,
        count: 1,
        totalPrice:item.price
      }
      setBasketItems([...BasketItems,newBasketItem])
      console.log(BasketItems,newBasketItem)
    }
  
  }
  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
      console.log("res.data")
    setData([...res.data])
    } )
  },[])

  const condexData={
    data,setData,BasketItems,setBasketItems, addToBasket
  }


  return (
      <MainContext.Provider value={condexData}>
         <RouterProvider router={router}/>
      </MainContext.Provider>
    

  
     
    
  )
}

export default App
