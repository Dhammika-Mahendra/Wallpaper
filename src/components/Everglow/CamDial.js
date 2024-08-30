import React from 'react'
import focus from './camDial/focus.svg'
import apature from './camDial/apature.svg'
import ISO from './camDial/ISO.svg'
import isoActive from './camDial/isoActive.svg'
import bg from './../../assets/bg.jpg'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react'

export default function CamDial() {
  const apatureArr=[1.4,2,2.8,4,5.6,8,11,16,22,32]
  const ISOarr=[
    {val:6400,bright:4,contr:3},
    {val:3200,bright:3,contr:3},
    {val:1600,bright:2,contr:2.5},
    {val:800,bright:1.6,contr:2},
    {val:400,bright:1.2,contr:1.5},
    {val:200,bright:1,contr:1},
    {val:100,bright:0.8,contr:0.9},
    {val:50,bright:0.6,contr:0.6}]
  const factor=20
  const posRef=useRef(null)
  const [focusValue, setFocusValue] = useState(0);
  const [apatureValue, setApatureValue] = useState(1.4);
  const [apatureRadius, setApatureRadius] = useState(0);
  const [ISOValue, setISOValue] = useState(5);

  const [imageSize, setImageSize] = useState();
  const [imagePos, setImagePos] = useState({x:0,y:0});

  const getImageSize=()=>{
     setImageSize(document.body.clientWidth*(1+((focusValue+1)/factor)))
     setImagePos({x:0-(document.body.clientWidth*0.12+210)*(1+((focusValue+1)/factor))+125,y:0-(document.body.clientHeight*0.25+210)*(1+((focusValue+1)/factor))+125})
  }

  const getApatureSize=()=>{
    setApatureRadius(250/apatureValue)
  }

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

  const [angleISO, setAngleISO] = useState(72);
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
        if ((prevAngle+newAngle) < 22){ return 22;}else if((prevAngle+newAngle) > 90){ return 90;}else {
          return (prevAngle + newAngle)
        }
      });
    };

    const handleMouseUpISO = () => {
      document.removeEventListener('mousemove', handleMouseMoveISO);
      document.removeEventListener('mouseup', handleMouseUpISO);
    };

    document.addEventListener('mousemove', handleMouseMoveISO);
    document.addEventListener('mouseup', handleMouseUpISO);
  };

 
  useEffect(() => {
    setApatureValue(apatureArr[Math.abs(Math.round(angleAp/15))]);
    setISOValue(Math.floor((angleISO)/10)-2);
    setFocusValue(Math.abs(Math.round(angle/3)))
    getImageSize()
    getApatureSize()
  },[angle,angleAp,angleISO])

  useEffect(() => {
    window.addEventListener('resize', getImageSize);
    getImageSize();
    return () => {
      window.removeEventListener('resize', getImageSize);
    };
  }, []);

  return (
    <div ref={posRef} style={{position:'fixed',top:'25%',left:'12%'}}>
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
        <div 
            style={{
                position:'absolute',top:'85px',left:'85px',
                height:'250px',width:'250px',
                clipPath:'circle(50%)',
                backgroundColor:'white',
                backgroundImage:`url(${bg})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:`${imageSize}px`,
                backgroundPosition:`${imagePos.x}px ${imagePos.y}px`,
                filter:`brightness(${ISOarr[ISOValue].bright}) contrast(${ISOarr[ISOValue].contr})`
            }}
        >
        </div>
        {/*--- focus ring--- */}
        <div 
            style={{
                position:'absolute',top:`${85+(250-apatureRadius)/2}px`,left:`${85+(250-apatureRadius)/2}px`,
                height:`${apatureRadius}px`,width:`${apatureRadius}px`,
                borderRadius:'50%',
                border:'1px solid white',
                clipPath:'circle(50%)',
            }}
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
