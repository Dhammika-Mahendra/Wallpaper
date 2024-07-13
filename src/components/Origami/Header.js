import React from 'react'
import '../Origami/Header.css'
import { useRef } from 'react'

export default function Header() {

  const dailyRef = useRef(null)

  const handleDaily = () => {
    if(!dailyRef.current.classList.contains('dailyShow')) {
      dailyRef.current.classList.add('dailyShow')
    }else{
      dailyRef.current.classList.remove('dailyShow')
    }
  }

  return (
    <div id="headerContainer">{/* --- to give whole unit a fixed behavior */}
      <div ref={dailyRef} className='daily'>
        <div className='dailyContent'>
          <p>Daily tip!</p>
          <p style={{textAlign:'center'}}>Wanna know how to <br></br> make a</p>
          <p style={{fontSize:'15px'}}>Red bird</p>
        </div>
      </div>
      <div style={{position:'relative'}}>{/* --- to control elements as absolute */}
            <div onMouseEnter={handleDaily} onMouseLeave={handleDaily} id='navBarFall'></div>{/* --- triangle falling off the navbar ------- */}
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
