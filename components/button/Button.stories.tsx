import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Button from './Button';

export const plainText = () => <Button onClick={action('clicked')}>{text('lol', 'lal')}</Button>;

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
	// knobs: {}
};
