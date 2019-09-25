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
	margin: 0.5rem 1rem;
	padding: 0.25rem 1rem;
	color: palevioletred;
	font-weight: 300;
	font-size: 3rem;
	background: transparent;
	border: 0.125rem solid palevioletred;
	border-radius: 0.25rem;
	cursor: pointer;

	&:disabled {
		color: green;
		border-color: green;
	}
`;
