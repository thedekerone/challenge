import React, { useContext } from 'react';
import checked from '../../images/check.png';
import { Container, AnchorPlan, AnchorMag, Img, Price, Big } from './styles';
import { ThemeContext } from 'styled-components';

export const Completed = () => {
	const context = useContext(ThemeContext);
	return (
		<Container>
			<Img src={checked} width='100px' alt='Completed' />
			<h3>Bienvenido {context.user}, has adquirido el</h3>
			<Big>Plan {context.standard ? 'Premium' : 'Estándard'}</Big>
			<Price>S/{context.standard ? '29' : '59'} al mes</Price>
			<span>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua.
			</span>
			<AnchorPlan href='/'>Ir a ver mi plan</AnchorPlan>
			<AnchorMag href='/'>Ir a Mag.pe</AnchorMag>
		</Container>
	);
};
