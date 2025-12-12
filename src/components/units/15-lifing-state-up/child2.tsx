export default function Child2(props: {
  count: number;
  setCount: (count: number) => void;
}) {
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
