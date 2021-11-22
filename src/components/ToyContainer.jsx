import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  // added in this variable to iterate over the props.toys array. When I go to render it in the return, it's not rendering on the DOM
  const toyCards = props.toys.map((toy) => <ToyCard toy={toy} />)
  console.log("PROPS", props.toys)

  return(
    <div id="toy-collection">
      {/* {create a ToyCard Component now that we have access to the array} */}
      {toyCards}
    </div>
  );
}

export default ToyContainer;
