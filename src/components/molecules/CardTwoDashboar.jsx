import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from '../atoms/Button';

function CardTwoDashboar({ img, subtitle, ruta, price, info }) {
    return (
        <StyledCardTwo >
            <div className="contenido">
                <h3>{subtitle}</h3>
            </div>
            <figure className='cursor_logo'>
                <img src={img} alt="Foto del inmueble" />
            </figure>
        </StyledCardTwo>
    );
}

const StyledCardTwo = styled.div`
    width: 100%;
    margin-left:0% ;
    margin-bottom:-10% ;
    flex-direction: column;
    padding: 10px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f0f7ff;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
    transition: all .4s ease;
    &:hover{
        box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
        transform: translateY(-3%);
    }
    @media(min-width: 1024px) {
        width: 30%;
        margin-left:-5%;
        margin-bottom:-1% ;
        
        padding: 10px;
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        background-color: #f0f7ff;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: all .4s ease;
        &:hover{
            box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
            transform: translateY(-3%);
        }
    }
    img{
        width: 100%;
        height: 200px;
        cursor: pointer;
        @media(min-width: 1024px) {
            width: 100%;
            height: 250px;
            cursor: pointer;
        }
    }
    .contenido{
        /* padding: 0px; */
        display: flex;
        flex-wrap: wrap;
        grid-gap: 1%;
        @media(min-width: 1024px) {
            display: flex;
            flex-wrap: wrap;
            grid-gap: 1%;
        }
    }
    .contenido h3{
        width: 100%;
        font-family: 'Ubuntu';
        font-size: 3.5rem;
        margin-bottom: .8rem;
        margin-top: .8rem;
        margin-left: .5rem;
        text-align: center;
        color:#0F2F4B;
        @media(min-width: 1024px) {
            color:#0F2F4B;
            text-align: center;
            width: 100%;
            font-family: 'Ubuntu';
            font-size: 3.5rem;
            margin-bottom: .8rem;
            margin-top: .8rem;
            margin-left: .5rem;
        }
    }
/*     .contenido .btn_editar{
        width: 92%;
        font-family: 'Ubuntu';
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: 700;
        text-align: center;
        margin: 1.5rem 0 1rem;
        display: inline-block;
        padding: 9px;
        color:#5CAEFF;
        border: 2px solid #5CAEFF;
        border-radius: 20px;
        transition: all .4s ease;
    }
    .contenido .btn_editar:hover{
        background: #5CAEFF;
        color: white;
    } */
    .text_description{
        font-family: 'Ubuntu';
        text-align: justify;
        font-size: 0.8rem;
        line-height: 1rem;
        @media(min-width: 1024px) {
            font-family: 'Ubuntu';
            text-align: justify;
            font-size: 1.8rem;
            line-height: 2.5rem;
        }
    }
`

export default CardTwoDashboar;