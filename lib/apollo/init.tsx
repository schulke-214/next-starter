import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

const prismic = new HttpLink({
	uri: process.env.PRISMIC_URL,
	credentials: 'same-origin',
	fetch
});

const api = new HttpLink({
	uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
	credentials: 'same-origin',
	fetch
});

const create = (initialState: any = {}) =>
	new ApolloClient({
		ssrMode: typeof window === 'undefined',
		cache: new InMemoryCache().restore(initialState),
		link: ApolloLink.split(operation => operation.getContext().client === 'api', api, prismic)
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
