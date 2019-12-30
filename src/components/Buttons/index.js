import React, { useState, useContext } from 'react';
import { Switch, Submit } from './styles';
import { ThemeContext } from 'styled-components';

export const SwitchButton = () => {
	const [
		switcher,
		setSwitcher
	] = useState(true);
	const context = useContext(ThemeContext);

	return (
		<Switch
			left={switcher}
			onClick={() => {
				setSwitcher(!switcher);

				context.setStandard(!context.standard);
			}}
		/>
	);
};

export const SubmitButton = ({ to = '/', children, onClick }) => {
	return (
		<Submit onClick={onClick} to={to}>
			{children}
		</Submit>
	);
};
