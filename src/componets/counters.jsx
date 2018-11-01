import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onAdd,
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters
    } = this.props;
    return (
      <div>
        <button onClick={onAdd}>add</button>
        <button onClick={onReset}>reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
