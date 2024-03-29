import { Link } from "react-router-dom";
import styled from 'styled-components';


const TabsConteiner = styled.div`
    width: 100%;
    height: 8vh;
    display:flex;
    background-color: #0F2F4B;
    ${
        props => {
            switch(props.op) {
                case 1:
                    return `
                        align-items:center;
	                    justify-content: right;
                    `;
                case 2:
                    return `
                        align-items:center;
	                    justify-content: center;
                    `;
                case 3:
                    return `
                        font-size: 0.9rem;
                        text-align: center;
                    `;
                case 4:
                    return `
                        width: 231px;
                        height: 32px;
                        font-size: 11px;
                    `;
            }
        }
    }
`;


function Bar({item,op}) {
    return ( 
        <TabsConteiner op={op}>{item}</TabsConteiner>
     );
}

export default Bar;
