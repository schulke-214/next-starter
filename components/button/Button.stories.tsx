import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
	<Button onClick={action('clicked')}>
		<span role='img' aria-label='so cool'>
			😀 😎 👍 💯
		</span>
	</Button>
);

export default {
	component: Button,
	title: 'Button'
};
