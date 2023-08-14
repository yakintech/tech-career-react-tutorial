import React from 'react'

function OneWayBinding() {

    var name = "Çağatay Yıldız"

    var product = {
        name: "IPhone",
        price: 5500
    }

    var onlineStatus = false;

    var cities = ["İzmir", "İstanbul", "Ankara"];

    return (<>
        <h1>{name}</h1>
        <h2>Price: {product.price}</h2>

        {
            onlineStatus ? <h1>User Online!</h1> : <h1>User Offline!</h1>
        }

        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default OneWayBinding