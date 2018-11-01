import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   count: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"]
  // };
  style = {
    fontSize: 20
  };

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // handleDecrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };
  render() {
    return (
      <div>
        <span style={this.style} className={this.badgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => {
            this.props.counter.value <= 0
              ? alert("no more")
              : this.props.onDecrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          decrement
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag} className={this.badgeClasses()}>
              {tag}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }

  badgeClasses() {
    let classes = "";
    classes =
      this.props.counter.value === 0
        ? "badge-warning badge m-2"
        : "badge-primary badge m-2";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
