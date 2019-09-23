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
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0.5em 1em;
	padding: 0.25em 1em;
	font-size: 40px;
	cursor: pointer;

	&:disabled {
		border-color: green;
		color: green;
	}
`;
