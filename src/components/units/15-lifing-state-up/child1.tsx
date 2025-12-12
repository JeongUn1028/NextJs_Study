export default function Child1(props: {
  count: number;
  onClickCountUp: () => void;
}) {
  return (
    <div>
      <div>{props.count}</div>
      <button onClick={props.onClickCountUp}>+</button>
    </div>
  );
}
