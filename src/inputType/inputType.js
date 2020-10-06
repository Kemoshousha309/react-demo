import React, { Component } from 'react';
import './inputType.css';
import "../UserInput/UserInput.css"

const InputType = props =>  {
    return (
      <div >
          <div id="out-typing" className="input-groub">
            <label for="type">Type here ..</label>
            <input id="input" onChange={props.changed} type="text" id="type"></input>
          </div>
          <p>{props.content}({props.count})</p>
          {
            props.count > 15 ?
            <p style={{color: "green"}}>too long text</p>
            : <p style={{color: "red"}}>too short text</p>
          }
      </div>
    );

}

export default InputType;
