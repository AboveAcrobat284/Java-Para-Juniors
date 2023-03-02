import styled from 'styled-components';

const StyledInput = styled.input`
    width: 678px;
    height: 40px;
    left: 378px;
    top: 304px;
    border-radius: 10px;
`;

//Para que este componente sea reutilizable - No se puede llamar igual que el elemento del styled
function Inputs({type}) {
    return ( 
        <StyledInput type={type}/>
     );
}

export default Inputs;
