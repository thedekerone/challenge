import React from 'react';
import { Container, Price, Small, PriceContainer, MainInfo, PlanBenefits, List, ListItem } from './styles';
import { Description } from './styles';
import { SubmitButton } from '../Buttons';

export const PlanInfo = ({ price = '29' }) => {
	return (
		<Container>
			<MainInfo>
				<PriceContainer>
					S/ <Price>{price}</Price> <Small>/ AL MES</Small>{' '}
				</PriceContainer>
				<Description>
					Lore ipsum dolor sit amet, consetetur sadispcing elitr, sed diam nonumy eirmod
				</Description>
			</MainInfo>
			<PlanBenefits>
				<List>
					<ListItem included={true}>
						✔ <span>You can get something with this plan, pretty sure it's something good</span>
					</ListItem>
					<ListItem included={true}>
						✔ <span>You can get something with this plan, pretty sure it's something good</span>
					</ListItem>
					<ListItem included={true}>
						✔ <span>You can get something with this plan, pretty sure it's something good</span>
					</ListItem>
					<ListItem included={false}>
						✔ <span>You can get something with this plan, pretty sure it's something good</span>
					</ListItem>
					<ListItem included={false}>
						✔ <span>You can get something with this plan, pretty sure it's something good</span>
					</ListItem>
				</List>
			</PlanBenefits>
			<SubmitButton>Suscribirme</SubmitButton>
		</Container>
	);
};
