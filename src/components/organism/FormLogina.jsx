import { Link, useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import ShowCase from "../molecules/ShowCase";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function FormLogina() {

    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        navigate('/logina')
    }


    const handlerClick2 = (e) => {
        e.preventDefault();
        navigate('/logint')
    }

    return (
        <>
            <ShowCase op={'LoginP'} item={

                <>

                    <ShowCase op={'LoginH'} item={
                        <>
                            <Text msn={"Iniciar sesión"} op={8}></Text>
                            <ShowCase op={'RegisterBtnTwoP'} item={
                                <>
                                    <ShowCase op={'RegisterBtnTwo'} item={
                                        <>
                                            <Button op={'RegisterBtnTwoU'} value={"Iniciar sesión como Académico"} redirect={handlerClick}></Button>
                                        </>
                                    }></ShowCase>
                                    <ShowCase op={'RegisterBtnTwo2'} item={
                                        <>
                                            <Button op={'RegisterBtnTwo'} value={"Iniciar sesión como Tutor"} redirect={handlerClick2}></Button>
                                        </>
                                    }></ShowCase>
                                </>
                            }></ShowCase>
                           
                                <Text msn={"Usuario o correo electronico"} op={9}></Text>
                                <Input type={"mail"} op={1} name={"userName"}></Input>
                                <Text msn={"Contraseña"} op={9}></Text>
                                <Input type={"password"} op={1} name={"userPassword"}></Input>
                                <ShowCase op={'BtnAlone'} item={
                                    <>
                                        <Link to={"/homeacademico"}><Button op={'BtnAlone'} value={"Iniciar sesión"}></Button></Link>
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

export default FormLogina;