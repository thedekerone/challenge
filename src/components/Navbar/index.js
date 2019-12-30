import React from 'react';
import { Container, Logo } from './styles';

export const Navbar = (props) => {
	return (
		<Container>
			<Logo to={props.to}>Mag.</Logo>
		</Container>
	);
};
