import { RichText as RT } from 'prismic-reactjs';

import { HTMLserializer } from './html-serializer';
import { link, href } from './config';

export const RichText = ({ render }) => (
	<RT render={render} htmlSerializer={HTMLserializer} linkResolver={link} hrefResolver={href} />
);
