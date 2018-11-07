import React from 'preact-compat';

const AdoptModalContent = props => (
  <React.Fragment>
    <h1>Would you like to adopt {props.name}?</h1>
    <div className="buttons">
      <button onClick={props.toggleModal}>Yes</button>
      <button onClick={props.toggleModal}>Hells Yes!</button>
    </div>
  </React.Fragment>
);

export default AdoptModalContent;
