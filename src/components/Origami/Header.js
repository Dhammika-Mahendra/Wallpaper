import React from 'react'
import '../Origami/Header.css'

export default function Header() {
  return (
    <div style={{position:'fixed',top:'0',left:'850px'}}>{/* --- to give whole unit a fixed behavior */}
      <div style={{position:'relative'}}>{/* --- to control elements as absolute */}
            <div id='navBarFall'></div>{/* --- triangle falling off the navbar ------- */}
            <div className='drop'>{/* --- Navbar menu ------- */}
              <div id='navBar'></div>
            </div>
      </div>
    </div>
  )
}
