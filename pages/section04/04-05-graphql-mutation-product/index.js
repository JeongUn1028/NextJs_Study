import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const CREATE_PRODUCT = gql`
  mutation createProductInput( # 변수의 타입
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    # 실제 전달할 변수
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "huni",
        createProductInput: {
          name: "mouse",
          detail: "goodOne",
          price: 3000,
        },
      },
    });
    console.log(result);
  };
  return <button onClick={onClickSubmit}>GRAPHQL-API Request</button>;
}
