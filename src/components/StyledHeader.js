import React from 'react'
import styled from 'styled-components'

const StyledHeader = () => {
    return (
        <StyledWrapper>
            <h1>Hello from Styled header</h1>
            <h2 className="radnom">another styled header</h2>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.section`
background: red;
padding: .9rem 2rem;
transition: all 2s ease-in-out;
h1 {
    color: blue;
};
.radnom {
    color: white;
};
&:hover {
    background: gold;
}
`
export default StyledHeader
