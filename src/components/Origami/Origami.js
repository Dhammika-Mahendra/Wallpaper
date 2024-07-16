import React from 'react'
import View from './comp/View';
import Header from './Header';
import Footer from './Footer';
import './Origami.css';

export default function Origami() {

  return (
    <div 
      style={{
        height:'100vh',
        width:'100vw',
        backgroundColor:'#fff500',
        boxSizing:'border-box',
    }}>
    <Header></Header>
    <Footer></Footer>
    {/*-----------  Body Content ---------- */}
    <div className='webNameContainer'>
      <p className='webName'>ORIGAMI</p>
      <p className='webNameSub'>STUDIO</p>
     <div className='webNameIntro'>
       <p className='webNameWelcome'>Welcome to Origami Studio,</p>
       <p className='webNameDescript'>where every fold takes you on a journey of creativity and wonder!
       <br></br><br></br>
       Whether you're a seasoned origami artist or a curious beginner, our site offers a treasure trove of tutorials, tips, and inspiration. </p>
     </div>
    </div>
    </div>
  )
}


