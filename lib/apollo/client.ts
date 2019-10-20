import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PrismicLink } from 'apollo-link-prismic';

const create = (initialState: any = {}) =>
	new ApolloClient({
		ssrMode: typeof window === 'undefined',
		cache: new InMemoryCache({
			fragmentMatcher: {
				match: ({ id }, _, context) => true
			}
		}).restore(initialState),
		link: new PrismicLink({
			uri: process.env.PRISMIC_URL,
			accessToken: process.env.PRISMIC_TOKEN
		})
	});

let instance = null;

export const Client = (initialState?: any) => {
	if (typeof window === 'undefined') {
		return create(initialState);
	}

	if (!instance) {
		instance = create(initialState);
	}

	return instance;
};
