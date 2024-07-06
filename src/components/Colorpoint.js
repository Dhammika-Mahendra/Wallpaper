import React from 'react'

export default function Colorpoint({offset,id,defaultValue,setColPoint,delColPoint}) {
  return (
    <div style={{position:"absolute",height:"30px",width:"80px",top:`${offset}px`,backgroundColor:"rosybrown"}} className='colpoint'>
      <input type='color' style={{display:'inline'}} id={id} defaultValue={defaultValue}
      onChange={(e)=>setColPoint(e)}></input>
    <p style={{width:'10px',marginLeft:'5px'}} className='delete' id={id} onClick={(e)=>delColPoint(e)}>X</p>
    </div>
  )
}
