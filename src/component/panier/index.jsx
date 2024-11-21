import React from "react";
import styled from "styled-components";


const StylePanier = styled.button`
    border: none;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
    
`
const StyleSpan = styled.span`
    color: #fff;
`

const Panier = ({ajout})=> {

    return(
        <div>
            <StylePanier>
                
                <StyleSpan>{ajout.length}</StyleSpan> 🛒 
            </StylePanier>
        </div>
    )
}

export default Panier;