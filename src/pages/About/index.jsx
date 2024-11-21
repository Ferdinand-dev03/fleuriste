import React from "react";
import image1 from '../../assets/calathea.jpg'
import image2 from '../../assets/calathea.jpg'
import styled from 'styled-components'
import { plantList } from "../../data/plantList";
import Cards from "../../component/card";
import card from '../../assets/lyrata.jpg'
import color from "../../style/colors";

const listes = [
    {
        image: card,
        id: '5484fsf'
    },
    {
        image: card,
        id: '548445f'
    },
    {
        image: card,
        id: '5412fsf'
    },
    {
        image: card,
        id: '54142fsf'
    },
]


const data = [
    {
        image: image1,
        id: '12144fd',
        title: '5 pasos para transplantar de manera facil y rapadia'
    },
    {
        image: image2,
        id:'grg2333',
        title: 'Los primor de manera facil y rapadia'
    },
]


const Li = styled.li`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    transition: 0.5s;
    
`
const Image = styled.img`
    width: 60vh;
    height: 40vh;
    

`
const Ul = styled.ul`
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
    width: 500px
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`
const StyleCard = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    margin: 20px 0px;
    background-color: ${color.backgroundLight};
   
`
const StileLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 10px 0px;
    margin: 0

`


const About = ()=> {

    return (
        <Div>
            <h2>A propos</h2>
            <Images/>
            <Card/>
           
        </Div>
    )
}

const Images = ()=> {

    return (
        <Ul>
            {data.map(list => <DataList list={list} key={list.id}/>)}
        </Ul>
    )
}

const DataList = ({list})=> {

    return (
        <Li key={list.id}>
            <Image src={list.image} alt='fleurs'/>
            <span> {list.title} </span>

        </Li>
    )
}

const Card = ()=> {

    return(
        <StyleCard>
           { listes.map(list =>  
               <StileLi key={list.id}>
                     <img
                
                    src={list.image} alt="imag"
                    width= '250px'
                    height=''
                /> 
            
               </StileLi>
            ) }
        </StyleCard>
    )
}

export default About