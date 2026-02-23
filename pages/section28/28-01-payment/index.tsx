export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    // 1. 결제 API 요청하기 (백엔드)
    // 2. 결제 모듈 라이브러리 불러오기 (프론트엔드)
    // 3. 결제 모듈 실행하기 (프론트엔드)
    // 4. 결제 완료 후, 결제 완료 페이지로 이동하기 (프론트엔드)
  };
  return (
    <div>
      <h1>결제 페이지</h1>
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
}
