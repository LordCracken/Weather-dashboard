import React from 'react';

const Weather = props => (
  <div className='weather' data-key={props.data.key}>
    <h3>{props.data.name}</h3>
    <div>{props.data.temp}</div>
    <img src={props.data.icon} alt="weather icon" />
    <div className='weather__delete' onClick={props.onClick}>Delete</div>
  </div>
);

export default Weather;
