import styled from 'styled-components'

export const PropsButton = styled.button`
background: ${(props)=>props.color ? props.color : "green" };
color: white;
padding: 1rem;
font-size: 2rem;
margin: 1rem;
&:hover {
    background: yellow;
    color: black;
}

`
export const BigButton = styled(PropsButton)`
margin: 0.5rem;
text-transform: capitalize;
font-size: 3rem;
`
