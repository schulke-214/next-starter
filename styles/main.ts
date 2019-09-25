import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle`
	${normalize()}

	* {
		color: ${props => props.theme.colors.primary};
		font-family: ${props => props.theme.typography.primary.join(', ')}
	}
`;
