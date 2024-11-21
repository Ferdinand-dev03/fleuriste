import React, { useEffect, useState } from 'react'
import Cards from '../card'
import { plantList } from '../../data/plantList'
import styled from 'styled-components'
import color from '../../style/colors'
import { useTheme } from '../../utils/hook'
import { Link } from 'react-router-dom'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const StyleUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 5px;
    column-gap: 50px;
`
const Par = styled.p`
    
    margin: 15px
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 230px;
    color: ${({theme}) => (theme === 'light' ? '#00000' : '#fff')};
    box-shadow: 0px 0px 1px;
    margin-top: 20px;
    transition: 0.5s;
    &:hover {
        box-shadow: 2px 2px 6px ${color.primary};
        cursor: pointer;
        
    }
`
const Img = styled.img`
    width: 100%;
    height: 40vh;
    border-radius: 15px;
`
const Parag = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 5px;
    color: ${({theme}) => (theme === 'light' ? '#00000' : '#fff')}
`
const Span = styled.span`
    color: #666;
    margin-bottom: 5px;
    color: ${({theme}) => (theme === 'light' ? '#00000' : '#666')}
`
const StyleSpan = styled.span`
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    color: ${({theme}) => (theme === 'light' ? '#00000' : '#fff')}
`
const StyleHover = styled.span`
    opacity: 1;
    transition: 0.5s;
    top: -2px;
    &:hover{
    }

`


const Product = ({onAdd, onSouhait, onSetActive}) => {

// fonction pour ajouter le produit au panier 
    
   

  return (
    <Div>
      <CardList onAdd={onAdd} onSouhait={onSouhait} onSetActive={onAdd}/>
      <Par>Voir plus</Par>
    </Div>
  )
}


const CardList = ({onAdd, Active, onSouhait})=> {

    return (
        <StyleUl>
            {plantList.map(list => <Cards
                key={list.id}
                picture={list.cover}
                title={list.name}
                label={list.category}
                price={list.price}
                light={list.light}
                water={list.water}
                onAdd={onAdd}
                onSouhait={onSouhait}
                onSetActive={Active}
                Active={Active}
            />) }
            
        </StyleUl>
    )
}


export default Product
