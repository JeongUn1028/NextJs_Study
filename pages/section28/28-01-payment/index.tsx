import { wrapAsync } from "@/src/commons/libraries/asyncFunc";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "@/src/commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";
import PortOne from "@portone/browser-sdk/v2";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
    }
  }
`;

export default function PaymentPage(): JSX.Element {
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  // 1. 결제 API 요청하기 (백엔드)
  const onClickPayment = async (): Promise<void> => {
    try {
      const response = await PortOne.requestPayment({
        // Store ID 설정
        storeId: process.env.NEXT_PUBLIC_PAYMENT_STORE_ID || "",
        // 채널 키 설정
        channelKey: process.env.NEXT_PUBLIC_PAYMENT_CHANNEL_KEY || "",
        paymentId: `payment-${crypto.randomUUID()}`,
        orderName: "나이키 와플 트레이너 2 SD",
        totalAmount: 1000,
        currency: "CURRENCY_KRW",
        payMethod: "EASY_PAY",
      });
      if (response.code !== undefined) {
        // 오류 발생
        return alert(response.message);
      }
      console.log("response:", response);
      const notified = await createPointTransactionOfLoading({
        variables: {
          impUid: response.paymentId,
        },
      });
      console.log("notified:", notified);
    } catch (error) {
      console.error(error);
    }
    // try {
    //   const result = await createPointTransactionOfLoading({
    //     variables: {
    //       impUid: process.env.NEXT_PUBLIC_IMP_ID || "",
    //     },
    //   });
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }
    // 2. 결제 모듈 라이브러리 불러오기 (프론트엔드)
    // 3. 결제 모듈 실행하기 (프론트엔드)
    // 4. 결제 완료 후, 결제 완료 페이지로 이동하기 (프론트엔드)
  };
  return (
    <div>
      <h1>결제 페이지</h1>
      <button onClick={wrapAsync(onClickPayment)}>결제하기</button>
    </div>
  );
}
