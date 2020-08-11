import React from 'react';

const Dashboard = () => {
  return (
    <div class='dashboard'>
      <div class='weather'>
        <h3>Moscow</h3>
        <div>+13 ℃</div>
        <img src='http://openweathermap.org/img/w/10d.png' alt="weather icon" />
        <div class='weather__delete'>Delete</div>
      </div>
      <div class='weather'>
        <h3>Moscow</h3>
        <div>+13 ℃</div>
        <img src='http://openweathermap.org/img/w/10d.png' alt="weather icon" />
        <div class='weather__delete'>Delete</div>
      </div>
      <div class='weather'>
        <h3>Moscow</h3>
        <div>+13 ℃</div>
        <img src='http://openweathermap.org/img/w/10d.png' alt="weather icon" />
        <div class='weather__delete'>Delete</div>
      </div>
    </div>
  );
};

export default Dashboard;
