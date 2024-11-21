import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const Parag = styled.button`
    border: none;
    padding: 8px 10px;
    color: #666;    
    box-shadow: 0px 5px 7px 0px ;
`

const Rend = ()=> {

    return(
        <Div>
            <Parag>🚚 Expedition Rapide</Parag>
            <Parag>📞 Commander par Appel </Parag>
            <Parag> ↩ Remboussement</Parag>
        </Div>
    )
}

export default Rend