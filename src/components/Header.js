import React from 'react'
import "../App.css"

const Header = () => {
  return (
    <header className='row block'>
        <a href="#/">
            <h1>Shopping Cart</h1>
        </a>
        <div>
            <a href="#/cart">Cart</a>  <a href="#/signin">Sign In</a>
        </div>
    </header>

  )
}

export default Header