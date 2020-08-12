import React from 'react';
import CityInput from './CityInput'
import DashboardPlaceholder from './DashboardPlaceholder'
import Dashboard from './Dashboard';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: new Map(),
      value: ''
    }
  }

  setValue(e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9-]/gi, '');
    this.setState({
      value: e.target.value
    })
  }

  handleAddWeather(e) {
    const cityData = {
      name: '',
      temp: '',
      icon: ''
    };
    if (e.target.matches('#add-button')) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=58ca83824e1c0f434d211a07e20e3ad0`)
      .then(response => {
        if (response.status !== 200) throw new Error('status network not 200');
        return response.json();
      })
      .then(data => {
          cityData.name = data.name;
          cityData.temp = Math.round(+data.main.temp - 273.15);
          cityData.icon = data.weather[0].icon;
          this.state.weatherData.set(this.state.value.toUpperCase(), cityData);
      })
      .catch(error => {
        console.error(error);
        cityData.name = 'Error';
        this.state.weatherData.set(this.state.value, cityData);
      });
    } else if (e.target.matches('#clear-button')) {
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <CityInput onChange={e => this.setValue(e)} onClick={e => this.handleAddWeather(e)} value={this.state.value} />
        <DashboardPlaceholder />
        <Dashboard />
      </div>
    );
  }
}

export default App;
