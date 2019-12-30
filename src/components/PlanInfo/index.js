import React, { useContext } from 'react';
import { Container, Price, Small, PriceContainer, MainInfo, PlanBenefits, List, ListItem } from './styles';
import { Description } from './styles';
import { SubmitButton } from '../Buttons';
import { PlanBenefitsList } from '../PlanBenefitsList';
import { ThemeContext } from 'styled-components';

export const PlanInfo = () => {
	const context = useContext(ThemeContext);
	return (
		<Container>
			<MainInfo>
				<PriceContainer>
					S/ <Price>{context.standard ? '29' : '59'}</Price> <Small>/ AL MES</Small>{' '}
				</PriceContainer>
				<Description>
					Lore ipsum dolor sit amet, consetetur sadispcing elitr, sed diam nonumy eirmod
				</Description>
			</MainInfo>

			<PlanBenefitsList standard={true} />

			<SubmitButton to='billing'>Suscribirme</SubmitButton>
		</Container>
	);
};
