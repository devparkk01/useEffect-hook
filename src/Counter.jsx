import React, { useState, useEffect } from "react";

const Counter = () => {
  useEffect(() => {
    console.log("Effect hook called");
  });

  return (
    <div>
      {console.log("Rendered")}
      <h2>useEffect hook</h2>
    </div>
  );
};

export default Counter;
