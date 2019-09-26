import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import Theme from 'styles/themes/default';
import GlobalStyles from 'styles/main';

import withApolloClient from 'lib/apollo/with-apollo-client';

interface Props {
	apollo: {
		client: any;
	};
}

class Application extends App<Props> {
	render() {
		const {
			Component,
			pageProps,
			apollo: { client }
		} = this.props;

		return (
			<ThemeProvider theme={Theme}>
				<ApolloProvider client={client}>
					<Head>
						<title>My new cool app</title>
					</Head>
					<Component {...pageProps} />
					<GlobalStyles />
				</ApolloProvider>
			</ThemeProvider>
		);
	}
}

export default withApolloClient(Application);
