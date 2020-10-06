import React, { Component } from 'react';
import './App.css';
import Input from "./UserInput/UserInput";
import UserOUput from './UserOutput/UserOutput';
import InputType from "./inputType/inputType";
import Char from "./Char/Char"

class App extends Component {
  state = {
    users : [
      {name: "kareem", age: "22", caption: "i'm a web devoloper can i help you!", id:"1"},
      {name: "khald", age: "34", caption: "i'm a doctor can i give you a medical consaltant", id:"2"},
      {name: "mo sala", age: "34", caption: "i'm a soccer player. hello word", id:"3"},
        ],
    currentUser: 1,
    outputParagraph: null,
    pargraphCount: null,
    stringList: {} 
  }; 

  getIndex = event => {
    // get the user index by id 
    const userIndex = this.state.users.findIndex(u => u.id === event.target.value);
    // return the user index
    this.setState({currentUser: userIndex})
  } 
  
  changeName = (event) => {
    // get a copy of original users
    const users = this.state.users.slice();
    //get a targeted user by index
    users[this.state.currentUser].name = event.target.value;
    //update the state
    this.setState({users: users})
  }

  inptTyping = (event) => {
    const input = event.target.value;
    this.setState({
      outputParagraph: input,
      pargraphCount: input.length,
    });
  }

  remove_character = (str, char_pos) =>{
     const part1 = str.substring(0, char_pos);
     const part2 = str.substring(char_pos + 1, str.length);
      return (part1 + part2);
    }

  deleteChar = (e) =>{
    const charIndex = e.target.id;
    const i = parseInt(charIndex, 10);
    const outputParagraph = this.state.outputParagraph;
    const removed = this.remove_character(outputParagraph, i)
    this.setState({
      outputParagraph: removed,
      pargraphCount: removed.length
    });

  }

  render(){
    
    let stringList;
    if (this.state.outputParagraph){
        stringList = (
            <ol>
                {
                this.state.outputParagraph.split("").map((c, i) => {
                  return(<li id={i} style={{cursor: "pointer"}} onClick={this.deleteChar}>{c}</li>)
          
                })
                }
            </ol>
        );
    }  

    return (
      <div className="App">
        <div className="challenge">
          <h1>challenge one</h1>
        <Input  idclick= {this.getIndex} nameclick={(event) => this.changeName(event)}/>
        {
          this.state.users.map((user) => {
            return (
              <UserOUput name={user.name} caption={user.caption} id={user.id}/>
            )
          })
        }
        </div>
        <div className="challenge">
          <h1>challenge two</h1>
          <InputType changed={this.inptTyping}  content={this.state.outputParagraph} count={this.state.pargraphCount}/>
          <Char string={this.state.outputParagraph} deleteChar={this.deleteChar} stringList={stringList}/>
          
        </div>
      </div>
    );
  }
}

export default App;
