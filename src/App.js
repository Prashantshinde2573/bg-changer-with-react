import { useState } from "react";

const App=()=>{
  const [color,setcolor]=useState("white");

  return(
    <div className="bg-red-500 w-full h-screen duration-200 "style={{backgroundColor:color}}>
      <div className="bg-white w-11/12 m-auto p-3 flex justify-around " >
      <button onClick={()=>{setcolor("red")}} className="w-24 h-8 text-white font-bold hover:border-4 border-black" style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>{setcolor("yellow")}} className="w-24 h-8 text-white font-bold hover:border-4 border-black" style={{backgroundColor:"yellow"}}>Yellow</button>
      <button onClick={()=>{setcolor("Pink")}} className="w-24 h-8 text-white font-bold hover:border-4 border-black " style={{backgroundColor:"pink"}}>Pink</button>
      <button onClick={()=>{setcolor("Orange")}} className="w-24 h-8 text-white font-bold hover:border-4 border-black" style={{backgroundColor:"orange"}}>Orange</button>
      <button onClick={()=>{setcolor("Purple")}} className="w-24 h-8 text-white font-bold hover:border-4 border-black" style={{backgroundColor:"purple"}}>Purple</button>
      <button onClick={()=>{setcolor("Black")}} className="w-24 h-8 text-white font-bold hover:border-4 border-black" style={{backgroundColor:"black"}}>Black</button>
      </div>

    </div>
  )

}

export default App;