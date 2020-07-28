import React, { Component } from "react";

class Counter extends Component {
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
            className="btn btn-primary m-2"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-primary m-2"
          >
            -
          </button>

          <button
            type="button"
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </h2>
      </div>
    );
  }
}

export default Counter;
