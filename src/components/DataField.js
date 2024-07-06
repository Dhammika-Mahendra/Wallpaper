import React from 'react'
import DataFieldUnit from './DataFieldUnit'

export default function DataField({distr,setDistr,setValid,min,max}) {

  const setDistVal=(val,ind)=>{
    let tmp=[...distr]
    tmp[ind][1]=val
    setDistr(tmp)
  }

  return (
    <div style={{width:"70%",display:'flex'}}>
        <div style={{display:'flex',flexDirection:'column'}}>

        {
        distr.map((el,ind)=>{
          if(ind<13){
            return <DataFieldUnit key={ind} def={el[1]} title={el[0]} setDistVal={setDistVal} index={ind}></DataFieldUnit>
          }
        })
      }

        </div>

       <div style={{display:'flex',flexDirection:'column',marginLeft:'10px'}}>

       {
        distr.map((el,ind)=>{
          if(ind>12){
            return <DataFieldUnit key={ind} def={el[1]} title={el[0]} setDistVal={setDistVal} index={ind}></DataFieldUnit>
          }
        })
      }
       </div>
    </div>
  )
}
