import React from "react";
import "./Body.css";

function Body({  desc ,image,  title,}) {
  return (
    <div className="body">
       <h1>{desc}</h1>
      <img src={image} alt="" />

      
        <h4>{title}</h4>
      
    </div>
  );
}

export default Body;
