import React from 'react'

function ChildComp(props) {

    return (<>
        <h1>{props.title}</h1>
        <h1>{props.country}</h1>
    </>
    )
}

export default ChildComp