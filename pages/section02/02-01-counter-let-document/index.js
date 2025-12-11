export default function CounterLetDocumentPage() {
  function onClickCountUp() {
    const result = Number(document.getElementById("count").innerText) + 1;
    document.getElementById("count").innerText = result;
  }

  function onClickCountDown() {
    const result = Number(document.getElementById("count").innerText) - 1;
    document.getElementById("count").innerText = result;
  }

  return (
    <div>
      <div id="count">0</div>
      <button onClick={onClickCountUp}>+</button>
      <button onClick={onClickCountDown}>-</button>
    </div>
  );
}
