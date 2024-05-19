// import React, { useContext } from 'react'
// import MainContext from '../../../context/context'


// const Basket = () => {
//   const {basketItems,addToBasket,deleteItemFromBasket}= useContext(MainContext);
//   let basketTotal= 0

//   return (
//     <>
//         <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">index</th>
//       <th scope="col">title</th>
//       <th scope="col">Image</th>
//       <th scope="col">Price</th>
//       <th scope="col">count</th>
//       <th scope="col">Delete</th>
//       <th scope="col">add</th>
//     </tr>
//   </thead>
//   <tbody>
//     {
//       basketItems.map((item,index)=>{
//         basketTotal += item.totalPrice
//        return(
//         <tr key={index}>
//         <th scope="row">{index + 1}</th>
//         <td>{item.item.title}</td>
//         <td><img src={item.item.image} width="60px" alt="" height="60px" /></td> 
//         <td>{item.item.price}Azn</td>
    
//         <td>{item.count}</td>
//         <td><button className='btn-btn-danger' onClick={()=>{
//           deleteItemFromBasket(item.item)
//         }}>Delete</button></td>
//         <td><button className='btn-btn-primary' onClick={()=>{
//           addToBasket(item.item)
//         }}>add</button>
//         </td>
//       </tr>
//        )
//       })
//     }
//   </tbody>

// </table>
//   <h1> Total Price:{ basketTotal} Azn</h1>

//     </>



    
//   )
// }

// export default Basket

import React, { useContext } from "react";
import MainContext from "../../../context/context";

const Basket = () => {
  const { basketItems, addToBasket } = useContext(MainContext);

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">index</th>
          <th scope="col">title</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col">add</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {console.log(basketItems)}
        {basketItems.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.item.title}</td>
              <td>
                <img src={item.item.image} width="60px" alt="" height="60px" />
              </td>
              <td>{item.item.price}Azn</td>
              <td>
                <button className="btn-btn-danger">Delete</button>
              </td>
              <td>{item.count}</td>
              <td>
                <button className="btn-btn-primary">add</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Basket;