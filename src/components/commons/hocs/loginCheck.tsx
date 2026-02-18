import { useRouter } from "next/router";
import { useEffect } from "react";

const loginCheck = (Component: ComponentType<any>) => (props: any) => {
  const router = useRouter();
  useEffect((): void => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인이 필요합니다.");
      router.push("/section23/23-05-login-check-hoc");
    }
  }, []); // Empty dependency array to run only on mount
  return <Component {...props} />;
};
export default loginCheck;