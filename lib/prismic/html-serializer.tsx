import React from 'react';
import { RichText } from 'prismic-reactjs';
import { link, href } from './config';
import Router from 'next/router';

const { Elements } = RichText;

const onClickHandler = (href, as) => e => {
	e.preventDefault();
	Router.push(href, as);
};

const propsWithUniqueKey = function(props, key) {
	return Object.assign(props || {}, { key });
};

const transformer = {
	heading1: () => {
		console.log('serialize a h1');
	},
	hyperlink: () => {},
	image: () => {}
};

export const HTMLserializer = (type, element, content, children, key) => {
	if (transformer[type]) return transformer[type](element, content, children, key);

	return null;
	/*
	switch (type) {
		case Elements.hyperlink: // Link
			if (element.data.link_type === 'Document') {
				// Only for internal links add the new onClick that will imperatively route to the appropiate page
				let props = {
					onClick: onClickHandler(href(element.data), link(element.data)),
					href: link(element.data),
					key
				};

				return <a {...props}>{children}</a>;
				// React.createElement('a', propsWithUniqueKey(props, key), children);
			}

			// Default link handling
			const targetAttr = element.data.target ? { target: element.data.target } : {};
			const relAttr = element.data.target ? { rel: 'noopener' } : {};

			let props = Object.assign(
				{
					href: element.data.url || link(element.data)
				},
				targetAttr,
				relAttr
			);
			return React.createElement('a', propsWithUniqueKey(props, key), children);

		case Elements.image: // Image
			var props = {};
			var internal = false;

			if (element.linkTo && element.linkTo.link_type === 'Document') {
				// Exclusively for internal links, build the object that can be used for router push
				internal = true;
				props = Object.assign({
					onClick: onClickHandler(href(element.linkTo), link(element.linkTo)),
					href: link(element.linkTo)
				});
			}
			// Handle images just like regular HTML Serializer
			const linkUrl = element.linkTo ? element.linkTo.url || link(element.linkTo) : null;
			const linkTarget =
				element.linkTo && element.linkTo.target ? { target: element.linkTo.target } : {};
			const linkRel = linkTarget.target ? { rel: 'noopener' } : {};
			const img = React.createElement('img', { src: element.url, alt: element.alt || '' });
			return React.createElement(
				'p',
				propsWithUniqueKey(
					{ className: [element.label || '', 'block-img'].join(' ') },
					key
				),
				linkUrl
					? React.createElement(
							'a',
							// if it's an internal link, replace the onClick
							internal
								? propsWithUniqueKey(props, key)
								: Object.assign({ href: linkUrl }, linkTarget, linkRel),
							img
					  )
					: img
			);

		default:
			return null;
	}

	*/
};
