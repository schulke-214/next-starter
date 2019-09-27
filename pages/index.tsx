import React from 'react';
import gql from 'graphql-tag';
import { NextPage } from 'next';
import { RichText } from 'prismic-reactjs';
import { useQuery } from 'lib/hooks';

type HomeProps = {
	document: any;
};

const Home: NextPage<HomeProps> = props => {
	const { data, loading, error } = useQuery(gql`
		query {
			allHome_pages(first: 100) {
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

	if (loading) return <>lol</>;

	return (
		<main>
			<h1>{RichText.asText(data.allHome_pages.edges[0].node.headline)}</h1>
			<p>{RichText.render(data.allHome_pages.edges[0].node.info_text)}</p>
		</main>
	);
};

export default Home;
