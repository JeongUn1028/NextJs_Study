import { useRouter } from "next/router";

export default function CypressE2ETestPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push("/section33/33-06-cypress-e2e-test-moved");
  };
  return (
    <div>
      CypressE2ETestPage
      <button onClick={onClickMove}>Click me</button>
    </div>
  );
}
