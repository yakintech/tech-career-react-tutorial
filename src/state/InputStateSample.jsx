import React, { useState } from 'react'

function InputStateSample() {

    const [countries, setcountries] = useState(["Türkiye", "Yunanistan"]);
    const [name, setname] = useState("");

    const add = () => {

        name.trim();

        //eğer bu country varsa ekleme!!
        if (name != "") {
            var countryControl = countries.includes(name.trim());
            if (!countryControl) {
                setcountries([...countries, name])
                setname('');
            }
        }


    }

    return (<>

        <div>
            <label htmlFor="">Name:</label>
            <input value={name} type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>
        <hr />
        <ul>
            {
                countries.map(item => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default InputStateSample