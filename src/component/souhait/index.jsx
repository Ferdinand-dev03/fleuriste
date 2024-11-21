import styled from "styled-components"
import { plantList } from "../../data/plantList"

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const P = styled.p`
    font-size: 20px;
    border-bottom: 1px solid;
    widht: 100%;
    margin-top: 20px;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    font-size: 18px
`
const Span = styled.span`
    color: red
`
const Button = styled.button`
    background: transparent;
    border: none;
    margin-left: 10px;
`


const Souhait = ({souhait,onDeleSouh, Active})=> {

    return <DivStyle>
        <P>Listes des souhaits : {souhait.length} </P>
        <Ul>
            { souhait.map(list=> <i key={list.id}><Span>❤ </Span> {list.title}   
                <Button onClick={()=> onDeleSouh(list.id)}> 
                    ❌
                </Button>
            </i>)}
        </Ul>
    </DivStyle>
}

export default Souhait