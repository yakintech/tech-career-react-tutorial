import React, { useState } from 'react'

function StateArraySample() {
    const [numbers, setnumbers] = useState([10, 33, 1])

    const addRandom = () => {

        var newRandomNumber = Math.floor(Math.random() * 99999);

        setnumbers([...numbers, newRandomNumber]);

    }

    return (<>
        <button onClick={() => setnumbers([])}>Clear</button>
        <h1>{numbers.length}</h1>
        <button onClick={addRandom}>Add Random Number</button>
        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default StateArraySample