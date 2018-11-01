import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import NavBar from "./componets/navbar";
import Counters from "./componets/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  increment = counter => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  decrement = counter => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = id => {
    let counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  add = c => {
    let id = this.state.counters.length + 1;
    this.state.counters.push({ id: id, value: 0 });
    const counters = this.state.counters.map((x, index) => {
      x.id = index;
      return x;
    });
    this.setState({ counters });
  };
  reset = () => {
    const counters = this.state.counters.map(x => {
      x.value = 0;
      return x;
    });
    this.setState({ counters });
  };
  render() {
    const { counters } = this.state;
    return (
      <React.Fragment>
        <NavBar counter={counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={counters}
            onReset={this.reset}
            onDelete={this.handleDelete}
            onIncrement={this.increment}
            onDecrement={this.decrement}
            onAdd={this.add}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
