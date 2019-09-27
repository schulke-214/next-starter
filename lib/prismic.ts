import Prismic from 'prismic-javascript';

import { DefaultClient } from 'prismic-javascript/d.ts/client';
import { Document } from 'prismic-javascript/d.ts/documents';

export const linkResolver = (doc: Document): string => {
	return '/';
};

export const hrefResolver = (doc: Document): string => {
	return '/';
};

let instance: DefaultClient = null;

export const PrismicClient = (req: any = null): DefaultClient => {
	// prevents generating new instances for client side since we don't need the refreshed request object.
	if (!req && instance) return instance;

	const options = {
		req,
		accessToken: process.env.PRISMIC_ACCESS_TOKEN
	};

	return (instance = Prismic.client(process.env.PRISMIC_ENDPOINT, options));
};
