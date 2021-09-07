import React, { useState, useEffect } from "react";

/*
We passed count state in the dependency array . we are also updating this state inside the useEffect function . 

Initial rendering 
useEffect function called => which changes state count,which will cause component to be rerendered automatically

Next rendering 
cleanup function for previous rendering
useEffect function called => which changes state count, which will cause component to be rerendered again automatically

so on 
thus we are stuck in an infinite loop , so don't run this code 

*/

const Counter = () => {
  const [count , setCount ] = useState(0 ) ; 
  useEffect(() => {
    console.log(`Effect hook called ${count}`);
    setCount(count + 1 ) ;
    return () => {
        console.log(`clean up function ${count}`)
    }
  } , [count]);


  return (
    <div>
      { console.log(`Redered  ${count}`) }
      <button onClick = { () => setCount(count + 1 )}> Click me </button>
    </div>
  );
};

export default Counter;
