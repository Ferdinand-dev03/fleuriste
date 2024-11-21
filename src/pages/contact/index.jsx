import React from "react";
import styled from "styled-components";
import color from "../../style/colors";
import { useTheme } from "../../utils/hook";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 250px;
    gap: 10px;
    margin-left: 20px;
   
`

const Stylediv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${({theme})=> (theme === 'light'? 'black' : 'white')}
    
`
const StyleDiv = styled.div`
    display: flex;
    gap: 20px;
`
const StyleLocate = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    gap: 15px

`
const StyleH2 = styled.h2`
    display: flex;
    background-color: ${color.backgroundLight};
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;

`



const Contact = ()=> {
    const {theme} = useTheme()

    return (
        <Stylediv theme={theme}>
            <StyleH2>Contactez - Nous</StyleH2>
            <Cont/>
           <StyleDiv>
                <Forms/>
                <Locate/>
           </StyleDiv>
        </Stylediv>
    )
}

const Forms = ()=> {
    const {theme} = useTheme()

    return(
        <Form theme={theme}>
            <label >
                Email
            </label>
            <input type="text"/>
            <label >
                Nom
            </label>
            <input type="text"/>
            <label >
                Mot de passe
            </label>
            <input type="password"/>
            <label >
                Commentaire
            </label>
            <textarea rows={2}/>

        </Form>
    )
}

const Locate = ()=> {

    return(
        <StyleLocate>
            <h4> Ma societe </h4>
            <p><span>🔺</span> +225 Bouake cote d'ivoire </p>
            <p>📞 +225 0585685461</p>
            <p><span>✉ </span> info@gmail.com</p>
        </StyleLocate>
    )
}

const Cont = ()=> {

    return(
        <div>
            <p>Contact us abut anything related to our company or service </p> <b/>
            <p>We'll do our best to get back to you as soon as possible</p>

        </div>
    )
}
export default Contact