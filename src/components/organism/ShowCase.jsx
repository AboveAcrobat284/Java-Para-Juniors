import { Link } from "react-router-dom";
import styled from 'styled-components';
import Picture from '../atoms/Picture';
import Title from '../atoms/Title';
import Button from '../atoms/Button';

const ShowCaseConteiner = styled.div`
    width: 100%;
	height: 93vh;
	position: relative;
	background: url('/src/assets/img/wallpaperbetter.com_7680x4320.jpg') no-repeat center center/cover;
    box-shadow: inset 150px 220px 350px black,inset -160px -150px 350px black;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

const PictureConteiner = styled.div`
    width:20%;
    height:90%;
    display: flex;
    justify-content: center;
    align-items:center;

`;

const H1Conteiner = styled.div`
    width:50%;
    height:50%;
    display: flex;
    justify-content: center;
    align-items:center;

`;

const H2Conteiner = styled.div`
    width:35%;
    height:0%;
    display: flex;
    justify-content: center;
    align-items:center;

`;
const ButtonConteiner = styled.div`
    width:20%;
    height:80%;
    display: flex;
    justify-content: center;
    align-items:center;

`;



const ShowCase = () => {
    return (
        <>
            <ShowCaseConteiner>
                <PictureConteiner>
                    <Picture src="\src\assets\img\logo-JR.png" height={true} width={true}></Picture>
                </PictureConteiner>

                <H1Conteiner>
                    <Title msn="!Si puedes imaginarlo puedes programarlo!" estilo={false} pequenio={true}></Title>
                </H1Conteiner>

                <H2Conteiner>
                    <Title msn="LOS MEJORES EN EL CAMPO AUTODIDACTA" estilo={false} pequenio={false}></Title>
                </H2Conteiner>
                <ButtonConteiner>
                    <Link to="/"><Button type={"btn btn-rounded"} value={"REGISTRARSE"} height={false} width={false} tamanio={false}></Button></Link>
                </ButtonConteiner>
            </ShowCaseConteiner>
        </>

    );
}

export default ShowCase;
