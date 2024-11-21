import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../utils/hook";
import color from "../../style/colors";
import { plantList } from "../../data/plantList";
import { useParams } from "react-router";



const StyleUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px
    transition:0.5s;
`
const StyleLi = styled.li`
    display: flex;
    gap: 46px;
    transition:0.5s;
    color: red;
    color: ${({theme})=> (theme === 'light' ? '#000000' : '#fff')}

`
const Parag = styled.p`
    display: flex;
    flex-direction: column;    
    gap: 10px;
    margin-left: 50px;
    margin-top: 15px;
    transition:0.5s;
`
const Img = styled.img`
    width: 250px;
    height: 55vh;
    border-radius: 15px;
    transition:0.5s;
`
const BtnDel = styled.button`
    display: flex;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    position: absolute;
    margin-left: 40%;
    float: right;
    &:hover{
        font-size: 15px;
    }
`
const AbonDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px
`
const Parags = styled.p`
    color: #666;
    font-family: italic;
`
const Button = styled.button`
    padding: 4px 8px;
    background-color: ${color.backgroundLight};
    border: none;
    margin: 2px 10px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
`
const Div = styled.div`
    display: flex:
    flex-direction: column;
    padding: 20px 20px 90px;
    border-bottom: 1px dashed;
    widht: 100%
`



const Paniers = ({ajout, onDelet})=> {
    const {theme} = useTheme()


return(
        <Div theme={theme}>
           
            <ListPanier ajout={ajout} onDelet={onDelet}/>
            
        </Div>
    )
}

const ListPanier = ({ajout, onDelet})=> {

    return <StyleUl>
        {ajout.map( list => <Details list={list} key={list.id} onDelet={onDelet} />)}
    </StyleUl>
}

const Details = ({list, onDelet}) => {

    

    const {theme} = useTheme()
    return <StyleLi key={list.id} theme={theme}>
        <Img src={list.picture} alt={`picture ${list.picture}`} />
        <Parag theme={theme}>
            <span >Nom : {list.title}</span>
            <span>Category : {list.label}</span>
            <span>Prix : {list.price} cfa</span>
            <span>light : {list.light}</span>
            <span>water: {list.water}</span>
            <Abonne list={list}/>
        </Parag>
        <BtnDel onClick={()=> onDelet(list.id)}>❌</BtnDel>
    </StyleLi>
}

const Abonne = ({list})=> {

    const [nombre, setPNombre] = useState(1)
    const prix = ((list.price + (10 / 100)) * nombre)

    return(
        <AbonDiv>
            <p>TTC : {prix.toFixed(2)} cfa</p>
            <Parags>- 10% avec abonnement</Parags>
            <div>
                <input type="email" placeholder="E-mail"/>
                <Button>S'abonnee</Button>
            </div>
           <div>
                <Button onClick={()=> setPNombre(item => item > 1 ? item -1 : 1)}>-</Button>
                <span>{nombre}</span>
                <Button onClick={()=> setPNombre(item => item +1)}>+</Button>
                <Button>Achetter</Button>
           </div>
            <p>🤍 ajouter a la liste des souhaits</p>
        </AbonDiv>
    )
}


export default Paniers;