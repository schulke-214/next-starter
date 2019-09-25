import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
		};
		spacings: {};
		typography: {
			primary: string[];
			secondary: string[];
		};
	}

	export type Theme = DefaultTheme;
}
