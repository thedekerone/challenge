import styled from 'styled-components';

export const Switch = styled.div`
	width: 54px;
	border-radius: 48px;
	background: white;
	border: 1px solid #d2d2d2;
	margin: 0 .5rem;
	height: 30px;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		width: 28px;
		height: 28px;
		border: 1px solid white;
		${(props) => (props.left === true ? 'left:0px;' : 'left:calc(100% - 30px) ;')} top: 0px;
		background: black;
		border-radius: 100%;
		transition: .2s;
	}
`;
