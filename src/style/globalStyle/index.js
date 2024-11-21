import { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../../utils/context/Context";
import { useTheme } from "../../utils/hook";

const StyleGlobal = createGlobalStyle`
  
    body{
        background-color: ${({isDarkMode}) => (isDarkMode ? '#2F2E41' : 'white')};
        display: flex;
        flex-direction: column;
      
       

    }
`

const GlobalStyle = ()=> {
    const {theme} = useContext(ThemeContext)

    return(
        <StyleGlobal isDarkMode = {theme === 'dark'}/>

       
    )
}

export default GlobalStyle