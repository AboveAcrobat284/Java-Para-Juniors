import styled from 'styled-components';

const StyledButton = styled.button`
    font-family: 'Ubuntu';
    background: var(--primary-color);
    color: #fff;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    border-radius: 10px;
    border: 1px solid white;
    height: ${props => props.height ? '36px' : '41px'};
    width: ${props => props.width ? '213px' : '212px'};
    font-size: ${props => props.tamanio ? '16px' : '16px'};


    height: ${props => props.height2 ? '19px' : '41px'};
    width: ${props => props.width2 ? '212px' : '212px'};
    font-size: ${props => props.tamanio2 ? '12px' : '16px'};

    height: ${props => props.height3 ? '61px' : '52px'};
    width: ${props => props.width3 ? '402px' : '190px'};
    font-size: ${props => props.tamanio3 ? '30px' : '16px'};

    
`;

function Button({ type, value, height, width, tamanio, height2, width2, tamanio2, height3, width3, tamanio3}) {
    return ( 
        <StyledButton type={type} height={height} width={width} tamanio={tamanio}  height2={height2} width2={width2} tamanio2={tamanio2 } height3={height3} width3={width3} tamanio3={tamanio3 }>{value}</StyledButton>
     );
}

export default Button;