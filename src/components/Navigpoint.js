import React from 'react'

export default function Navigpoint({yCoord,xCoord}) {
  return (
    <>
    {xCoord>5 && xCoord<45 ? <div style={{width:"50px",height:"50px",position:"absolute",backgroundColor:"wheat",right:"25px",top:`${yCoord}px`}}>
        <h3>{yCoord}</h3>
    </div>: <></>}
    </>
  )
}
