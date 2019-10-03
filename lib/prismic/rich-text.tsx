import { RichText as PrismicRichText } from 'prismic-reactjs';

import { HTMLserializer } from './html-serializer';
import { link, href } from './config';

export const RichText = ({ render }) => (
	<PrismicRichText
		render={render}
		htmlSerializer={HTMLserializer}
		linkResolver={link}
		hrefResolver={href}
	/>
);

export const asText = PrismicRichText.asText;
