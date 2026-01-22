export default function Child2(props: {
  count: number;
  setCount: (count: number) => void;
}) {
  // * 카운트 감소 함수 - 부모 컴포넌트의 상태 변경
  const onClickCountDown = () => {
    props.setCount(props.count - 1);
  };
  return (
    <div>
      <div>자식 2의 카운트: {props.count}</div>
      <button onClick={onClickCountDown}>-</button>
    </div>
  );
}
