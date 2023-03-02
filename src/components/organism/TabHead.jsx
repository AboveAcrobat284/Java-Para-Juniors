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

const TabsConteinerButton = styled.div`
width:25%;
height:100%;
display: flex;
justify-content: center;
align-items:center;
`;


const TabHead = () => {
    return (
        <>
            <TabsConteiner>
                <TabsConteinerButton>
                    <Button type={"btn btn-rounded"} value={"INICIAR SESIÓN"} height={true} width={true} tamanio={true}></Button>
                </TabsConteinerButton>
            </TabsConteiner>
        </>

    );
}

export default TabHead;
