import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();
  const onClickMove1 = () => {
    router.push("/section05/05-04-dynamic-routing-board-moved/1");
  };
  return (
    <div>
      <button onClick={onClickMove1}>Move Page 1</button>
      <button onClick={onClickMove2}>Move Page 2</button>
      <button onClick={onClickMove3}>Move Page 3</button>
    </div>
  );
}
