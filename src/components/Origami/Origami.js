import React from 'react'
import View from './comp/View';

export default function Origami() {

  return (
    <div style={{
      height:'100vh',
      width:'100vw',
      backgroundColor:'#fff500',
      boxSizing:'border-box',
      paddingTop:'130px'
    }}>
  <div style={{position:'fixed',top:'0',left:'850px'}}>
  <div style={{backgroundColor:'lightGreen',position:'relative'}}>
          <div 
            style={{
              position:'absolute',
              top:'0',
              left:'0',
              height:'500px',
              width:'500px',
              backgroundColor:'#ffe70f',
              boxShadow:'0 -1px 3px 0 rgba(0,0,0,0.5)',
              transform:'translateY(-150px) translateX(220px) rotate(45deg)',
          }}
          ></div>
                <div className='drop'>
          <div
            style={{
              position:'absolute',
              top:'0',
              left:'0',
              height:'100px',
              width:'600px',
              backgroundColor:'#ffe70f',
              clipPath: 'polygon(0% 0%, 18% 100%, 100% 100%, 100% 0%)'
            }}
          ></div>
          </div>
  </div>
  </div>
    <div 
      style={{
        height:'500px',
        width:'500px',
        backgroundColor:'#ffe70f',
        position:'fixed',
        top:'50%',
        transformOrigin:'top left',
        transform:'rotate(45deg)',
        boxShadow:'0 0 3px 0 rgba(0,0,0,0.5)',
      }}
    >
    </div>
    <div></div>
    </div>
  )
}


