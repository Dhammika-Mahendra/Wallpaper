import React from 'react'
import '../Origami/Header.css'
import { useRef } from 'react'
import { useEffect } from 'react'

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
          <div id='dailyTip'>Daily tip!</div>
          <div style={{textAlign:'center'}} id='wannaKnow'>Wanna know how to <br></br> make a</div>
          <div id='dailyContentName'>flying parrot</div>
        </div>
      </div>
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
            paddingLeft:'10px',paddingRight:'10px',paddingBottom:'2px',
            borderRadius:'20px'
          }}
          >Login</p>
      </div>
      <div className='dailyObject' onMouseEnter={handleDaily} onMouseLeave={handleDaily}></div>
    </div>
  )
}
