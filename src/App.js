import React from 'react';
import CityInput from './CityInput'
import DashboardPlaceholder from './DashboardPlaceholder'
import Dashboard from './Dashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <CityInput />
      <DashboardPlaceholder />
      <Dashboard />
    </div>
  );
}

export default App;
