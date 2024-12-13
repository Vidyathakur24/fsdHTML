import { useState } from 'react'
import nature from './nature.jpg';
import './imgman.css';
function ImageManipulation() {
const[height,setHeight]=useState(100);
const[angle,setAngle]=useState(30);
const[red,setRed]=useState();
const[green,setGreen]=useState();
const[blue,setBlue]=useState();

function enhanceHeight(){
  setHeight(height+20)  
}
function doratate(){
  setAngle(angle+30);
}
function changeColor(){
  
  setRed(Math.random()*255);
  setGreen(Math.random()*255);
  setBlue(Math.random()*255);
}
  return (
    <div className='container'>
      <div style={{marginTop:'70px',marginLeft:'200px',height:'200px',width:'200px', border:'2px solid red'}}>

     <img src={nature} height={height} width={200} style={{backgroundColor:RGB(${red},${green},${blue}),padding:"20px",transform:rotate(${angle}deg)}} alt='nature'/>
        </div>
    <div style={{border:'2px solid red', marginTop:'100px', paddingLeft:'60px'}}>

        <button onClick={enhanceHeight} style={{backgroundColor:'cyan',color:'red'}}>Enhance Height</button>
        &nbsp;&nbsp;&nbsp;
        <button>EnhanceWidth</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={changeColor} >ColorChange</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={doratate}>Rotate</button>
    </div>


    </div>
  )
}

export default ImageManipulation