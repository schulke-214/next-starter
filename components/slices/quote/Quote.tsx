import React from 'react';
import styled from 'styled-components';

import { tablet } from 'styles/lib/media';
import { asText } from 'lib/prismic/rich-text';

import { DefaultProps } from 'types/components/props';

type QuoteProps = DefaultProps & {
	slice: any;
};

const Quote: React.FunctionComponent<QuoteProps> = ({ slice, className }) => (
	<blockquote className={className}>{asText(slice.primary.quote)}</blockquote>
);

export default styled(Quote)`
	display: inline-block;
	margin-bottom: 2rem;
	font-size: 1.5rem;
	font-style: italic;

	&::before {
		content: '« ';
	}

	&::after {
		content: ' »';
	}

	.block-citation {
		display: inline-block;
		padding-left: 0.5rem;
		font-style: italic;
		border-left: solid #b4b4b4 0.25rem;
	}

	${tablet(`
		width: 130%;
		margin: 0 -15% 2rem -15%;
		font-size: 30px;
		padding: 0;
	`)}
`;
