//* 오픈그래프를 다른페이지에 보여줄때 필요한 메타태그를 제공하는 페이지

import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      images
    }
  }
`;

export default function OpenGraphProviderPage(props: any): JSX.Element {
  console.log(props.data);
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.data.name} />
        {/* <meta
          property="og:description"
          content={props.data.description}
        /> */}
        <meta property="og:image" content={props.data.images?.[0]} />
        <meta
          property="og:url"
          content={`http://localhost:3000/section32/32-01-opengraph-provider/${props.data._id}`}
        />
      </Head>
      <div>오픈그래프 제공자 페이지</div>
    </div>
  );
}

//* 1. getServerSideProps로 데이터 받아오기
//* 2. Sever Side Rendering Only(SSR)
export const getServerSideProps = async (): Promise<{
  props: { data: any };
}> => {
  const graphQLClient = new GraphQLClient(
    "https://backend-practice.codebootcamp.co.kr/graphql"
  );
  const data = await graphQLClient.request(FETCH_USED_ITEM, {
    useditemId: "642d9c8e1b1a0c001c5f2b9e",
  });
  return {
    props: {
      data: {
        name: data.fetchUseditem.name,
        images: data.fetchUseditem.images,
        _id: data.fetchUseditem._id,
      },
    },
  };
};
