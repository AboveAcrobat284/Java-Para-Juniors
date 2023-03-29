import { Link } from "react-router-dom";
import Text from "../atoms/Text";
import ShowCase from "../molecules/ShowCase";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Label from "../atoms/Label";
import Picture from "../atoms/Picture";


function FormEDC() {
    return (
        <>
            <ShowCase op={'registroPDC'} item={

                <>

                    <ShowCase op={'RegisterHPDC'} item={
                        <>
                            <Text msn={"Publicar Nuevo Curso"} op={8}></Text>
                            <Text msn={"Agregar imagen del curso"} op={'TextPDC'}></Text>
                            <Input type={"file"} op={2} id={"file"}></Input>
                            <Label op={2} value={"src/assets/img/Imagen.svg"} hf={"file"}></Label>
                            <Text msn={"Titulo"} op={'TextPDC'}></Text>
                            <Input type={"Text"} op={1}></Input>
                            <Text msn={"Contenido"} op={'TextPDC'}></Text>
                            <TextArea op={2}></TextArea>
                            <Text msn={"Subir archivos"} op={'TextPDC'}></Text>
                            <Input type={"file"} op={2} id={"file"}></Input>
                            <Label op={1} value={"src/assets/img/Documentos.svg"} hf={"file"}></Label>
                            <Text msn={"Publicar"} op={'TextPDC'}></Text>
                            <Input type={"file"} op={2} id={"file"}></Input>
                            <Label op={3} value={"src/assets/img/Vector.svg"} hf={"file"}></Label>
                        </>
                    }></ShowCase>

                    <ShowCase op={'RegisterHPDC'} item={
                        <>
                            <Text msn={"Editar Curso"} op={8}></Text>
                            <Text msn={"Subir imagen del curso a editar"} op={'TextPDC'}></Text>
                            <Input type={"file"} op={2} id={"file"}></Input>
                            <Label op={2} value={"src/assets/img/Imagen.svg"} hf={"file"}></Label>
                            <Text msn={"Titulo"} op={'TextPDC'}></Text>
                            <Input type={"Text"} op={1}></Input>
                            <Text msn={"Contenido"} op={'TextPDC'}></Text>
                            <TextArea op={2}></TextArea>
                            <Text msn={"Eliminar archivos"} op={'TextPDC'}></Text>
                            <Input type={"file"} op={2} id={"file"}></Input>
                            <Label op={3} value={"src/assets/img/Eliminar.svg"} hf={"file"}></Label>
                            <Text msn={"Guardar cambios"} op={'TextPDC'}></Text>
                            <Input type={"file"} op={2} id={"file"}></Input>
                            <Link to={"/hometutor"}><Label op={3} value={"src/assets/img/Vector (1).svg"} hf={"file"}></Label></Link>
                        </>
                    }></ShowCase>

                </>

            }></ShowCase>
        </>
    );
}

export default FormEDC;