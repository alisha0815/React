import React from "react";

const Inputs = (props) => {
  return (
    <div>
      <p>Firstname</p>
      <input onChange={props.change} name="fname" value={props.fn} />
      <p>Lastname</p>
      <input onChange={props.change} name="lname" value={props.ln} />

      <button onClick={props.submit}>Submit</button>
    </div>
  );
};

export default Inputs;
