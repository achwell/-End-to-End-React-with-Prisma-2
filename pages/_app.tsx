import {AppProps} from "next/app";
import {ApolloProvider} from "@apollo/client";
import {useApollo} from "../utils/apolloClient";

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}
