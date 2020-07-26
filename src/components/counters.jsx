import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-sm m-2 btn-success"
        >
          Reset
        </button>

        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
