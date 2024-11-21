import React from "react";
import styled from "styled-components";
import backgroundImage from '../../assets/basil.jpg'
import color from "../../style/colors";

const StyledHome = styled.div `
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), ${color.backgroundDark}), url('${backgroundImage}');
    background-size: cover;
    background-position: center;
    height: 70vh;
    whidth: 100%;
    position: relative;
`
const StyleText = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate( -50%, -50%);
    text-align: center;
`

const StyleH2 = styled.h2`
     -webkit-text-stroke: #fff 0.9px;
     color: transparent;
     font-size: 45px;
     font-weight: bold;
     text-transform: capitalize;
`

const Background = ()=> {

    return (
        <StyledHome>
            <StyleText>
                <StyleH2>Fleuristes</StyleH2>
                <p>bienvenue dans le monde naturel</p>
            </StyleText>
       
         </StyledHome>
    )
}

export default Background