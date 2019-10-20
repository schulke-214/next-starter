import React from 'react';
import Link from 'next/link';

import { NextPage } from 'next';
import { RichText } from 'lib/prismic/rich-text';
import { Client } from 'lib/prismic/client';

type WorkDetailProps = {
	data: any;
};

const WorkDetail: NextPage<WorkDetailProps> = props => {
	//console.log(props.data.project.body);
	return <></>;

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
	const client = await Client();

	const res = await client.fetch(
		//	query Project($uid: String!) {
		` {
			project(uid: "${ctx.query.uid}", lang: "de-de") {
				name
				description
				projectImage
				body {
					__typename
					... on ProjectBodyText {
						primary {
							text
						}
					}
					... on ProjectBodyQuote {
						primary {
							quote
						}
					}
				}
			}
		}`
	);

	console.log(JSON.stringify(res, null, 4));

	// if (!data) {
	// 	ctx.res.write('err while fetching');
	// 	ctx.res.end();
	// }

	// if (errors || !data.project) {
	// 	ctx.res.writeHead(302, {
	// 		Location: '/work'
	// 	});
	// 	ctx.res.end();
	// }

	return {
		data: ''
	};
};

export default WorkDetail;
