import { css } from 'styled-components';

export const desktop = (inner: string) => css`
	@media (min-width: ${992 / 16}em) {
		${inner};
	}
`;

export const tablet = (inner: string) => css`
	@media (max-width: ${992 / 16}em) {
		${inner};
	}
`;

export const mobile = (inner: string) => css`
	@media (max-width: ${576 / 16}em) {
		${inner};
	}
`;
