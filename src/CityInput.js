import React from 'react';

const CityInput = props => (
  <div className="city-input">
    <input 
      onChange={props.onChange}
      value={props.value}
    />
    <button id="add-button" onClick={props.onClick}>Add</button>
    <button id="clear-button" onClick={props.onClick}>Clear</button>
  </div>
);

export default CityInput;
