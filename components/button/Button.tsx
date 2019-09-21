import React from 'react';

interface IButtonProps {
	onClick?: () => void;
	disabled: boolean;
	children: React.ReactNode;
}

export default (props: IButtonProps) => (
	<button onClick={props.onClick} disabled={props.disabled}>
		{props.children}
	</button>
);
