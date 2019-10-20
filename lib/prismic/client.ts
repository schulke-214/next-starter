import Prismic from 'prismic-javascript';
import { GraphQLClient, HTTPQueryStringTransporter } from 'nano-graphql-client';

const create = async () => {
	const cms = Prismic.client(`${process.env.PRISMIC_URL}/api`, {
		accessToken: process.env.PRISMIC_TOKEN
	});

	const { masterRef } = await cms.getApi();

	const transporter = new HTTPQueryStringTransporter(`${process.env.PRISMIC_URL}/graphql`, {
		headers: {
			'Authorization': `Token ${process.env.PRISMIC_TOKEN}`,
			'Prismic-ref': masterRef.ref
		}
	});

	return new GraphQLClient({
		transporter
	});
};

let instance = null;

export const Client = async () => {
	if (typeof window === 'undefined') {
		return await create();
	}

	if (!instance) {
		instance = await create();
	}

	return instance;
};
