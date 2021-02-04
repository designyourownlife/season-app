import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
import Info from './Info';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

if (module.hot) {
  module.hot.accept();
}

function Notification ({ lat, errorMsg })  {
  if (errorMsg && !lat) {
    return <Info label="Error" text={errorMsg} />;
  }
  if (!errorMsg && lat) {
    return <Info label="Latitude" text={lat} />;
  }
  if (!errorMsg && !lat) {
    return <Spinner message={"Please allow location request"} />;
  }
  return null;
}

class App extends React.Component {
  
  // shorthand notation for JS class constructor
  state = { lat: null, errorMsg: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMsg: err.message })
    );
  }
  render() {
    
    return (
      <div className="app">
        <Notification lat={this.state.lat} errorMsg={this.state.errorMsg} />
        <SeasonDisplay lat={this.state.lat} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);