import React, { Component, useState } from 'react';
import './Char.css';


const Char = props =>  {
    return (
      <div >
        {props.stringList}
      </div>
    );

}

export default Char;
