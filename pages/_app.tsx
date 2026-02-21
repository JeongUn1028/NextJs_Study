import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/components/commons/styles/globalStyles";

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
