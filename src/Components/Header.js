import React from 'react'

export default function Header(props) {
    const {countcartItems}=props;
    return (
       
      <header className="row block center">
          <div >
              <a href="#/">
                  <h1>Small Shopping Cart</h1>
              </a>
          </div>
          <div>
              <a href="#/cart">
                  Cart{' '}
                    {countcartItems ?(
                        <button className="badge"> {countcartItems}</button>
                    ):('')}
              </a>  {' '}             <a href="#/signin">SignIn</a>
          </div>
      </header>  
    );
}
