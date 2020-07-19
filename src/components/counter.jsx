import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 2,
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-success";
    return classes;
  }
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <h2>
          <span className={this.getBadgeClasses()}>{this.state.count}</span>

          <button
            type="button"
            onClick={this.handleIncrement}
            className="btn btn-primary btn-sm"
          >
            Increment
          </button>
          <ul>
            {this.state.tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </h2>
      </div>
    );
  }
}

export default Counter;
