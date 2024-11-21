import React from "react";
import { useParams } from "react-router";
import Paniers from "../../pages/Panier";
import styled from "styled-components";
import { useTheme } from "../../utils/hook";
import Souhait from "../souhait";

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    color: ${({theme})=> (theme === 'light' ? '#000' : '#fff')}
`


const PanierContainer = ({
    ajout, 
    Active, 
    onDelet, 
    souhait,
    onDeleSouh
})=> {

    const {id} = useParams()
    const {theme} = useTheme()

    return( 
        <StyleContainer theme={theme}>

            <h2>Mon panier : {ajout.length} </h2>

            <Paniers id={parseInt(id, 10)}  
                ajout={ajout} 
                Active={Active} 
                onDelet={onDelet} 
                 />
            
            <Souhait 
                souhait={souhait}
                Active={Active} 
                onDeleSouh={onDeleSouh}
            />

        </StyleContainer>
    )
}
export default PanierContainer