//* 오픈그래프를 다른페이지에 보여줄때 필요한 메타태그를 제공하는 페이지

import Head from "next/head";

export default function OpenGraphProviderPage(): JSX.Element {
  return (
    <div>
      <Head>
        <meta property="og:title" content="오픈그래프 제공자 페이지" />
        <meta
          property="og:description"
          content="오픈그래프 제공자 페이지입니다."
        />
        <meta
          property="og:image"
          content="https://i.ytimg.com/vi/1gQhHj3sXoE/maxresdefault.jpg"
        />
        <meta
          property="og:url"
          content="http://localhost:3000/section32/32-01-opengraph-provider"
        />
      </Head>
      <div>오픈그래프 제공자 페이지</div>
    </div>
  );
}
