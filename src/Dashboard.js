import React from 'react';

const Dashboard = () => (
  <div className='dashboard'>
    
    <div className='weather'>
      <h3>Moscow</h3>
      <div>+13 ℃</div>
      <img src='http://openweathermap.org/img/w/10d.png' alt="weather icon" />
      <div className='weather__delete'>Delete</div>
    </div>
    <div className='weather'>
      <h3>Moscow</h3>
      <div>+13 ℃</div>
      <img src='http://openweathermap.org/img/w/10d.png' alt="weather icon" />
      <div className='weather__delete'>Delete</div>
    </div>
  </div>
);

export default Dashboard;
