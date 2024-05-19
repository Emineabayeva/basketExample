import { useContext } from "react"
import Card from "../Card/Card"
import './CardItem.css'
import MainContext from '../../context/context'
const CardItem = () => {
    const {data,setData}=useContext(MainContext)
  return (
    <section className="cardItem">
        <h2>Featured Products</h2>
        <div className="carditemitems">
            {
                data.map((item,index)=>{
                    return(<Card key={index} item={item}/>)
                })
            }

        </div>

    </section>
  )
}

export default CardItem