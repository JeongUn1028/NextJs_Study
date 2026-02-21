import { useRouter } from "next/router";
import { useEffect } from "react";

//* 로그인 여부를 체크하는 커스텀 훅
const useAuth = (): void => {
  const router = useRouter();
  //* 로그인 여부 체크
  useEffect((): void => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인이 필요합니다.");
      router.push("/section23/23-05-login-check-hoc");
    }
  }, []);
}
export default useAuth;