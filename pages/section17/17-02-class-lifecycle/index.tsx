import { Component } from "react";
import Router from "next/router";

export default class CounterPage extends Component {
  state: Readonly<{ count: number }> = {
    count: 0,
  };

  // ! 컴포넌트 마운트 라이프사이클 후크
  componentDidMount(): void {
    console.log("컴포넌트가 생성되었습니다.");
  }

  // * 컴포넌트 업데이트 라이프사이클 후크
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    console.log("컴포넌트가 수정되었습니다.");
  }

  // ! 컴포넌트 언마운트 라이프사이클 후크
  componentWillUnmount(): void {
    console.log("컴포넌트가 제거되었습니다.");
    //* 채팅방 나가기
  }

  // * 카운트 증가 함수
  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  // * 페이지 나가기 함수
  onClickMove = (): void => {
    void Router.push("/");
  };

  render(): JSX.Element {
    return (
      <div>
        Counter
        <div>현재 카운트: {this.state.count}</div>
        <button onClick={this.onClickCountUp}>+</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
