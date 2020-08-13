import React from 'react';
import Weather from './Weather';

const Dashboard = props => {
  // Массив data, в который переносим значения из коллекции Map (методы map для перебора работает только с массивами)
  const data = [];
  for (const item of props.data.values()) data.push(item);
  return (
    <div className='dashboard'>
      {data.map(item => <Weather data={item} key={item.key} onClick={props.onClick} />)}
    </div>
  );
}

export default Dashboard;
