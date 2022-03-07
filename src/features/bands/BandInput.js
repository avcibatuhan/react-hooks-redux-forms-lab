import React, { useState } from "react";

function BandInput({onBandSubmit}) {

  const [name,setName]=useState("");
  const handleChange = (e) => {
    setName(e.target.value);    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onBandSubmit(name);
    setName("");
  }
  return <div>Band Input
    <form onSubmit={handleSubmit}>
      <label>
        Name
      <input type="text" value={name} onChange={handleChange}/>
      </label>
      <button>add band</button>
    </form>
  </div>;
}

export default BandInput;
