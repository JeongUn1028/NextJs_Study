import PortOne from "@portone/browser-sdk/v2";

async function requestPayment(): Promise<void> {
  const response = await PortOne.requestPayment({
    // Store ID 설정
    storeId: process.env.NEXT_PUBLIC_PAYMENT_STORE_ID,
    // 채널 키 설정
    channelKey: process.env.NEXT_PUBLIC_PAYMENT_CHANNEL_KEY,
    paymentId: `payment-${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "CARD",
  });
  if (response.code !== undefined) {
    // 오류 발생
    return alert(response.message);
  }

  // /payment/complete 엔드포인트를 구현해야 합니다. 다음 목차에서 설명합니다.
  const notified = await fetch(`${SERVER_BASE_URL}/payment/complete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // paymentId와 주문 정보를 서버에 전달합니다
    body: JSON.stringify({
      paymentId: paymentId,
      // 주문 정보...
    }),
  });
}

export default requestPayment;
