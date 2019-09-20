import { configure, load, addDecorator } from '@storybook/react';

// addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../../components', true, /\.stories.(js|jsx|ts|tsx)$/), module);
// configure(ctx, module);