import { Link } from "react-router-dom";
import Text from "../atoms/Text";
import ShowCase from "../molecules/ShowCase";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Label from "../atoms/Label";
import Picture from "../atoms/Picture";


function FormPDCL() {
    return (
        <>
            <ShowCase op={'registroPDC'} item={

                <>

                    <ShowCase op={'RegisterHPDC'} item={
                        <>
                            <Text msn={"Titulo"} op={'TextPDC'}></Text>
                            <Input type={"Text"} op={1}></Input>
                            <Text msn={"Lenguaje"} op={'TextPDC'}></Text>
                            <Input type={"Text"} op={1}></Input>
                            <Text msn={"Descripción"} op={'TextPDC'}></Text>
                            <TextArea op={1}></TextArea>
                            <Text msn={"Precio"} op={'TextPDC'}></Text>
                            <Input type={"Text"} op={1}></Input>
                            <Text msn={"Contenido"} op={'TextPDC'}></Text>
                            <TextArea op={1}></TextArea>


                            <Text msn={"Imagen de la clase"} op={'TextPDC'}></Text>

                            <Input type={"file"} op={2} id={"file"}></Input>
                            <Label op={2} value={"src/assets/img/Imagen.svg"} hf={"file"}></Label>

                            <Text msn={"Documentos de la clase"} op={'TextPDC'}></Text>

                            <Input type={"file"} op={2} id={"file"}></Input>
                            <Label op={1} value={"src/assets/img/Documentos.svg"} hf={"file"}></Label>

                            <ShowCase op={'BtnAlone'} item={
                                <>
                                    <Link to={"/hometutor"}><Button op={'BtnAlone'} value={"PUBLICAR"}></Button></Link>
                                </>
                            }></ShowCase>
                        </>
                    }></ShowCase>

                </>

            }></ShowCase>
        </>
    );
}

export default FormPDCL;