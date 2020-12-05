import React, { Component } from "react";
import Number from "./Number";
import { Form, Input } from "./Input";
// state에 대한 interface 선언
interface IState {
  counter: number;
  name: string;
}

//해당 인터페이스를 할당, 앞의 빈칸은 props에 영향을줌
class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };
  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>add</button>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  add = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };
}

export default App;
