import { Component } from "react";

export default class CounterPage extends Component {
  state: Readonly<{ count: number }> = {
    count: 0,
  };
  // ! 카운트 증가 함수 - 상태 업데이트
  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
  render(): JSX.Element {
    return (
      <div>
        Counter
        <div>현재 카운트: {this.state.count}</div>
        <button onClick={this.onClickCountUp}>+</button>
      </div>
    );
  }
}
