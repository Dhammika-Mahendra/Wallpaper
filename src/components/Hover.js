import { Typography } from '@mui/material'
import React from 'react'

export default function Hover({dist}) {
  return (
    <div style={{width:'120px',height:'50px',position:'fixed',top:'20px',left:'260px',backgroundColor:'#fafafa',paddingLeft:'10px',boxShadow:'0px 1px 1px #ebe8e8',borderRadius:'4px'}}>
        <Typography sx={{fontSize:'18px'}}>{dist[0]}</Typography>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <Typography sx={{fontSize:'16px'}}>{dist[1]}</Typography>
            <Typography sx={{fontSize:'16px',mr:'20px'}}>%</Typography>
        </div>
    </div>
  )
}
