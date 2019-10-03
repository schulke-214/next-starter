import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { NextPage } from 'next';
import { Client } from 'lib/apollo/client';
import { RichText } from 'lib/prismic/rich-text';

type WorkProps = {
	data: any;
};

const Work: NextPage<WorkProps> = props => {
	return (
		<main>
			<Link href='/'>
				<a>to home</a>
			</Link>
			{props.data.allProjects.edges.map(edge => {
				return (
					<div key={edge.node._meta.uid}>
						<Link href={`/work/${edge.node._meta.uid}`}>
							<a>
								<RichText render={edge.node.name} />
								<RichText render={edge.node.description} />
								<img width='400px' src={edge.node.projectImage.url}></img>
							</a>
						</Link>
					</div>
				);
			})}
		</main>
	);
};

Work.getInitialProps = async ctx => {
	const client = Client();

	const { data } = await client.query({
		query: gql`
			query {
				allProjects(lang: "de-de") {
					totalCount
					edges {
						node {
							_meta {
								uid
							}
							name
							description
							projectImage
						}
					}
				}
			}
		`
	});

	return {
		data
	};
};

export default Work;
