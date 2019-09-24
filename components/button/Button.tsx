import React from 'react';
import styled from 'styled-components';

import { DefaultProps } from 'types/components/props';

type ButtonProps = DefaultProps & {
	onClick?: () => void;
	disabled?: boolean;
};

const Button: React.FunctionComponent<ButtonProps> = props => (
	<button onClick={props.onClick} disabled={props.disabled}>
		{props.children}
	</button>
);

export default styled(Button)`
	border: 0.125rem solid palevioletred;
	border-radius: 0.25rem;
	margin: 0.5rem 1rem;
	padding: 0.25rem 1rem;
	color: palevioletred;
	font-size: 3rem;
	font-weight: 300;
	background: transparent;

	cursor: pointer;

	&:disabled {
		border-color: green;
		color: green;
	}
`;
