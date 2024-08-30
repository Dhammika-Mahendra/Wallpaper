import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div 
        style={{
            width:'50%',height:'50px',
            position:'fixed',top:'0',right:'0',
            display:'flex',justifyContent:'space-around',alignItems:'center'
        }}
    >
        <div className='menuItem'>Explore</div>
        <div className='menuItem'>Features</div>
        <div className='menuItem'>Products</div>
        <div className='menuItem'>About</div>
        <div 
            style={{
                backgroundColor:'white',
                color:'rgba(0,0,0,0.5)',
                paddingLeft:'10px',paddingRight:'10px',
                borderRadius:'10px',
                cursor:'pointer'
                }}
        >Login</div>
    </div>
  )
}
