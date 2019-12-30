import React from 'react';
import { BillingForm } from '../components/BillingForm';
import { FixedBenefits } from '../components/FixedBenefits';

export const Billing = () => {
	return (
		<React.Fragment>
			<BillingForm />
			<FixedBenefits />
		</React.Fragment>
	);
};
