import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

configure(require.context('../../components', true, /\.stories.(js|jsx|ts|tsx|mdx)$/), module);