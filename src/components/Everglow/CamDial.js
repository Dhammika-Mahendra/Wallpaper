import React from 'react'
import focus from './camDial/focus.svg'
import apature from './camDial/apature.svg'
import ISO from './camDial/ISO.svg'
import isoActive from './camDial/isoActive.svg'
import mountainsBg from './../../assets/mountainsBg.jpg'
import { useState } from 'react';
import { useRef } from 'react';

export default function CamDial() {

  //Focus ------------------------------------------------->>>>>>>>>>>>>>>>>>>>
  const [angle, setAngle] = useState(0);
  const knobRef = useRef(null);

  const handleMouseDown = (e) => {
    const knobRect = knobRef.current.getBoundingClientRect();
    const centerX = knobRect.left + knobRect.width / 2;
    const centerY = knobRect.top + knobRect.height / 2;
    const startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    const handleMouseMove = (moveEvent) => {
      const currentAngle = Math.atan2(moveEvent.clientY - centerY, moveEvent.clientX - centerX);
      const newAngle = (currentAngle - startAngle) * (180 / Math.PI)*0.2;
      setAngle((prevAngle) =>{ 
        if ((prevAngle+newAngle) > 0){ return 0;}else if((prevAngle+newAngle) < -290){ return -290;}else {return (prevAngle + newAngle)}
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  //Apature ------------------------------------------------->>>>>>>>>>>>>>>>>>>>
  const [angleAp, setAngleAp] = useState(0);
  const knobRefAp = useRef(null);

  const handleMouseDownAp = (e) => {
    const knobRect = knobRef.current.getBoundingClientRect();
    const centerX = knobRect.left + knobRect.width / 2;
    const centerY = knobRect.top + knobRect.height / 2;
    const startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    const handleMouseMoveAp = (moveEvent) => {
      const currentAngle = Math.atan2(moveEvent.clientY - centerY, moveEvent.clientX - centerX);
      const newAngle = (currentAngle - startAngle) * (180 / Math.PI)*0.2;
      setAngleAp((prevAngle) =>{ 
        if ((prevAngle+newAngle) > 0){ return 0;}else if((prevAngle+newAngle) < -135){ return -135;}else {
          return (prevAngle + newAngle)}
      });
    };

    const handleMouseUpAp = () => {
      document.removeEventListener('mousemove', handleMouseMoveAp);
      document.removeEventListener('mouseup', handleMouseUpAp);
    };

    document.addEventListener('mousemove', handleMouseMoveAp);
    document.addEventListener('mouseup', handleMouseUpAp);
  };

  //ISO ------------------------------------------------->>>>>>>>>>>>>>>>>>>>

  const [angleISO, setAngleISO] = useState(50);
  const knobRefISO = useRef(null);

  const handleMouseDownISO = (e) => {
    const knobRect = knobRef.current.getBoundingClientRect();
    const centerX = knobRect.left + knobRect.width / 2;
    const centerY = knobRect.top + knobRect.height / 2;
    const startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    const handleMouseMoveISO = (moveEvent) => {
      const currentAngle = Math.atan2(moveEvent.clientY - centerY, moveEvent.clientX - centerX);
      const newAngle = (currentAngle - startAngle) * (180 / Math.PI)*0.2;
      setAngleISO((prevAngle) =>{ 
        if ((prevAngle+newAngle) < 0){ return 0;}else if((prevAngle+newAngle) > 180){ return 180;}else {return (prevAngle + newAngle)}
      });
    };

    const handleMouseUpISO = () => {
      document.removeEventListener('mousemove', handleMouseMoveISO);
      document.removeEventListener('mouseup', handleMouseUpISO);
    };

    document.addEventListener('mousemove', handleMouseMoveISO);
    document.addEventListener('mouseup', handleMouseUpISO);
  };


  return (
    <div style={{position:'fixed',top:'20%',left:'20%'}}>
       <div style={{height:'420px',width:'420px',position:'relative'}}>
       <div 
          style={{
            cursor:'pointer',
            position:'absolute',top:'0px',left:'0px',
            height:'420px',width:'420px',
            backgroundImage:`url(${isoActive})`,
            backgroundRepeat:'no-repeat',
            transformOrigin: 'center center',
            clipPath:'circle(50%)'
          }}
        >
        </div>
        <div 
          style={{
            cursor:'pointer',
            position:'absolute',top:'0px',left:'0px',
            height:'420px',width:'420px',
            backgroundImage:`url(${ISO})`,
            backgroundRepeat:'no-repeat',
            transformOrigin: 'center center',
            transform: `rotate(${angleISO}deg)`,
            clipPath:'circle(50%)'
          }}
          ref={knobRefISO}
          onMouseDown={handleMouseDownISO}
        >
        </div>
        {/* ---- block the rest of ISO scale */}
        <div 
          style={{
            position:'absolute',top:'0px',left:'0px',
            height:'420px',width:'420px',
            backgroundColor:'rgba(255,255,255,0)',
            clipPath:'polygon(0% 0%, 0% 100%, 100% 100%, 100% 60%, 50% 50%, 100% 40%, 100% 0%)',
          }}
        ></div>
        <div style={{
                cursor:'pointer',
                position:'absolute',top:'30px',left:'30px',
                height:'360px',width:'360px',
                backgroundImage:`url(${focus})`,
                backgroundRepeat:'no-repeat',
                transformOrigin: 'center center',
                transform: `rotate(${angle}deg)`,
                clipPath:'circle(50%)'
             }}
             ref={knobRef}
             onMouseDown={handleMouseDown}
         >
        </div>
        <div 
            style={{
                cursor:'pointer',
                position:'absolute',top:'70px',left:'70px',
                height:'280px',width:'280px',
                backgroundImage:`url(${apature})`,
                backgroundRepeat:'no-repeat',
                transformOrigin: 'center center',
                clipPath:'circle(50%)',
                transform: `rotate(${angleAp}deg)`   
            }}
            ref={knobRefAp}
            onMouseDown={handleMouseDownAp}
        >
        </div>

        {/* ==============  Position indicators =================================== */}
        {/** ---- focus ------- */}
        <div
          style={{
            position:'absolute',top:'30px',left:'200px',
            height:'30px',width:'20px',
            border:'2px solid white'
        }}
        ></div>
        <div
          style={{
            position:'absolute',top:'30px',left:'210px',
            height:'3px',width:'3px',
            backgroundColor:'red'
        }}
        ></div>
        {/** ---- apature ------- */}
        <div
          style={{
            position:'absolute',top:'68px',left:'200px',
            height:'15px',width:'20px',
            border:'2px solid white'
        }}
        ></div>
       </div>
    </div>
  )
}
