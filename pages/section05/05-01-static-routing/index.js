import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/section05/05-01-static-routing-moved");
  };
  return (
    <div>
      <button onClick={onClickMove}>Move</button>
    </div>
  );
}
