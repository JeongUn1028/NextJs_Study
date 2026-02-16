interface ChildPageProps {
  count: number;
}

export default function ChildPage({ count }: ChildPageProps): JSX.Element {
  return (
    <>
      <h1>자식 컴포넌트</h1>
      <div>카운트: {count}</div>
    </>
  );
}
