import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <nav>
<div className='header-start'>
<div className='header-left'>
<i class="fa-solid fa-magnifying-glass"></i>
<input type="text" placeholder='Search' />
</div>
<Link to={'/'}>SHOPPERS</Link>
<div className='header-right'>
<i class="fa-solid fa-user"></i>
 <i class="fa-regular fa-heart"></i>
 <Link to={'/basket'}><i class="fa-solid fa-cart-shopping"></i> (0)</Link>
</div>
</div>
<div className='header-bottom'>
<ul>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/admin'}>ADMIN</Link></li>
        <li><a href="#">CATALOGUE</a></li>
        <li><a href="#">NEW ARRIVALS</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
</div>
    </nav>


   
  )
}
export default Header