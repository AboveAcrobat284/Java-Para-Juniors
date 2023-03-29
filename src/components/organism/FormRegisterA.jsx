import { Link, useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import ShowCase from "../molecules/ShowCase";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useRef } from "react";


function FormRegisterA() {
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        navigate('/registera')
    }


    const handlerClick2 = (e) => {
        e.preventDefault();
        navigate('/registert')
    }





    /* register */


    const endpoint = "http://3.220.150.187/user/create";

    const form = useRef();


    const clickHandler = (e) => {
        e.preventDefault();
        const newForm = new FormData(form.current);
        if (
            newForm.get("firstName") === null ||
            newForm.get("lastName") === null ||
            newForm.get("eMail") === null ||
            newForm.get("userName") === null ||
            newForm.get("userPassword") === null
        ) {

            alert("campos vacios");
        } else {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");

            // var raw = JSON.stringify({
            //   name: "Pozo",
            //   name_users: "Alan",
            //   email: "alan@gmail.com",
            //   matricula: "221230",
            //   password: "alan22",
            //   confirmpassword: "alan22",
            // });

            var raw = JSON.stringify({
                firstName: newForm.get("firstName"),
                lastName: newForm.get("lastName"),
                eMail: newForm.get("eMail"),
                userName: newForm.get("userName"),
                userPassword: newForm.get("userPassword")
            });

            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            fetch("http://3.220.150.187/user/create", requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));

            //Codigo borrado

            alert("Registro exitoso ! ")

            navigate("/");
        }
    };

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
                                            <Button op={'RegisterBtnTwoU'} value={"Registrarse como Académico"} redirect={handlerClick}></Button>
                                        </>
                                    }></ShowCase>
                                    <ShowCase op={'RegisterBtnTwo2'} item={
                                        <>
                                            <Button op={'RegisterBtnTwo'} value={"Registrarse como Tutor"} redirect={handlerClick2}></Button>
                                        </>
                                    }></ShowCase>
                                </>
                            }></ShowCase>
                            <form ref={form}>
                                <Text msn={"Nombre"} op={11}></Text>
                                <Input type={"text"} op={1} name={"firstName"}></Input>
                                <Text msn={"Apellidos"} op={11}></Text>
                                <Input type={"text"} op={1} name={"lastName"}></Input>
                                <Text msn={"Correo Electrónico"} op={11}></Text>
                                <Input type={"mail"} op={1} name={"eMail"}></Input>
                                <Text msn={"Nombre de usuario"} op={11}></Text>
                                <Input type={"text"} op={1} name={"userName"}></Input>
                                <Text msn={"Contraseña"} op={11}></Text>
                                <Input type={"password"} op={1} name={"userPassword"}></Input>

                                <ShowCase op={'BtnAlone'} item={
                                    <>
                                        <Link to={"/"}><Button op={'BtnAlone'} value={"Registrarse"} redirect={clickHandler}></Button></Link>
                                    </>
                                }></ShowCase>
                                <ShowCase op={'BtnAlone'} item={
                                    <>
                                        <Link to={"/"}><Button op={'BtnAlone'} value={"Cancelar"}></Button></Link>
                                    </>
                                }></ShowCase>
                            </form>
                        </>
                    }></ShowCase>

                </>

            }></ShowCase>
        </>
    );
}

export default FormRegisterA;