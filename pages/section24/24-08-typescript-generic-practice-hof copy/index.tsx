import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

const loginCheck = <P extends Record<string, unknown>>(
  Component: ComponentType<P>
): ComponentType<P> => {
  const WrappedComponent = (props: P): JSX.Element => {
    const router = useRouter();

    useEffect((): void => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인이 필요합니다.");
        router.push("/section23/23-05-login-check-hoc");
      }
    }, []);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `loginCheck(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
};
export default loginCheck;
