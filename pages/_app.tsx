import "../styles/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";
import apolloClient from "../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  // const gaId = process.env.GAID || "";

  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        {/* importar el gaid desde .env */}
        <GoogleAnalytics gaId="G-FTHN93QES8" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
