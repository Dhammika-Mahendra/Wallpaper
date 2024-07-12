import React from 'react'
import View from './comp/View';
import Header from './Header';
import Footer from './Footer';

export default function Origami() {

  return (
    <div 
      style={{
        height:'100vh',
        width:'100vw',
        backgroundColor:'#fff500',
        boxSizing:'border-box',
        paddingTop:'130px'
    }}>
    <Header></Header>
    <Footer></Footer>
    </div>
  )
}


