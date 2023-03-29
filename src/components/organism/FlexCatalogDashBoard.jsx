import { useState } from "react";
import styled from "styled-components";
import CardTwo from "../molecules/CardTwoDashboar";
import Search from "../molecules/Search";

function FlexCatalogDashBoard() {
    const data = [
        {
            id: 1,
            category: 'Transacciones',
            image: 'src/assets/img/Frame 863.svg',
            title: 'Transacciones',
            description: 'Java es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems.​​'
        },
        {
            id: 2,
            category: 'Cursos',
            image: 'src/assets/img/Frame 530.svg',
            title: 'Cursos',
            description: 'Kotlin es un lenguaje de programación de tipado estático que corre sobre la máquina virtual de Java y que también puede ser compilado a código fuente de JavaScript.'
        },
        {
            id: 3,
            category: 'Clases',
            image: 'src/assets/img/Frame 514.svg',
            title: 'Clases',
            description: 'Struts es un framework desarrollado para construir aplicaciones web Java desarrolladas en base a la filosofía y metodología de trabajo de MVC.'
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
                        <CardTwo key={article.id} img={article.image} subtitle={article.title} ruta="#" price={article.price} info={article.description} />
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