import styled from 'styled-components';

export const PlanBenefits = styled.div`padding: .5rem 1.2rem;`;

export const List = styled.ul`
	list-style: none;

	&:nth-last-child(1) {
		margin-bottom: 1.2rem;
	}
`;

export const ListItem = styled.li`
	text-align: justify;
	width: 85%;
	margin-left: 1rem;
	margin-top: 1.2rem;
	font-size: .8rem;
	display: flex;
    justify-content: space-between;
    
    opacity:${(props) => (props.included === true ? '1' : '.4')}

	& span {
		width: 100%;
        margin-left: 1rem;
        
	}
`;
