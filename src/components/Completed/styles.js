import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	height: 90vh;
	text-align: center;
	max-width: 600px;
	padding: 0 2rem;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Big = styled.h1`font-size: 3rem;`;

export const Price = styled.span`
	margin: .8rem 0;
	font-size: 1.5rem;
	font-weight: bold;
`;

export const AnchorPlan = styled.a`
	text-decoration: underline;
	display: block;
	font-weight: bold;
	color: #2f2f2f;
	margin-top: 2rem;
	font-size: 1.2rem;
`;
export const AnchorMag = styled.a`
	text-decoration: underline;

	color: #2f2f2f;
	font-size: .8rem;
	margin-top: 2rem;
`;
export const Img = styled.img`margin-bottom: 1.2rem;`;
