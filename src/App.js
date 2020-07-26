import React, { Component } from 'react'
//import Movies from './components/movies'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/counters';
import NavBar from './components/navbar'

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    console.log("handle delete called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const countertemp = [...this.state.counters];
    const index = countertemp.indexOf(counter);
    countertemp[index] = { ...counter };
    countertemp[index].value++;
    this.setState({ counters: countertemp });
  };

  handleReset = () => {
    const countertemp = this.state.counters.map((x) => {
      x.value = 0;
      return x;
    });
    this.setState({ counters: countertemp });
  };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>



    )
  }
}
