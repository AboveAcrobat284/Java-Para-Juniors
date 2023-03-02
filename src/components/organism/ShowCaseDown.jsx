import styled from 'styled-components';
import Picture from '../atoms/Picture';
import Button from '../atoms/Button';
import TextLanding from '../atoms/TextLanding';

const ShowCaseConteiner = styled.div`
    width: 100%;
	height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const PictureConteiner = styled.div`
    width:27%;
    height:100%;
    justify-content: center;
    align-items: center;
`;
const LeftContainer = styled.div`
    width:27%;
    height:100%;
    justify-content: center;
    align-items: center;
`;



const ShowCaseDown = () => {
    return (
        <>
            <ShowCaseConteiner>
                <LeftContainer>
                    <TextLanding msn="Somos la mejor herramienta para aquellos autodidactas amantes de la programación." estilo={true} pequenio={true}></TextLanding>
                    <Button type={"btn btn-rounded"} value={"¡REGISTRARSE ES GRATIS!"} height={true} width={true} tamanio={true}></Button>
                </LeftContainer>
                <PictureConteiner>
                    <Picture src={"src/assets/img/Captura de pantalla 2022-11-03 230857.png"} height={false} width={false}></Picture>
                </PictureConteiner>
            </ShowCaseConteiner>
        </>

    );
}

export default ShowCaseDown;
