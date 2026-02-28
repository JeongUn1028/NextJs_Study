import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../stores";

const loginCheck = <P extends object>(
  Component: ComponentType<P>
): ComponentType<P> => {
  const WithLoginCheck = (props: P): JSX.Element => {
    const router = useRouter();
    const accessTokenLoadable = useRecoilValueLoadable(
      restoreAccessTokenLoadable
    );
    useEffect((): void => {
      accessTokenLoadable.toPromise().then((newAccessToken): void => {
        if (!newAccessToken) {
          alert("로그인이 필요합니다.");
          router.push("/section30/30-01-login");
        }
      });
    }, []);
    return <Component {...props} />;
  };
  WithLoginCheck.displayName = `loginCheck(${Component.displayName ?? Component.name ?? "Component"})`;
  return WithLoginCheck;
};
export default loginCheck;
