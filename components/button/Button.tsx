import React from 'react';

interface IButtonProps {
	onClick: () => void;
	children: React.ReactNode;
}

export default (props: IButtonProps) => <button onClick={props.onClick}>{props.children}</button>;
