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
    height: 95%;
    left: 450px;
    top: 20px;
`;

const ShowCaseConteinerh = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 100%;
    height: 8%;
    `;

function FormLogin() {
    return ( 
        <>
        <ShowCaseConteiner>
            <ShowCaseConteinerh>
            <Title msn="Iniciar sesión" estilo={true} pequenio={true}></Title>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Title msn="Usuario o correo electronico" estilo={true} pequenio={false}></Title>
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
            <Link to="/"><Button type={"btn btn-rounded"} value={"Iniciar sesión"} height3={true} width3={true} tamanio3={true}></Button></Link>
            </ShowCaseConteinerh>
            <ShowCaseConteinerh>
            <Link to="/"><Button type={"btn btn-rounded"} value={"Cancelar"} height3={true} width3={true} tamanio3={true}></Button></Link>
            </ShowCaseConteinerh>
        </ShowCaseConteiner>
        </>
     );
}

export default FormLogin;