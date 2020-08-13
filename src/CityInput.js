import React from 'react';

const CityInput = props => (
  <div className="city-input">
    <input 
      placeholder="Enter city"
      onChange={props.onChange}
      value={props.value}
    />
    <button id="button-add" onClick={props.onClick}>Add</button>
    <button id="button-clear" onClick={props.onClick}>Clear</button>
  </div>
);

export default CityInput;
