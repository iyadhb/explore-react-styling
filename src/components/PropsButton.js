import styled from 'styled-components'

const PropsButton = styled.button`
background: ${(props)=>props.color ? props.color : "green" };
color: white;
padding: 1rem;
font-size: 2rem;
&:hover {
    background: yellow;
    color: black;
}

`

export default PropsButton