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
        <div id='siteInfo'>
          <div id='topic'>
            <div id='everglow'>EVERGLOW</div>
            <div id='com'>.com</div>
          </div>
          <div id='para'>
          Dive into a world where your passion for capturing moments meets endless opportunities.
          <br></br>
          <br></br>
          Whether you're here to hone your skills , showcase your talent  or shop for the latest photography gear, we have something for everyone
          </div>
        </div>
    </div>
  )
}
