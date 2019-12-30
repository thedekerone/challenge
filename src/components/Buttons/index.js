import React, { useState } from 'react';
import { Switch } from './styles';

export const SwitchButton = () => {
	const [
		switcher,
		setSwitcher
	] = useState(true);

	return (
		<Switch
			left={switcher}
			onClick={() => {
				setSwitcher(!switcher);
			}}
		/>
	);
};
