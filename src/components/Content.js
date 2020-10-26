import React from 'react'
import styled from 'styled-components'

const Content = ({className}) => {
    return (
        <section className={className}>
            <h3>Section title</h3>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ea aperiam ducimus temporibus quo consequatur nulla vitae iste cum. Quas qui iste quidem officiis quasi corrupti, adipisci in eius earum?
            </p>
        </section>
    )
}

export default styled(Content)`
text-transform: capitalize;
padding:2rem;
${(props) => `background:${props.theme.secondaryColor}`};
${(props) => `color:${props.theme.primaryColor}`};
`
