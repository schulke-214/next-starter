import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PrismicLink } from 'apollo-link-prismic';

const create = (initialState: any = {}) =>
	new ApolloClient({
		ssrMode: typeof window === 'undefined',
		cache: new InMemoryCache().restore(initialState),
		link: new PrismicLink({
			uri: process.env.PRISMIC_URL,
			accessToken: process.env.PRIMSIC_TOKEN
		})
	});

let client = null;

export const init = (initialState?: any) => {
	if (typeof window === 'undefined') {
		return create(initialState);
	}

	if (!client) {
		client = create(initialState);
	}

	return client;
};
