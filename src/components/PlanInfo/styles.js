import styled from 'styled-components';

export const Container = styled.div`
	width: 85%;
	max-width: 600px;
	margin: 0 auto;
	background: white;
	box-sizing: border-box;
	-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.18);
	-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.18);
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.18);
`;

export const MainInfo = styled.div`
	border-bottom: 1px solid #a2a2a2;
	padding: .5rem 1.2rem;
`;

export const PriceContainer = styled.h1`
	text-align: center;
	font-size: 2.5rem;
`;

export const Price = styled.span`font-size: 4rem;`;

export const Small = styled.small`font-size: 1rem;`;
export const Description = styled.h2`
	text-align: center;
	font-size: .8rem;
	margin-top: .6rem;
`;
