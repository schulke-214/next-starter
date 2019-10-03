import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { NextPage } from 'next';
import { RichText } from 'lib/prismic/rich-text';
import { Client } from 'lib/apollo/client';

type WorkDetailProps = {
	data: any;
};

const WorkDetail: NextPage<WorkDetailProps> = props => {
	return (
		<main>
			<Link href='/work'>
				<a>Zurück</a>
			</Link>

			<RichText render={props.data.project.name} />
			<RichText render={props.data.project.description} />

			<img src={props.data.project.projectImage.url}></img>
		</main>
	);
};

WorkDetail.getInitialProps = async ctx => {
	const client = Client();

	const { data, error } = await client.query({
		query: gql`
			query Project($uid: String!) {
				project(uid: $uid, lang: "de-de") {
					name
					description
					projectImage
				}
			}
		`,
		variables: {
			uid: ctx.query.uid
		}
	});

	if (error || !data.project) {
		ctx.res.writeHead(302, {
			Location: '/work'
		});
		ctx.res.end();
	}

	return {
		data
	};
};

export default WorkDetail;
