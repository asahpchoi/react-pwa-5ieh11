import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import registerServiceWorker from './registerServiceWorker';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Testing of PWA
        </p>
      </div>
    );
  }
}
registerServiceWorker();
render(<App />, document.getElementById('root'));
