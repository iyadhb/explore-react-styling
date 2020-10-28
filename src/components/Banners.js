import styled from 'styled-components'


export const Banner = styled.div`
background: red;
h1 {
    color: white;
    text-transform: uppercase;
}
@media (min-width:576px) {
    background: blue;
    h1 {
        color:yellow;
    }
}
`

export const SecondBanner = styled.div`
background: blue;
h1 {
    color: red;
    text-transform: uppercase;
}
@media (min-width:576px) {
    background: green;
    h1 {
        color:orange;
    }
}
`