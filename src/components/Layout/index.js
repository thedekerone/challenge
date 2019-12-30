import React from 'react';
import { Navbar } from '../Navbar';
import GloblalStyle from '../../GloblalStyle';

export const Layout = (props) => {
	return (
		<React.Fragment>
			<GloblalStyle />
			<Navbar to='/' />
			{props.children}
		</React.Fragment>
	);
};
