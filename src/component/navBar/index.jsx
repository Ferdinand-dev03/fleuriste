import React, { useState }  from "react";
import styled from 'styled-components'
import {Link, NavLink, Outlet} from 'react-router-dom'
import color from "../../style/colors";
import { useTheme } from "../../utils/hook";
import Panier from "../panier";
import { plantList } from "../../data/plantList";

const Div = styled.div`
    display: flex;
    align-items: center;
    top: 0;
    left:  -45px;
    right: 0;
    w-index: 1000;
    justify-content: space-around;
    background-color: ${color.backgroundDark};
    height: 50px;
    transition: 0.5s;
`
const Li = styled.nav`
    display: flex;
    list-style-type: none;
    gap: 15px;
    font-size: 20px;
    transition: 0.5s;
    
`
const NavLinks = styled(Link)`
    position: relative;
    color: #fff;
    text-decoration: none;
    padding-bottom: 2px;
    transition: 0.5s;

    &:after{
    position: absolute;
    bottom: -2px;
    left: 0px;
    height: 1px;
    whidth: 0%;
    content: '';
    background-color: #fff;
    transition: 0.5s;
    }

    &:hover:after{
        width: 100%
    }
`
const Stylbtn = styled.button`
    background: transparent;
    padding: 4px 6px;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
`
const StylDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const DivStyl = styled.div`
    position: absolute;
    top: 40px

`

const NavBar = ({ajout})=> {
    const {theme}= useTheme()



    return(
        <Div theme={theme}>
            <h3>Logo</h3>
            <Search/>
            <nav >
                <ul>
                    <Li theme={theme}>
                        <Link to='/Paniers/:id'><Panier ajout={ajout}/></Link>
                        <NavLinks to='/'>Acceuil</NavLinks>
                        <NavLinks to='/Apropos'>A propos </NavLinks>
                        <NavLinks to='/Contact'>Contact</NavLinks>
                    </Li>
                </ul>
               
            </nav>
            <Outlet/>
        </Div>
    )
}

const Search = ()=> {

    const [value, setValue] = useState('')

    const handleClick = (searchItem) => {
        setValue(searchItem)

        console.log('search', searchItem)
    }

    return(
        <StylDiv>
            <div>
                <input type="search" 
                    value={value}
                    onChange={(e => setValue(e.target.value))}
                />
                <Stylbtn onClick={()=> handleClick(value)}>Search</Stylbtn>
            </div>

            <DivStyl>
                {plantList.filter(item => {
                    const searchTerm = value.toLocaleLowerCase();
                    const title = item.name.toLocaleLowerCase();

                    return (
                        searchTerm && 
                        title.startsWith(searchTerm) && 
                        title !== searchTerm);
                    }).slice(0, 10).map(item => <li 
                        onClick={()=> handleClick(item.name)}
                        key={item.id}>{item.name}</li>)}
            </DivStyl>

        </StylDiv>
    )
}

export default NavBar;


// <span class="material-icons-outlined">
// view_headline
// </span>

/*
search = <span class="material-icons-outlined">
search
</span>

panier =<span class="material-icons-outlined">
shopping_cart
</span>




*/