import React from 'react'
import '../Origami/Header.css'

export default function Header() {
  return (
    <div id="headerContainer">{/* --- to give whole unit a fixed behavior */}
      <div style={{position:'relative'}}>{/* --- to control elements as absolute */}
            <div id='navBarFall'></div>{/* --- triangle falling off the navbar ------- */}
            <div className='drop'>{/* --- Navbar menu ------- */}
              <div id='navBar'></div>
            </div>
      </div>
      <div id='headerMenu'>
        <p>Tutorial</p>
        <p>Categories</p>
        <p>Shop</p>
        <p style={{
            color:'white',backgroundColor:'black',
            paddingLeft:'5px',paddingRight:'5px',paddingBottom:'2px',
            borderRadius:'20px'
          }}
          >Login</p>
      </div>
    </div>
  )
}
