import styled from 'styled-components';
import Button from '../atoms/Button';






const TabsConteiner = styled.div`
    background: var(--dark-color);
	padding-top: 1rem;
	border-right: none;
    display: flex;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
    align-items:flex-start;
	justify-content: right;
    padding: 0.2rem 0;
    width: 100%;
    height:100%;
`;

const TabsConteinerButton1 = styled.div`
width:33%;
height:100%;
display: flex;
justify-content: center;
align-items:center;
`;
const TabsConteinerButton2 = styled.div`
width:33%;
height:100%;
display: flex;
justify-content: center;
align-items:center;
`;
const TabsConteinerButton3 = styled.div`
width:33%;
height:100%;
display: flex;
justify-content: center;
align-items:center;
`;


const Tabs = () => {
    return (
        <>
            <TabsConteiner>
                <TabsConteinerButton1>
                    <Button type={"btn btn-rounded"} value={"¿Qué somos?"} height2={true} width2={true} tamanio2={true}></Button>
                </TabsConteinerButton1>
                <TabsConteinerButton2>
                    <Button type={"btn btn-rounded"} value={"¿Qué ofrecemos?"} height2={true} width2={true} tamanio2={true}></Button>
                </TabsConteinerButton2>
                <TabsConteinerButton3>
                    <Button type={"btn btn-rounded"} value={"¿Quienes somos?"} height2={true} width2={true} tamanio2={true}></Button>
                </TabsConteinerButton3>
            </TabsConteiner>
        </>

    );
}

export default Tabs;
