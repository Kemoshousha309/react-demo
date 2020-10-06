import React, { Component } from 'react';
import './UserInput.css';

const Input = props =>  {
    return (
      <div >
        <div className="input-groub">
        <label for="user">Enter new user name: </label> 
        <input onChange={props.nameclick} id="user" type="text" className="user-input" />
        </div>
        <div className="input-groub">
        <label for="user-id">Enter the id you want to change:</label>
        <input onChange={props.idclick} id="user-id" type="number" className="id-input" />
        </div>
        
      </div>
    );
}

export default Input;
