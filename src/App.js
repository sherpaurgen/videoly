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
      { id: 3, value: 2 },
      { id: 4, value: 11 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("handle delete called on: ", counterId);
    const tmpcounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: tmpcounters });
  };
  handleDecrement = (counter) => {
    const countertemp = [...this.state.counters];
    //const index = countertemp.indexOf(counter);
    const index = countertemp.map((x) => x.id).indexOf(counter.id)

    countertemp[index] = { ...counter };

    countertemp[index].value--;
    this.setState({ counters: countertemp });
  };

  handleIncrement = (counter) => {
    const countertemp = [...this.state.counters];
    console.log("handle increment counter temp vlaue => ", counter)
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
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>

    )
  }
}


