import { from } from "zen-observable";

export default function ObservableFlatMapPage(): JSX.Element {
  const onClickButton = (): void => {
    //TODO : Observable FlatMap 연습하기
    // new Observable((observer) => {});
    from(["1번user", "2번user", "3번user"])
      .flatMap([
        (el) => `${el} 결과에 qqq 적용`,
        (el) => `${el} 결과에 www 적용`,
      ])
      .subscribe((result): void => console.log(result));
  };
  return (
    <div>
      <h1>Observable FlatMap</h1>
      <button onClick={onClickButton}>Click</button>
    </div>
  );
}
