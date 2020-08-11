import React from 'react';

class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div className="city-input">
        <input 
          onChange={e => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9-]/gi, '');
            this.setState({
              value: e.target.value
            })
          }}
          value={this.state.value}
        />
        <button>Add</button>
        <button onClick={() => this.setState({ value: '' })}>Clear</button>
      </div>
    );
  }
};

export default CityInput;
