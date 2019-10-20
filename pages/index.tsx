import React from 'react';
import Link from 'next/link';

import { NextPage } from 'next';
import { RichText, asText } from 'lib/prismic/rich-text';
import { Client } from 'lib/prismic/client';

type HomeProps = {
	data: any;
};

const Home: NextPage<HomeProps> = props => {
	return (
		<main>
			<Link href='/work'>
				<a>to work</a>
			</Link>
			<h1>{asText(props.data.allHome_pages.edges[0].node.headline)}</h1>
			<div>
				<RichText render={props.data.allHome_pages.edges[0].node.info_text} />
			</div>
		</main>
	);
};

Home.getInitialProps = async ctx => {
	const client = await Client();

	const { data } = await client.fetch(`
		query {
			allHome_pages(first: 1) {
				edges {
					node {
						_meta {
							lang
						}
						headline
						info_text
					}
				}
			}
		}
	`);

	return {
		data
	};
};

export default Home;
