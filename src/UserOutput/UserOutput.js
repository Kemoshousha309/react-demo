import React, { Component } from 'react';
import './UserOutput.css';

const UserOUput = props =>  {
    return (
      <div className="usercard">
        <p>User Name: {props.name}</p>
        <p>User id: {props.id}</p>
        <p>{props.caption}</p>
      </div>
    );
}

export default UserOUput;
