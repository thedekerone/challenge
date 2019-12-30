import styled from 'styled-components';

export const Fixed = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	background: white;
	padding: 1rem;
	box-sizing: border-box;
`;

export const Title = styled.h3`
	display: flex;
	max-width: 700px;

	margin: 0 auto;
	width: 85%;
	justify-content: space-between;
`;

export const Span = styled.span`
	width: 85%;
	margin: 0 auto;
	margin-top: .4rem;
	display: block;
	font-size: .8rem;
	text-align: justify;
`;

export const Change = styled.span`
	font-size: 0.8rem;
	display: block;
	text-decoration: underline;
	color: #2e2e2e;
	text-align: center;
	margin: 0 auto;
	margin-top: .7rem;
`;
