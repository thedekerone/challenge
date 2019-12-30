import React, { useContext, useRef } from 'react';
import { Label, Form, Input, Join } from './styles';
import { SubmitButton } from '../Buttons';
import { ThemeContext } from 'styled-components';

export const BillingForm = () => {
	const context = useContext(ThemeContext);
	let name = useRef(null);
	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				context.setUser(name.current.value);
				console.log(context);
			}}>
			<Label htmlFor='info'>Nombre y Apellidos</Label>
			<Input ref={name} type='text' name='info' id='info' />
			<Label htmlFor='card'>Numero de tarjeta</Label>
			<Input placeholder='**** **** **** ****' type='text' name='card' id='card' />
			<Join>
				<div>
					<Label htmlFor='date'>F. expira</Label>
					<Input type='text' name='date' id='date' />
				</div>
				<div>
					<Label htmlFor='cvc'>CVC</Label>
					<Input type='text' name='cvc' id='cvc' />
				</div>
			</Join>
			<SubmitButton
				onClick={() => {
					context.setUser(name.current.value);
					console.log(context);
				}}
				to='congrats'>
				Pagar S/ {context.standard ? '29' : '59'}.00
			</SubmitButton>
		</Form>
	);
};
