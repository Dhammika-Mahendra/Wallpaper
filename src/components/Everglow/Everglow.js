import React from 'react'
import './Everglow.css'
import SideBar from './SideBar'
import NavBar from './NavBar'
import CamDial from './CamDial'

export default function Everglow() {
  return (
    <div id='main'>
        <NavBar></NavBar>
        <CamDial></CamDial>
        <SideBar></SideBar>
    </div>
  )
}
