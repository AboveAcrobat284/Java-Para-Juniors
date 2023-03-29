import { Link } from "react-router-dom";
import Picture from "../atoms/Picture";
import ShowCase from "../molecules/ShowCase";
import Text from "../atoms/Text";
import FlexCatalog from "./FlexCatalog";
import Button from "../atoms/Button";
import FlexCatalogTutor from "./FlexCatalogTutorC";

function FormClasesTutor() {
    return (
        <>
            <ShowCase op={'FormHomeP'} item={
                <>
                    <ShowCase op={'FormHomeH'} item={
                        <>
                            <ShowCase op={'NadVarHome'} item={
                                <>
                                    <Link to={'/hometutor'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Inicio.svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"Inicio"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                    <Link to={'/homecursostutor'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Cursos.svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"Cursos"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                    <Link to={'/homeclasestutor'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Clases.svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"Clases"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                    <Link to={'/'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Dudas.svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"Dudas"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                    <Link to={'/'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Notas.svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"Notas"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                    <Link to={'/'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Comentarios.svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"Comentarios"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                    <Link to={'/'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Carrito.svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"Carrito"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                    <Link to={'/'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Aportaciones.svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"Aportaciones"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                    <Link to={'/homedashboard'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Vector (3).svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"DashBoard"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                    <Link to={'/'}>
                                        <>
                                            <ShowCase op={'ButtonsNadvar'} item={
                                                <>
                                                    <ShowCase op={'Icon'} item={
                                                        <>
                                                            <Picture op={'IconsNadvar'} src={'src/assets/img/Cerrar Sesión.svg'}></Picture>
                                                        </>
                                                    }></ShowCase>
                                                    <ShowCase op={'TextIcon'} item={
                                                        <>
                                                            <Text op={'TextIcon'} msn={"Cerrar Sesión"}></Text>
                                                        </>
                                                    }></ShowCase>
                                                </>
                                            }></ShowCase>
                                        </>
                                    </Link>
                                </>
                            }></ShowCase>

                            <ShowCase op={'Contenido'} item={
                                <>
                                    <ShowCase op={"HeadHome"} item={
                                        <>
                                            <ShowCase op={'HeadText'} item={
                                                <>
                                                    <Text op={'TextHead'} msn={"JAVA PARA JUNIORS"}></Text>
                                                </>
                                            }></ShowCase>
                                            <ShowCase op={'HeadIcon'} item={
                                                <>
                                                    <Picture op={'IconHead'} src={'src/assets/img/logo-JR 3 (1).svg'}></Picture>
                                                </>
                                            }></ShowCase>
                                            <ShowCase op={'HeadIcon'} item={
                                                <>
                                                    <Link to={"/pdcl"}><Picture op={'Publicar'} src={'src/assets/img/Publicar.svg'}></Picture></Link>
                                                </>
                                            }></ShowCase>
                                        </>
                                    }></ShowCase>

                                    <Text op={'TextHeadCursos'} msn={'Mis Clases'}></Text>

                                    <FlexCatalogTutor></FlexCatalogTutor>
                                    

                                </>
                            }></ShowCase>

                        </>
                    }></ShowCase>
                </>
            }></ShowCase>
        </>
    );
}

export default FormClasesTutor;