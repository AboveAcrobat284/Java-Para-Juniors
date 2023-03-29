import { Link, useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import ShowCase from "../molecules/ShowCase";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function FormRegisterT() {
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        navigate('/registera')
    }


    const handlerClick2 = (e) => {
        e.preventDefault();
        navigate('/registert')
    }


    return (
        <>
            <ShowCase op={'registroP'} item={

                <>

                    <ShowCase op={'RegisterH'} item={
                        <>
                            <Text msn={"REGISTRATE"} op={8}></Text>
                            <Text msn={"!Es rapido y facil!"} op={10}></Text>
                            <ShowCase op={'RegisterBtnTwoP'} item={
                                <>
                                    <ShowCase op={'RegisterBtnTwo'} item={
                                        <>
                                            <Button op={'RegisterBtnTwo'} value={"Registrarse como Académico"} redirect={handlerClick}></Button>
                                        </>
                                    }></ShowCase>
                                    <ShowCase op={'RegisterBtnTwo2'} item={
                                        <>
                                            <Button op={'RegisterBtnTwoU'} value={"Registrarse como Tutor"} redirect={handlerClick2}></Button>
                                        </>
                                    }></ShowCase>
                                </>
                            }></ShowCase>
                            <Text msn={"Nombre"} op={11}></Text>
                            <Input type={"text"} op={1}></Input>
                            <Text msn={"Apellidos"} op={11}></Text>
                            <Input type={"text"} op={1}></Input>
                            <Text msn={"Correo Electrónico"} op={11}></Text>
                            <Input type={"mail"} op={1}></Input>
                            <Text msn={"Nombre de usuario"} op={11}></Text>
                            <Input type={"text"} op={1}></Input>
                            <Text msn={"Contraseña"} op={11}></Text>
                            <Input type={"password"} op={1}></Input>

                            <ShowCase op={'BtnAlone'} item={
                                <>
                                    <Link to={"/"}><Button op={'BtnAlone'} value={"Registrarse"}></Button></Link>
                                </>
                            }></ShowCase>
                            <ShowCase op={'BtnAlone'} item={
                                <>
                                    <Link to={"/"}><Button op={'BtnAlone'} value={"Cancelar"}></Button></Link>
                                </>
                            }></ShowCase>
                        </>
                    }></ShowCase>

                </>

            }></ShowCase>
        </>
    );
}

export default FormRegisterT;