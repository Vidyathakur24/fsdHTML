import React,{useEffect,useState} from 'react'


function UseEffectWork() {
    const[count,setCount]=useState(10);
    const[pointer,setPointer]=useState(100);
    function doIncrement(){
        setCount(count+20);
    }
    function doPointer(){
        setPointer(pointer-10);
    }
    useEffect(()=>{
        console.log("Component is rendered using count"+count);
        console.log("Component is rendered using pointer"+pointer);
    },[count])
  return (
    //<div>  Use Effect Work </div>//without any calling,it will automatically invoke function when the component is rendered in the DOM tree
  <div>
    count value:{count}
    <br />
    pointer value:{pointer}
  <div>
    <button onClick={doIncrement}>Increment</button>
    <button onClick={doPointer}>Pointer</button>
    </div>
    </div>
)
}

export default UseEffectWork
