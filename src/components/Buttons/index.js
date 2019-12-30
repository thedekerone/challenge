import React, { useState } from 'react';
import { Switch, Submit } from './styles';

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

export const SubmitButton = (props) => {
	return <Submit>{props.children}</Submit>;
};
