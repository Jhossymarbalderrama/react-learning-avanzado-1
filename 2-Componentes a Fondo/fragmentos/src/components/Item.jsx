import React from 'react'

export default function Item(props ) {
    return (
        <React.Fragment>
            <dt>{props.titulo}</dt>
            <dd>{props.definicion}</dd>
        </React.Fragment>
    )
}
