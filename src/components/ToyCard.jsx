import React, { Component } from 'react';

class ToyCard extends Component {

  // componentDidMount = () => {
  //     fetch('http://localhost:3000/toys')
  //     .then(response => response.json())
  //     .then(toys => toys.map(
  //       toy => {debugger}
  //       // <ToyCard toy={...toy}/>
  //     ))
  // }

  render() {
    return (
      <div className="card">
        <h2>{'' /* Toy's Name */}</h2>
        <img src={'' /* Toy's Image */} alt={'' /* Toy's Name */} className="toy-avatar" />
        <p>{'' /* Toy's Likes */} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
