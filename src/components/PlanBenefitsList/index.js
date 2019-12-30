import React from 'react';
import { PlanBenefits, List, ListItem } from './styles';

export const PlanBenefitsList = ({ standard = true }) => {
	return (
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
				<ListItem included={!standard}>
					✔ <span>You can get something with this plan, pretty sure it's something good</span>
				</ListItem>
				<ListItem included={!standard}>
					✔ <span>You can get something with this plan, pretty sure it's something good</span>
				</ListItem>
			</List>
		</PlanBenefits>
	);
};
