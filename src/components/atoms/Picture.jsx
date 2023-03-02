import styled from "styled-components";

const StyledImg = styled.img`
    height: ${props => props.height ? '141px' : '221px'};
    width: ${props => props.width ? '170px' : '338px'};
`;

function Picture({src, height, width}) {
    return (
        <StyledImg src={src} width={width} height={height}></StyledImg>
    );
}




export default Picture;
