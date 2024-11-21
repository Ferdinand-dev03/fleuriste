import React from "react";
import styled from "styled-components";

import Rend from "../../component/Rend";
import Background from "../../component/backgImage/BackgroundImag";
import Product from "../../component/product/Product";
import About from "../About";
import Contact from "../contact";



const Home = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`



const Acceuil = ({onAdd, Active, onSouhait})=> {
    return(
        <Home>
            <Background/>
            <Rend/>
            <Product onAdd={onAdd} 
                Active={Active}
                onSouhait={onSouhait}
            />
            <About/>
            <Contact/>
            
        </Home>
       
    )
}

export default Acceuil