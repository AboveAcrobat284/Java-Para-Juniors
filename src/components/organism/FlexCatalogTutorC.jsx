import { useState } from "react";
import styled from "styled-components";
import CardTwoTC from "../molecules/CardTwoTC";
import Search from "../molecules/Search";

function FlexCatalogTutorC() {
    const data = [
        {
            id: 1,
            category: 'Java',
            image: 'src/assets/img/image 21 (1).svg',
            title: 'Java',
            description: 'Java es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems.​​'
        },
        {
            id: 2,
            category: 'Kotlin',
            image: 'src/assets/img/image 19.svg',
            title: 'Kotlin',
            description: 'Kotlin es un lenguaje de programación de tipado estático que corre sobre la máquina virtual de Java y que también puede ser compilado a código fuente de JavaScript.'
        },
        {
            id: 3,
            category: 'Struts',
            image: 'src/assets/img/image 22.svg',
            title: 'Struts',
            description: 'Struts es un framework desarrollado para construir aplicaciones web Java desarrolladas en base a la filosofía y metodología de trabajo de MVC.'
        },
        {
            id: 4,
            category: 'Spring Boot',
            image: 'src/assets/img/image 20.svg',
            title: 'Spring Boot',
            description: 'Spring Boot es un framework desarrollado para el trabajo con Java como lenguaje de programación.'
        },
        {
            id: 5,
            category: 'Hibernate',
            image: 'src/assets/img/image 23.svg',
            title: 'Hibernate',
            description: 'Hibernate genera las sentencias SQL y libera al desarrollador del manejo manual de los datos.'
        },
    ];

    const allCategories = ['Kotlin', 'Spring Boot'];

    const [categories, setCategories] = useState(allCategories);
    const [articles, setArticles] = useState(data);

    const filterCategory = (category) => {
        if (category === 'TODOS') {
            setArticles(data);
            return;
        }

        const filteredData = data.filter(article => article.category === category);
        setArticles(filteredData);
    }




    const allCategories2 = ['Java', 'Struts', 'Hibernate'];
    const [categories2, setCategories2] = useState(allCategories2);
    const [articles2, setArticles2] = useState(data);

    const filterCategory2 = (category) => {
        if (category === 'TODOS') {
            setArticles(data);
            return;
        }

        const filteredData = data.filter(article => article.category === category);
        setArticles(filteredData);
    }

    return (
        <>
            <StyledFlexCatalog>
                {
                    articles.map(article => (
                        <CardTwoTC key={article.id} img={article.image} subtitle={article.title} ruta="#" price={article.price} info={article.description} />
                    ))
                }

            </StyledFlexCatalog>
        </>


    );
}

const StyledFlexCatalog = styled.div`
    max-width: 90%;
    min-height: 50vh;
    margin-left: 6.5%;
    padding: 2rem 0 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    grid-gap: 80px;
    @media(min-width: 1024px) {
        max-width: 80%;
        min-height: 50vh;
        margin-left: 14.1%;
        padding: 7rem 0 5rem 0;
        display: flex;
        align-items: center;
        justify-content: left;
        flex-wrap: wrap;
        grid-gap: 80px;
    }
`

export default FlexCatalogTutorC;