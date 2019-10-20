import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Theme from 'styles/themes/default';
import GlobalStyles from 'styles/main';

interface Props {}

class Application extends App<Props> {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<ThemeProvider theme={Theme}>
				<>
					<Head>
						<title>my new cool app</title>
					</Head>
					<Component {...pageProps} />
					<GlobalStyles />
				</>
			</ThemeProvider>
		);
	}
}

export default Application;
