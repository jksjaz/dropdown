import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Dropdown from './Dropdown/Dropdown';
import DivDown from './DivDown/DivDown'

import './style.scss';
import "@fortawesome/fontawesome-free/css/all.css"

interface AppState {
  name: string;
}

const data = [
  {
    id: 0,
    title: "1"
  },
  {
    id: 1,
    title: "2"
  },
  {
    id: 2,
    title: "3"
  }
]

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="align">
        <Hello name={this.state.name} />
        <small className="text-center">As option style is controlled by OS <br/> I created both select and div based Dropdowns!</small>
        <Dropdown data={data}/>
        <DivDown data={data}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
