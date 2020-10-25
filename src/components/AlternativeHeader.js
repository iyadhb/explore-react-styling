import React from 'react'
import styled from 'styled-components'

const StyledHeader = ({title, className}) => {
    return (
        <section className={className}>
            <h1>{title}</h1>
            <h2 className="radnom">another styled header</h2>
        </section>
    )
}

export default styled(StyledHeader)`
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

