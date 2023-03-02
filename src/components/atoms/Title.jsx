import styled from 'styled-components';

const StyledTitle = styled.h1`
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
line-height: 37px;
margin-left:10px;
color: ${props => props.estilo ? '#000' : '#fff'};
font-size: ${props => props.pequenio ? '32px' : '20px'};
`;

function Title({msn, estilo , pequenio}) {
    return ( 
        <StyledTitle estilo={estilo} pequenio={pequenio}>{msn}</StyledTitle>
     );
}

export default Title;