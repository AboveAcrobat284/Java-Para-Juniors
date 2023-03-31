import { useState } from "react";
import styled from "styled-components";
import CardTwo from "../molecules/CardTwoDashboar";
import Search from "../molecules/Search";

function FlexCatalogDashBoard() {
    const data = [
        {
            id: 1,
            category: 'Transacciones',
            image: 'Ganancias totales',
            title: 'Transacciones',
            description: 'Ganancias mensuales',
            description2: 'Cursos vendidos',
            description3: 'Claes vendidas'
        },
        {
            id: 2,
            category: 'Cursos',
            image: 'Academicos desuscriptos',
            title: 'Cursos',
            description: 'Academicos suscritos',
            description2: 'Ganancias mensuales',
            description3: 'Ganancias totales'
        },
        {
            id: 3,
            category: 'Clases',
            image: 'Academicos desuscriptos',
            title: 'Clases',
            description: 'Academicos suscritos',
            description2: 'Ganancias mensuales',
            description3: 'Ganancias totales'
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




    const allCategories2 = ['Transacciones', 'Cursos', 'Clases'];
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
            
            <Search BtnTodos={false} categories={categories2} filterCategory={filterCategory2} />



            <StyledFlexCatalog>
                {
                    articles.map(article => (
                        <CardTwo key={article.id} img={article.image} subtitle={article.title} ruta="#" price={article.description2} price2={article.description3} info={article.description} />
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
        max-width: 100%;
        min-height: 50vh;
        margin-left: 11%;
        padding: 7rem 0 5rem 0;
        display: flex;
        align-items: center;
        justify-content: left;
        flex-wrap: wrap;
        grid-gap: 80px;
    }
`

export default FlexCatalogDashBoard;