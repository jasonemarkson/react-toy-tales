import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false
  }
  
  // create a variable within the App class to store all the toys in an array
  toysArr = []

  // create a fetch request to get all of the toys and push them to the toysArr variable
  componentDidMount = () => {
    fetch("http://localhost:3000/toys", {
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json',
    "Accept": 'application/json'
    }
  })
    .then(resp => resp.json())
    .then(toys => toys.map(
      toy => 
      this.toysArr.push(toy)
      ))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        
        <ToyContainer toys={this.toysArr} />
      </>
    );
  }

}

export default App;
