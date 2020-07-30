import App from 'next/app';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache()
});

class MyApp extends App {
    render() {
        const { pageProps, Component } = this.props
        return (
            <ApolloProvider client={client} >
                <Component {...pageProps} />
            </ApolloProvider>
        );
    }
}

export default MyApp