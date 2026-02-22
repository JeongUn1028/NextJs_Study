import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>코드캠프 프론트엔드</h1>
      <p>섹션별 예제 페이지</p>

      <div style={{ marginTop: "2rem" }}>
        <h2>섹션 25 - 카카오맵</h2>
        <ul>
          <li>
            <Link href="/section25/25-01-kakao-map">25-01 카카오맵</Link>
          </li>
          <li>
            <Link href="/section25/25-01-kakao-map-routing">
              25-01 카카오맵 라우팅
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
