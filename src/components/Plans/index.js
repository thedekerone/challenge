import React from 'react';
import { Container, Text } from './styles';
import { SwitchButton } from '../Buttons';

export const Plans = () => {
	return (
		<Container>
			<Text>Plan Estándar</Text>
			<SwitchButton />
			<Text>Plan Premium</Text>
		</Container>
	);
};
