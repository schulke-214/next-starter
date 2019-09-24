import React from 'react';
import App from 'next/app';
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
					<Component {...pageProps} />
					<GlobalStyles />
				</ApolloProvider>
			</ThemeProvider>
		);
	}
}

export default withApolloClient(Application);
