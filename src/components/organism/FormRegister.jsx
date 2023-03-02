import { Link } from "react-router-dom";
import styled from 'styled-components';
import Title from "../atoms/Title";
import Inputs from "../atoms/Inputs";
import Button from "../atoms/Button";

const ShowCaseConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    width: 30%;
    height: 150%;
    left: 450px;
    top: 20px;
`;

const ShowCaseConteinerh = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 100%;
    height: 8%;
    `;
const ShowCaseConteinerT = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 100%;
    height: 8%;
    `;

function FormRegister() {
    return ( 
        <>
        <ShowCaseConteiner>
            <ShowCaseConteinerT>
            <Title msn="REGISTRATE" estilo={true} pequenio={true}></Title>
            </ShowCaseConteinerT>
            <ShowCaseConteinerh>
            <Title msn="!Es rapido y facil!" estilo={true} pequenio={false}></Title>
            </ShowCaseConteinerh>
            <ShowCaseConteinerT>
            <Link to="/"><Button type={"btn btn-rounded"} value={"Registrarse como Académico"} height3={false} width3={false} tamanio3={false}></Button></Link><Link to="/"><Button type={"btn btn-rounded"} value={"Registrarse como Tutor"} height3={false} width3={false} tamanio3={false}></Button></Link>
            </ShowCaseConteinerT>
            <ShowCaseConteinerh>
            <Title msn="Nombre" estilo={true} pequenio={false}></Title>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Inputs type="text"></Inputs>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Title msn="Apellidos" estilo={true} pequenio={false}></Title>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Inputs type="text"></Inputs>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Title msn="Usuario o correo electronico" estilo={true} pequenio={false}></Title>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Inputs type="text"></Inputs>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Title msn="Nombre de usuario" estilo={true} pequenio={false}></Title>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Inputs type="text"></Inputs>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Title msn="Contraseña" estilo={true} pequenio={false}></Title>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Inputs type="password"></Inputs>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Link to="/"><Button type={"btn btn-rounded"} value={"Registrarse"} height3={true} width3={true} tamanio3={true}></Button></Link>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Link to="/"><Button type={"btn btn-rounded"} value={"Cancelar"} height3={true} width3={true} tamanio3={true}></Button></Link>
            </ShowCaseConteinerh>
        </ShowCaseConteiner>
        </>
     );
}

export default FormRegister;