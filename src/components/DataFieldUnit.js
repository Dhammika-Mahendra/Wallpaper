import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function DataFieldUnit({title,def,setDistVal,index}) {


    const fieldStyle={
        width:'100px',
        height:'25px',
        margin:'2px',
        border:'1px solid #fafafa',
        borderBottom:'1px solid #fafafa',
        flex:'1',
        backgroundColor:'#fafafa',
        textAlign:'right',
        color:'black'
    }

  return (
    <div style={{display:'flex',alignItems:'baseline',backgroundColor:'#fafafa',marginTop:'3px',paddingLeft:'10px',paddingRight:'10px',borderRadius:'6px',width:'250px',border:'1px solid #d1d1d1'}}>
        <Typography sx={{fontSize:"15px",flex:1}}>{title}</Typography>
        <input type='number' style={fieldStyle} value={def} onChange={(e)=>setDistVal(Number(e.target.value),index)}></input>
    </div>
  )
}
