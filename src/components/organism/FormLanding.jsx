import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Picture from "../atoms/Picture";
import Bar from "../molecules/Bar";
import ShowCase from "../molecules/ShowCase";
import Text from "../atoms/Text";


function FormLanding() {
    return (
        <>
            <Bar op={1} item={<><Link to={"/logina"}><Button op={1} value={"INICIAR SESIÓN"}></Button></Link></>}></Bar>
            <ShowCase op={1} item={
                <>
                    <Picture src={"src/assets/img/logo-JR 3.svg"} op={1}></Picture>
                    <Text op={1} msn={"!Si puedes imaginarlo puedes programarlo!"}></Text>
                    <Text op={2} msn={"LOS MEJORES EN EL CAMPO AUTODIDACTA"}></Text>
                    <Link to={"/registera"}><Button op={2} value={"REGISTRARSE"}></Button></Link>
                </>
            }>
            </ShowCase>
            <Bar op={2} item={<Text op={3} msn={"¿Qué somos?"}></Text>}></Bar>

            <ShowCase op={3} item={

                <>

                    <ShowCase op={2} item={
                        <>
                            <Text op={4} msn={"Somos la mejor herramienta para aquellos autodidactas amantes de la programación."}></Text>
                            <Link to={"/registera"}><Button op={3} value={"¡REGISTRARSE ES GRATIS!"}></Button></Link>
                        </>
                    }></ShowCase>

                    <ShowCase op={2} item={
                        <>
                            <Picture src={"/src/assets/img/imagen_2023-03-08_201024574-removebg-preview 1 (1).svg"} op={1}></Picture>
                        </>
                    }></ShowCase>
                </>

            }></ShowCase>
            <Bar op={2} item={<Text op={3} msn={"¿Qué ofrecemos?"}></Text>}></Bar>
            <ShowCase op={4} item={

                <>
                    <Text op={5} msn={"Ofrecemos una gran cantidad de beneficios exclusivos para ti."}></Text>
                    <Text op={6} msn={"Java para Juniors es una aplicasion web destinada a mejorar la vida de las personas, principalmente a los estudiantes que no le entienden a java y sus derivados, pero que les interesa saber sobre el tema, y qué mejor herramienta que esta aplicación, la cual les dará los conocimientos necesarios para salir de esas dudas, esos pensamientos negativos y más que nada, saber por dónde comenzar."}></Text>
                    <Text op={6} msn={"Ofrecemos una gran variedad de cursos, el cual muchos de ellos serán de tu interés, tenemos la certeza de que tu gustará mucho, ya que también podrás subir tu contenido y ir generando ganáncias, y si no subes contenido, iras generando muchos conocimiéntos sobre la programación."}></Text>
                    <Link to={"/registera"}><Button op={3} value={"¡Somos el cambio que necesitas!"}></Button></Link>
                </>

            }></ShowCase>
            <Bar op={2} item={<Text op={3} msn={"¿Quienes somos?"}></Text>}></Bar>
            <ShowCase op={3} item={

                <>

                    <ShowCase op={5} item={
                        <>
                            <Text op={6} msn={"¡Nosotros somos Java para Juniors!"}></Text>
                            <Text op={7} msn={"Java para Juniors es una aplicasion web creada por unos alumnos que estudiaban la carrera de ingeniería en desarrollo del software en la universidad politecnica de chiapas en el año 2023, fue creada con la intención de ayudar amuchos alumnos que recien egresaban a la universidad, ya que a ellos les costo mucho aprender sobre lenguajes de programacion, sentian que hacian falta muchas herramientas para aprender y notaban que muchos de sus compañeros se daban de baja de la universidad por falta de conocimiento hacia la programación. "}></Text>
                            <Text op={7} msn={"En el segundo cuatrimestre les dejaron un proyecto integrador, y aprovecharon la oportunidad de crear esta aplicasion web, les ayudo mucho porque pasaron al siguiente cuatrimestre en el cual la siguieron mejorando, y tambien porque ayudaron a muchas personas con el contenido de Java para Juniors."}></Text>
                            <Link to={"/registera"}><Button op={3} value={"¡Unete a nuestra familia de JJ’S"}></Button></Link>
                        </>
                    }></ShowCase>

                    <ShowCase op={6} item={
                        <>
                            <Picture src={"src/assets/img/images-removebg-preview 1.svg"} op={2}></Picture>
                        </>
                    }></ShowCase>
                </>

            }></ShowCase>
        </>
    );
}

export default FormLanding;