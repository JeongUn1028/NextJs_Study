import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilEnv, RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/components/commons/styles/globalStyles";

if (process.env.NODE_ENV === "development") {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <div>====================== _app.js =====================</div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
      <div>====================== _app.js =====================</div>
    </div>
  );
}
