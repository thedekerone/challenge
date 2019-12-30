import React, { useState, useContext } from 'react';
import { Fixed, Title, Span, Change } from './styles';
import { PlanBenefitsList } from '../PlanBenefitsList';
import { ThemeContext } from 'styled-components';

export const FixedBenefits = () => {
	const [
		expanded,
		setExpanded
	] = useState(true);
	const context = useContext(ThemeContext);
	return (
		<Fixed>
			<Title
				onClick={() => {
					setExpanded(!expanded);
				}}>
				{context.standard ? (
					<React.Fragment>
						<span>Plan Estándar </span> <span>S/29 al mes</span>
					</React.Fragment>
				) : (
					<React.Fragment>
						<span>Plan Premium </span> <span>S/59 al mes</span>
					</React.Fragment>
				)}
			</Title>
			{!expanded && (
				<React.Fragment>
					<Span>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam .
					</Span>
					<PlanBenefitsList />
				</React.Fragment>
			)}
			<Change
				onClick={() => {
					context.setStandard(!context.standard);
				}}>
				Cambiar a {context.standard ? 'Plan Estándar' : 'Plan Premium'}
			</Change>
		</Fixed>
	);
};
