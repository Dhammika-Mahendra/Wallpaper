import React from 'react'
import './SideBar.css'

export default function SideBar() {
  return (
    <div 
        style={{
            width:'58px',height:'100%',
            position:'fixed',top:'0',left:'0',
            backgroundColor:'rgba(217,217,217,0.5)',
            display:'flex',flexDirection:'column',justifyContent:'end',alignItems:'center'
            }}
    >
        <div id='fbIco' className='ico'></div>
        <div style={{width:'29px',height:'29px'}} id='instaIco' className='ico'></div>
        <div style={{width:'28px',height:'28px'}} id='ytIco' className='ico'></div>
        <div style={{width:'28px',height:'28px'}} id='mailIco' className='ico'></div>
    </div>
  )
}
