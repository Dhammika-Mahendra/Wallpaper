import React from 'react'
import Colorpoint from './Colorpoint'

export default function Colorpointqueue({colList,setColList}) {
//(r,g,b) to #hex----------------------------------------------------------------------->
const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
//---------------------------------------------------------------------------------------->

const setColPoint=(e)=>{//change gradient with newly added color point
  setColList(colList.map((el)=>{
    if(el.id==e.target.id){
      let r=parseInt(e.target.value.slice(1,3),16)
      let g=parseInt(e.target.value.slice(3,5),16)
      let b=parseInt(e.target.value.slice(5,7),16)
      return {id:Number(e.target.id),c:el.c,R:r,G:g,B:b}
    }else{
      return el
    }
  }))
}

const delColPoint=(e)=>{
  let prv,nxt;
  let got=false
  colList.forEach((el,ind) => {
    if(el.id==e.target.id && got==false){
      got=true
      prv=colList.slice(0,ind)
      nxt=colList.slice(ind+1,colList.length)
      nxt.forEach((elm,indx)=>{
        nxt[indx].id=elm.id-1;
      })
      setColList([...prv,...nxt])
    }
  });
}

  return (
    <div style={{height:"300px",width:"150px",backgroundColor:"yellow",display:"inline-block",float:"right",position:"relative"}}>
               {colList.map(e=>{
                     if(!(e.id==0||e.id==colList.length-1)){
                       return <Colorpoint offset={e.c} key={e.c} id={e.id} defaultValue={rgbToHex(e.R,e.G,e.B)}
                       setColPoint={setColPoint} delColPoint={delColPoint}></Colorpoint>
                     }
               })}
    </div>
  )
}
