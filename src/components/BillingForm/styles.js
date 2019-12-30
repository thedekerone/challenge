import styled from 'styled-components';

export const Label = styled.label`
	font-weight: bold;
	display: block;
	width: 100%;
`;

export const Form = styled.form`
	width: 85%;
	display: block;
	max-width: 700px;
	margin: 0 auto;
	margin-top: 3.5rem;
`;

export const Input = styled.input`
	width: 100%;
	padding: 1.2rem .3rem;
	border: 1px solid #d2d2d2;
	position: relative;
	margin-bottom: 1.4rem;
`;

export const Join = styled.div`
	display: flex;
	justify-content: space-between;
	& div {
		width: 46%;
	}
`;
