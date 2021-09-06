import React, { useState, useEffect } from "react";

/*
We passed an empty dependency array . Since there are no values in the dependency array , useEffect function 
will be never be called again . 

initial output  : 
Redered  0 
Effect hook called 0

After first click : 
Redered  1 

After second click : 
Redered  2 


*/

const Counter = () => {
  const [count , setCount ] = useState(0 ) ; 
  useEffect(() => {
    console.log(`Effect hook called ${count}`);

    return () => {
        console.log(`clean up function ${count}`)
    }
  } , []);


  return (
    <div>
      { console.log(`Redered  ${count}`) }
      <button onClick = { () => setCount(count + 1 )}> Click me </button>
    </div>
  );
};

export default Counter;
