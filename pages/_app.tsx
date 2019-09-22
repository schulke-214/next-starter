import React from 'react';
import App from 'next/app';
import { ApolloProvider } from 'react-apollo';

import withApolloClient from 'lib/apollo/with-apollo-client';

import 'styles/main.scss';

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
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		);
	}
}

export default withApolloClient(Application);
