import React from 'react';
import styled from 'styled-components';

import { DefaultProps } from 'types/components/props';

type ButtonProps = DefaultProps & {
	onClick?: () => void;
	disabled?: boolean;
};

const Button: React.FunctionComponent<ButtonProps> = props => (
	<button onClick={props.onClick} disabled={props.disabled} className={props.className}>
		{props.children}
	</button>
);

export default styled(Button)`
	margin: 1rem 1rem;
	padding: 1rem 1rem;
	color: palevioletred;
	font-weight: 300;
	font-size: 1rem;
	background: transparent;
	border: 0.125rem solid palevioletred;
	border-radius: 0.25rem;
	cursor: pointer;

	&:hover {
		color: white;
		background-color: palevioletred;
	}

	&:disabled {
		color: grey;
		background-color: transparent;
		border-color: grey;
		cursor: not-allowed;
	}
`;
