import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3", "tag4"],
  // };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-success";
    return classes;
  }
  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        <h2>
          <span className={classes}>{this.props.counter.value}</span>

          <button
            type="button"
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary btn-sm"
          >
            Increment
          </button>

          <button
            type="button"
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </h2>
      </div>
    );
  }
}

export default Counter;
