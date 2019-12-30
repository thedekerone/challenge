import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	top: 0;
	width: 100%;
	padding: .6rem;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #020202;
`;

export const Logo = styled(Link)`
	font-size: 1.5rem;
	font-weight: bold;
	color: #f3f3f3;
`;
