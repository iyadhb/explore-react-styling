import styled from "styled-components"
import img4 from '../images/image-4.jpg'

const Hero = styled.div`
min-height: ${props => (props.big ? "100vh" : "50vh")};
background-image:url(${props => props.img? props.img : img4});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;

`


export default Hero;