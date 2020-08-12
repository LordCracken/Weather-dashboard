import React from 'react';

const CityInput = props => {
  return (
    <div className="city-input">
      <input 
        onChange={props.onChange}
        value={props.value}
      />
      <button onClick={props.handleAddWeather}>Add</button>
      <button onClick={() => this.setState({ value: '' })}>Clear</button>
    </div>
  );
};

export default CityInput;
