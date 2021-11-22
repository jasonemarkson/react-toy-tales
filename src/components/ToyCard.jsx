import React, { Component } from 'react';

class ToyCard extends Component {
  // ToyCard component is not receiving the props passed down to it from ToyContainer
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
