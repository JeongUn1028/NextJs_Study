import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <div>====================== _app.js =====================</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
      <div>====================== _app.js =====================</div>
    </div>
  );
}
