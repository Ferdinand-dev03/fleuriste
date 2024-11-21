import React from "react";
import styled from "styled-components";
import color from "../../style/colors";
import { useTheme } from "../../utils/hook";

const StyleFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.backgroundDark};
    height: 50px;
    margin-top: 20px;
    color: white;
    gap: 20px
`
const NightButton = styled.button`
    border: none;
    background: none;
    color: #fff;
`

const Footer = ()=> {

    const {toggle, theme} = useTheme()

    return(
        <StyleFooter theme={theme}>
            <p>Faire par Ferdinand.dev </p>

            <NightButton onClick={()=> toggle()}>
                {`mode ${theme === 'light' ? '🌞' : '🌙'} `}
            </NightButton>
        </StyleFooter>
    )
}

export default Footer;