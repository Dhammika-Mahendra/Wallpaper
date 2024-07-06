import React,{useState,useRef} from 'react'
import DataField from './DataField'
import Colorbar from './Colorbar'
import { Button, Typography } from '@mui/material'
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import Scale from './Scale';
import { useEffect } from 'react';
import Hover from './Hover';
import SyncIcon from '@mui/icons-material/Sync';

export default function Confirm({SetMap,Map,actdist}) {
  
  const [distr,setDistr]=useState([
    ['Ampara',0],['Anuradhapura',0],['Badulla',0],['Baticalo',0],['Colombo',0],['Galle',0],['Gampaha',0],['Hambantota',0],['Jafna',0],['Kegalle',0],['Kalutara',0],['Kandy',0],['Kilinochchi',0],['Kurunegala',0],['Mannar',0],['Matale',0],['Matara',0],['Monaragala',0],['Mulative',0],['Nuwara Eliya',0],['Polonnaruwa',0],['Puttalama',0],['Ratnapura',0],['Trincomalee',0],['Wavunia',0]
  ])

  const [scaleAr,setScaleAr]=useState([['Ampara',0],['Anuradhapura',0],['Badulla',0],['Baticalo',0],['Colombo',0],['Galle',0],['Gampaha',0],['Hambantota',0],['Jafna',0],['Kegalle',0],['Kalutara',0],['Kandy',0],['Kilinochchi',0],['Kurunegala',0],['Mannar',0],['Matale',0],['Matara',0],['Monaragala',0],['Mulative',0],['Nuwara Eliya',0],['Polonnaruwa',0],['Puttalama',0],['Ratnapura',0],['Trincomalee',0],['Wavunia',0]
])

 const [range,setRange]=useState({min:0,max:100})
 const [colList,setColList]=useState([{id:0,c:0,R:255,G:255,B:255},{id:1,c:300,R:0,G:0,B:255}])
 const [group,setGroup]=useState({status:false,groups:2})

 //to get a deep copy of distr arr, since scale graph shown only after validation
 //I don't know why spread operator doesn't work
  const copyArr=(arr)=>{
    let Final=[]
    let unit=[]
    arr.forEach((el)=>{
      unit.push(el[0])
      unit.push(el[1])
      Final.push(unit)
      unit=[]
    })
    return Final
  }
  const [valid,setValid]=useState({st:true,msg:''})//for data validation

  const validationData=()=>{
    console.log(range.min>=range.max)
    if(range.min>=range.max){
      setValid({...valid,st:false,msg:'Invalid min max'})
      return false
    }
   
    let distValid=true
    distr.forEach(el=>{
      if(el[1]<range.min || el[1]>range.max){
        setValid({...valid,st:false,msg:'invalid district values'})
        distValid= false
      }
    })
    if(!distValid){return false}

    setValid({...valid,st:true,msg:''})
    return true
  }
 //color value of each district is calculated and send to map component (when clicked OK button)
 const sendMapData=()=>{
    let res=validationData()
    console.log(res);

    if(!res){return ''}//--------------------------------->>>> Validated

    setScaleAr(copyArr(distr))

    let x,y,z;
    let val=[...distr]
    let mp=[...Map]
    let sub=range.max-range.min
    if(!group.status){

      val.forEach((el,ind)=>{
        let scaledC=Math.floor((el[1]-range.min)/sub*300);
        let offsetC,offsetRange;
        offsetC=scaledC-colList[0].c
        offsetRange=colList[1].c-colList[0].c
/*           colList.forEach((elm,indx)=>{
              if(elm.c>scaledC && got==false){
                got=true
                cord=indx
                console.log(indx)
                offsetC=scaledC-colList[indx-1].c
                offsetRange=elm.c-colList[indx-1].c
              }else if(indx==colList.length-1){
                cord=indx
                offsetC=scaledC-colList[indx-1].c
                offsetRange=elm.c-colList[indx-1].c
              }
          }) */
        let subR=colList[1].R-colList[0].R
        let subG=colList[1].G-colList[0].G
        let subB=colList[1].B-colList[0].B
  
        x=(colList[0].R+Math.floor((offsetC/offsetRange)*subR))
        y=(colList[0].G+Math.floor((offsetC/offsetRange)*subG))
        z=(colList[0].B+Math.floor((offsetC/offsetRange)*subB))
        mp[ind][1]=`rgb(${x},${y},${z})`
      })

    }else{

      let subR=colList[1].R-colList[0].R
      let subG=colList[1].G-colList[0].G
      let subB=colList[1].B-colList[0].B

      let gapScale=1/group.groups
      let colGapScale=1/(group.groups-1)

      val.forEach((el,ind)=>{
        let valScale=(el[1]-range.min)/sub;
        let groupPos=Math.floor(valScale/gapScale)

        x=(colList[0].R+Math.floor(groupPos*colGapScale*subR))
        y=(colList[0].G+Math.floor(groupPos*colGapScale*subG))
        z=(colList[0].B+Math.floor(groupPos*colGapScale*subB))
        mp[ind][1]=`rgb(${x},${y},${z})`
      })

    }
    SetMap(mp)
 }

 //set random values for districts (when clicked random button)------------------------------------
 const setRandVal=()=>{
    let val=[...distr]
    val.forEach((el,ind)=>{
      el[1]=Math.floor(Math.random() * 101) + 50
    })

    setRange({...range,min:50,max:150})
    setDistr(val)
 }

 const [hovdet,setHovdet]=useState()
 useEffect(()=>{
  //find and send hovered district details
  if(actdist>0){
    let obj=distr[actdist-1]
    let perc=((obj[1]-range.min)/(range.max-range.min))*100
    obj.push(perc)
    setHovdet(obj)
  }
 },[actdist,range,distr,group])

  return (
    <div style={{backgroundColor:'#fafafa',height:'100vh'}}>

      <div style={{width:'100%',height:'30px'}}>
        {!valid.st? <Typography>{valid.msg}</Typography>:''}
      </div>
      
      <div style={{display:'flex',height:'95vh'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'auto'}}>
            <Colorbar setColList={setColList} colList={colList} range={range} setRange={setRange} check={group}></Colorbar>
            <div style={{width:'100px'}}>
              <div>
                <Typography sx={{fontSize:'14px',display:'inline'}}>Grouped</Typography>
                <input type='checkbox' onChange={(e)=>setGroup({...group,status:e.target.checked})} ></input>
              </div>
              {group.status ? <input type="number" onChange={(e)=>setGroup({...group,groups:e.target.value})} style={{width:'40px',height:'25px',margin:'2px',border:'1px solid #fafafa',borderBottom:'1px solid #a7abab'}} value={group.groups}/> : ''}
            </div>
        </div>
        <Scale arr={scaleAr} min={range.min} max={range.max}></Scale>
        <div style={{display:'flex',flexDirection:'column'}}>
            <DataField distr={distr} setDistr={setDistr} min={range.min} max={range.max} setValid={setValid}></DataField>
            <div style={{marginTop:'10px',display:'flex',justifyContent:'flex-end'}}>
              <Button onClick={setRandVal} size='small' variant='outlined' startIcon={<StackedBarChartIcon></StackedBarChartIcon>} sx={{marginRight:'40px'}}></Button>
              <Button onClick={sendMapData} size='small' variant='contained' sx={{marginRight:'40px'}}>OK</Button>
            </div>
        </div>
      </div>

    {actdist>0 && hovdet?<Hover dist={hovdet}></Hover>:''}

    </div>
  )
}
