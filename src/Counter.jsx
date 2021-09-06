import React, { useState, useEffect } from "react";

/*
We pass count in the dependency array . So whenever the count value changes useEffect function is called .

initial output  : 
Redered  0 
Effect hook called 0

After first click : 
Redered  1 Counter
clean up function 0 Counter
Effect hook called 1

After second click : 
Redered  2 
clean up function 1 
Effect hook called 2



*/

const Counter = () => {
  const [count , setCount ] = useState(0 ) ; 
  useEffect(() => {
    console.log(`Effect hook called ${count}`);

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
