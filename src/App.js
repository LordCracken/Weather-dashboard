import React from 'react';
import CityInput from './CityInput'
import DashboardPlaceholder from './DashboardPlaceholder'
import Dashboard from './Dashboard';
import './css/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: localStorage.getItem('data') ? new Map(Object.entries(JSON.parse(localStorage.getItem('data')))) : new Map(),
      value: ''
    }
  }

  // Функция отображения доски
  renderDashboard() {
    return this.state.weatherData.size > 0 ? <Dashboard data={this.state.weatherData} onClick={e => this.handleControlWeather(e)} /> : <DashboardPlaceholder />;
  }

  // Функция установки значения в поле ввода города
  setValue(e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9-]/gi, '');
    this.setState({
      value: e.target.value
    })
  }

  // Функция контроля элементов интерфейса (кнопки добавить, очистить и удалить)
  handleControlWeather(e) {
    // Объект, в который записываются данные с сервера перед занесением в данные приложения
    const cityData = {};
    if (e.target.matches('#button-add')) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=58ca83824e1c0f434d211a07e20e3ad0&units=metric`)
      .then(response => {
        if (response.status !== 200) throw new Error('status network not 200');
        return response.json();
      })
      .then(data => {
          cityData.name = data.name;
          cityData.temp = `${+data.main.temp > 0 ? `+` : ``}${+data.main.temp} ℃`;
          cityData.icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          cityData.key = this.state.value.toLowerCase()
          // Обновляем состояние и заносим данные в локальное хранилище (коллекция Map не переводится в JSON, сперва необходимо превратить её в объект)
          this.setState(() => {
            localStorage.setItem('data', JSON.stringify(Object.fromEntries(this.state.weatherData.entries())));
            return this.state.weatherData.set(this.state.value.toUpperCase(), cityData)
          });
      })
      .catch(error => {
        console.error(error);
        cityData.name = 'Error';
        cityData.key = this.state.value.toLowerCase();
        // Обновляем данные в приложении
        this.setState(() => {
          localStorage.setItem('data', JSON.stringify(Object.fromEntries(this.state.weatherData.entries())));
          return this.state.weatherData.set(this.state.value.toUpperCase(), cityData)
        });
      });
    } else if (e.target.matches('#button-clear')) {
      this.setState({ value: '' });
    } else if (e.target.matches('.weather__delete')) {
      // Удаляем карточку со страницы по ключу (ключ отличается от названия города регистром)
      this.state.weatherData.delete(`${e.target.closest('.weather').dataset.key.toUpperCase()}`)
      this.setState(() => {
        localStorage.setItem('data', JSON.stringify(Object.fromEntries(this.state.weatherData.entries())));
        return this.state.weatherData;
      });
    }
  }

  render() {
    return (
      <>
        <CityInput onChange={e => this.setValue(e)} onClick={e => this.handleControlWeather(e)} value={this.state.value} />
        {this.renderDashboard()}
      </>
    );
  }
}

export default App;
