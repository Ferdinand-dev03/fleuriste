import React, { useState } from 'react'
import styled from 'styled-components'
import color from '../../style/colors/'
import { useTheme } from '../../utils/hook'
import { Link } from 'react-router-dom'
import { plantList } from '../../data/plantList'


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
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: ${({theme}) => (theme === 'light' ? '#00000' : '#fff')}
`
const I = styled.i`
  position: absolute;
  display:flex;
  color: ${({theme})=> (theme === 'light' ? '#000000' : '#fff')}
  color: #00;
  top: 90;
  text-align: center;
  opacity: 0;
  transition: 0.5s;
  &:hover{
      opacity: 1;
  }
`

const Cards = ({picture, title,label, price,
    light,
    water,
    onAdd, 
    Active,
    onSouhait}) => { 

  const [isActive, setActive] = useState(false)
 
  const {theme} =useTheme()
  const action = Active === true ? '❤' : '🤍'

  const id = crypto.randomUUID()
  const handleClick = ()=> {
    const newTble = {
      picture, title, label,price, id, light, water
    }
    onAdd(newTble)
  }
  const handleSouhait = (id)=> {
    const newProduct = {
      title,
      id 
    }
    onSouhait(newProduct)
    setActive(t => !t)
  }

  return (
    <Card theme={theme}>
      <Img src={picture} theme={theme}/>
      <Parag theme={theme}> {title} </Parag>
      <Span theme={theme}> {label} </Span>
      <span>{price} cfa</span>
      <StyleSpan theme={theme}> <Link to={`/paniers/:${id}` }onClick={handleClick} >  <I>Ajouter au panier</I> 🛒</Link> <span onClick={handleSouhait}>
      <I>Ajouter a la liste des souhaits</I>
      {!Active ? ' 🤍 ' : ''}
      
        </span> </StyleSpan>
      {/* <span theme={theme}>{light}</span>
      <span theme={theme}>{water}</span> */}

    </Card>
  )
}

export default Cards
// bestSale: true,
		// light: 2,
		// water: 3,
		// cover: basil,
		// price: 5